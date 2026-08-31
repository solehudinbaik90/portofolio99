/** *************************************************************
 * Any file inside the folder pages/api is mapped to /api/* and *
 * will be treated as an API endpoint instead of a page.        *
 ****************************************************************/

import { Resend } from 'resend'
import { config } from '../../theme.config'

const resend = new Resend(process.env.RESEND_API_KEY)

const contact = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ error: 'Request method is not allowed.' })
  }

  const { email } = req.body
  const { recipient, sender, subject } = config.contactForm || {}

  if (!recipient) {
    return res
      .status(400)
      .json({ error: 'Missing [config.contactForm.recipient] property in theme options.' })
  }
  if (!sender) {
    return res
      .status(400)
      .json({ error: 'Missing [config.contactForm.sender] property in theme options.' })
  }
  if (!email) {
    return res
      .status(400)
      .json({ error: 'Missing email address. Please provide a correct email address.' })
  }

  const getHtmlBody = (body) => {
    return Object.entries(body).map(([key, value]) => {
      if (typeof value === 'string') {
        return `<b>${key}</b>: ${value}`
      }
      if (typeof value === 'boolean') {
        return value === true ? key : false
      }
      if (typeof value === 'object') {
        return `<b>${key}</b>: ${getHtmlBody(value)?.filter(Boolean).join(', ')}`
      }
      return html
    })
  }

  let html = getHtmlBody(req.body)
  if (Array.isArray(html)) {
    html = html.join('<br />')
  }

  try {

    const response = await resend.emails.send({
      to: recipient,
      from: sender,
      replyTo: email,
      subject: req.body.subject || subject || 'Contact form entry',
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; line-height: 1.6;">
          <h2 style="color: #111;">Pesan Baru Diterima</h2>
          <hr style="border: 0; border-top: 1px solid #eee; margin-bottom: 20px;" />
          <div>${html}</div>
          <hr style="border: 0; border-top: 1px solid #eee; margin-top: 20px;" />
          <p style="font-size: 11px; color: #999;">Dikirim secara otomatis via Resend dari Website Portofolio Anda.</p>
        </div>
      `,
    })

    if (response.error) {
      throw new Error(response.error.message)
    }

    return res.status(200).json({ error: '' })
  } catch (error) {
    console.error('Resend Error:', error)
    return res.status(error.statusCode || 500).json({ error: error.message || 'Gagal mengirim email.' })
  }
}

export default contact
