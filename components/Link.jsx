import React from 'react'
import NextLink from 'next/link'

const isFileLink = (href) => href?.startsWith('/') && /\.[a-zA-Z0-9]+$/.test(href)

const Link = ({ href, children, legacyBehavior, passHref, download, ...props }) => {
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))
  const isFile = isFileLink(href)

  if (isFile) {
    const fileProps = { href, download: download ?? true, ...props }

    return legacyBehavior && React.isValidElement(children) ? (
      React.cloneElement(children, fileProps)
    ) : (
      <a {...fileProps}>{children}</a>
    )
  }

  return isInternalLink ? (
    <NextLink href={href} passHref={passHref} legacyBehavior={legacyBehavior} {...props}>
      {children}
    </NextLink>
  ) : (
    <a href={href} {...props}>
      {children}
    </a>
  )
}

export default Link
