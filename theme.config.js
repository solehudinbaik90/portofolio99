/** *************************************************************
 * Please refer to the Theme Options section in documentation   *
 ****************************************************************/

/**
 * Icons from react-icons: https://react-icons.github.io/react-icons
 */

import { IoLogoTwitter, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5'
import { TfiHome, TfiPencilAlt } from 'react-icons/tfi'
import { SlUser, SlBriefcase, SlEnvolope, SlTrophy } from 'react-icons/sl'

/**
 * Main Menu Items
 */

export const menu = [
  {
    name: 'Beranda',
    slug: '/',
    Icon: TfiHome,
  },
  {
    name: 'Profil',
    slug: '/about',
    Icon: SlUser,
  },
  {
    name: 'Layanan',
    slug: '/services',
    Icon: SlBriefcase,
  },
  {
    name: 'Artikel',
    slug: '/blog',
    Icon: TfiPencilAlt,
  },
  {
    name: 'Proyek',
    slug: '/projects',
    Icon: SlTrophy,
  },
  {
    name: 'Kontak',
    slug: '/contact',
    Icon: SlEnvolope,
  },
]

/**
 * Social Links under the Main Menu
 */

export const social = [
  {
    name: 'Twitter',
    url: 'https://www.twitter.com/',
    Icon: IoLogoTwitter,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/',
    Icon: IoLogoInstagram,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/',
    Icon: IoLogoLinkedin,
  },
]

/**
 * General configurations
 */

export const config = {
  dateLocale: 'en-US',
  dateOptions: {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  },

  convertKit: {
    tipUrl: 'https://saweria.co/msoleh90', 
  },
  contactForm: {
    inputs: require('./content/contact-form.json'),
    recipient: 'solehudinz3692@gmail.com',
    sender: 'onboarding@resend.dev',
    subject: 'EMAIL NOTIFICATION SUBJECT',
  },
}

/**
 * MDX/Markdown configurations
 */

export const mdxConfig = {
  publicDir: 'public',
  pagesDir: 'content',
  fileExt: '.md',
  collections: ['/blog', '/projects'],
  remarkPlugins: [],
  rehypePlugins: [],
}

/**
 * Global SEO configuration for next-seo plugin
 * https://github.com/garmeeh/next-seo
 */

export const siteMetaData = {
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'),
  authorName: 'Muhamad Soleh',
  siteName: 'Muhamad Soleh',
  defaultTitle: 'Muhamad Soleh Portofolio',
  titleTemplate: 'Muhamad Soleh | %s',
  description: 'Portofolio Muhamad Soleh Menampilkan CV dan Proyek.',
  email: 'solehudinz3692@gmail.com',
  locale: 'en_US',
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
}
