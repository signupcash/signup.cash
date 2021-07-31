import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from 'gatsby'
import logo from '../images/signup-logo.png'

import './layout.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author
          telegramLink
          githubLink
          docsLink
        }
      }
    }
  `)

  return (
    <div
      style={{ marginLeft: 20, marginRight: 20 }}
      className="text-gray-500 antialiased bg-white sm:ml-16 sm:mr-16 js-focus-visible"
    >
      <div className="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44 overflow-hidden">
        <header className="relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto">
          <div className="border-b border-gray-200 py-6 flex items-center justify-between mb-16 sm:mb-20 -mx-4 px-4 sm:mx-0 sm:px-0">
            <span>
              <img src={logo} style={{ width: 100 }} />
            </span>
            <div className="flex space-x-6 sm:space-x-10">
              <a
                className=" flex-none bg-purple-600 hover:bg-purple-500 text-white font-semibold py-2 px-4 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200"
                href="https://wallet.signup.cash"
              >
                <span className="sm:hidden">Wallet</span>
                <span className="hidden sm:inline">Web Wallet</span>
              </a>
              <a
                className="text-base leading-6 py-2 font-medium hover:text-gray-600 transition-colors duration-200"
                href="https://docs.signup.cash"
              >
                <span className="sm:hidden">Docs</span>
                <span className="hidden sm:inline">Documentation</span>
              </a>
              <a
                href="https://github.com/signupcash"
                className="text-gray-400 py-2 hover:text-gray-500 transition-colors duration-200"
              >
                <span className="sr-only">Signup on GitHub</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </header>
        {children}
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
