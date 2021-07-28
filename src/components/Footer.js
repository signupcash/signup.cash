import React from 'react'
import { Link } from 'gatsby'
import clsx from 'clsx'
import styles from './Footer.module.css'
import logo from '../images/signup-logo.png'

const footerNav = {
  'Getting started': {
    className: 'row-span-2',
    items: [
      { title: 'Documentation', href: 'https://docs.signup.cash' },
      { title: 'Demos', href: 'https://signup-examples-v1.vercel.app/' },
      {
        title: 'Intro Blog Post',
        href:
          'https://read.cash/@SIGNUP/signups-new-bch-web-wallet-is-released-4fcd8576',
      },
    ],
  },
  Core: {
    className: 'row-span-2',
    items: [
      { title: 'Wallet', href: 'https://wallet.signup.cash' },
      { title: 'Contact', href: 'mailto:hello@signup.cash' },
    ],
  },
  Community: {
    items: [
      { title: 'GitHub', href: 'https://github.com/signupcash' },
      { title: 'Twitter', href: 'https://twitter.com/signupwallet' },
      {
        title: 'Telegram',
        href: 'https://t.me/joinchat/NAXHtw_YK7Qu_MDJt3aOZw',
      },
      { title: 'ReadCash', href: 'https://read.cash/@SIGNUP' },
    ],
  },
}

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-10 ">
      <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8">
        <ul
          className={`${styles.nav} text-sm font-medium pb-14 sm:pb-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 `}
        >
          <li className="space-y-5">
            <div className="py-5 sm:pt-6">
              <img src={logo} style={{ width: 120 }} />
            </div>
          </li>

          {Object.keys(footerNav).map((section, i) => (
            <li
              key={section}
              className={clsx('space-y-5 mb-10', footerNav[section].className)}
            >
              <h2 className="text-xs font-semibold tracking-wide text-gray-900 uppercase">
                {section}
              </h2>
              <ul className="space-y-4">
                {footerNav[section].items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>
                      <a className="hover:text-gray-900 transition-colors duration-200">
                        {item.title}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
