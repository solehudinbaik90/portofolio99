/** *************************************************************
 * Any file inside the folder pages/api is mapped to /api/* and *
 * will be treated as an API endpoint instead of a page.        *
 ****************************************************************/

const subscribe = async (req, res) => {
  const { email } = req.body

  if (req.method !== 'POST') {
    return res.status(405).send({ error: 'Request method is not allowed.' })
  }

  if (!email) {
    return res.status(400).json({ error: 'Email is required.' })
  }

  try {

    const API_KEY = process.env.BREVO_API_KEY

    if (!API_KEY) {
      return res.status(500).json({ error: 'Brevo API Key is missing in environment variables.' })
    }

    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': API_KEY,
      },
      body: JSON.stringify({
        email: email,
        updateEnabled: true,
        listIds: [Number(process.env.BREVOLISTID)],
      }),
    })

    if (response.status >= 400) {
      const errorData = await response.json()
      console.error('Brevo API Error Details:', errorData)
      return res.status(400).json({ error: 'There was an error subscribing to the list.' })
    }

    return res.status(201).json({ error: '' })
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() })
  }
}

export default subscribe
