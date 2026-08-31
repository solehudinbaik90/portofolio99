import React from 'react'
import classNames from 'clsx'
import Head from 'next/head'
import Button from '@/components/Button'
import { BiCoffee } from 'react-icons/bi'
import { config } from '../theme.config'

const { tipUrl } = config.convertKit || {}

const TipJar = (props) => {
  const { className, ...rest } = props

  return (
    <div
      className={classNames(
        'my-8 flex flex-wrap items-center justify-around p-3 px-4',
        'bg-gradient-to-r from-alpha-100 via-alpha to-beta',
        className
      )}
      {...rest}
    >
      <Head>
        <link rel="preconnect" href="https://stripe.com" />
        <link rel="dns-prefetch" href="https://stripe.com" />
      </Head>
      <p className="my-2 text-black md:m-0">
        Hai, yang di sana! <strong className="text-black">Ingin mendukung karya saya?</strong>
      </p>
      <BiCoffee className="mx-4 ml-auto inline hidden text-5xl text-omega-800 md:block" />
      <div>
        <Button 
          size="xs" 
          className="font-bold" 
          href={tipUrl || '#'} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Traktir Saya kopi
        </Button>
      </div>
    </div>
  )
}

export default TipJar
