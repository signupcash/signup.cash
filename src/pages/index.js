import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Hero } from '../components/Hero'
import {
  InlineCode,
  Paragraph,
  Caption,
  BigText,
  Link,
} from '../components/commons'
import Widont from '../components/Widont'
import Footer from '../components/Footer'

function App({ data }) {
  return (
    <Layout>
      <>
        <Helmet
          title={
            data.site.siteMetadata.title +
            ' - ' +
            data.site.siteMetadata.description
          }
        />
        <section className="relative max-w-screen-lg xl:max-w-screen-xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10">
            Build decentralized apps without compromising user experience
          </h1>
          <p className="max-w-screen-lg text-lg sm:text-2xl sm:leading-10 font-medium mb-10 sm:mb-11">
            Made for fast development time and{' '}
            <span className="text-violet-700">radical innovations</span> with
            digital signatures, Bitcoin Cash payments, and smart contracts.
          </p>

          <div className="flex flex-wrap space-y-4 sm:space-y-0 sm:space-x-4 text-center">
            <a
              className="w-full sm:w-auto flex-none bg-purple-700 hover:bg-violet-700 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200"
              href="https://docs.signup.cash"
            >
              Get started
            </a>
            <button
              type="button"
              className="w-full sm:w-auto flex-none bg-gray-50 text-gray-400 hover:text-gray-900 font-mono leading-6 py-3 sm:px-6 border border-gray-200 rounded-xl flex items-center justify-center space-x-2 sm:space-x-4 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-300 focus:outline-none transition-colors duration-200"
            >
              <span className="text-gray-900">
                <span
                  className="hidden sm:inline text-gray-500"
                  aria-hidden="true"
                >
                  ${' '}
                </span>
                npm install @signupcash/provider
              </span>
              <span className="sr-only">(click to copy to clipboard)</span>
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path d="M8 16c0 1.886 0 2.828.586 3.414C9.172 20 10.114 20 12 20h4c1.886 0 2.828 0 3.414-.586C20 18.828 20 17.886 20 16v-4c0-1.886 0-2.828-.586-3.414C18.828 8 17.886 8 16 8m-8 8h4c1.886 0 2.828 0 3.414-.586C16 14.828 16 13.886 16 12V8m-8 8c-1.886 0-2.828 0-3.414-.586C4 14.828 4 13.886 4 12V8c0-1.886 0-2.828.586-3.414C5.172 4 6.114 4 8 4h4c1.886 0 2.828 0 3.414.586C16 5.172 16 6.114 16 8"></path>
              </svg>
            </button>
          </div>
          <Hero />
        </section>
        <section className="relative max-w-screen-lg xl:max-w-screen-xl mx-auto">
          <div className="px-4 sm:px-6 md:px-8 mb-10 sm:mb-16 md:mb-20">
            <Caption as="h2" className="text-blue-700 mb-3 xl:ml-16">
              Build apps with
            </Caption>
            <BigText className="mb-8 xl:ml-16">
              <Widont>Fast and furious interactions</Widont>
            </BigText>
            <Paragraph className="mb-6 xl:ml-16">
              Signup is using <InlineCode>spend tokens</InlineCode> to allow
              users to grant your app permission to spend from their wallet
              within a boundary. This way, not every single transaction is
              required to be approved by the user. The end result is a better
              user experience and faster application.
            </Paragraph>
            <Link
              href="https://read.cash/@SIGNUP/how-spend-tokens-work-in-signup-dapp-wallet-3c718777"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-blue-700 hover:text-blue-500 xl:ml-16"
            >
              Learn more -&gt;
            </Link>
          </div>
        </section>
        <section className="relative max-w-screen-lg xl:max-w-screen-xl mx-auto">
          <div className="px-4 sm:px-6 md:px-8 mb-10 sm:mb-16 md:mb-20">
            <Caption as="h2" className="text-purple-700 mb-3 xl:ml-16">
              Authenticity is the key
            </Caption>
            <BigText className="mb-8 xl:ml-16">
              <Widont>Digital Signatures for everything!</Widont>
            </BigText>
            <Paragraph className="mb-6 xl:ml-16">
              Our digital signature API provides users the ability to trust your
              app to sign on behalf of them within the scope of your domain. So
              every data can be signed with user's wallet and be verified easily
              on your server with our utility package.
            </Paragraph>
            <Link
              href="https://docs.signup.cash/signatures"
              className="text-purple-700 hover:text-purple-500 xl:ml-16"
            >
              Learn more -&gt;
            </Link>
          </div>
        </section>
      </>
      <Footer />
    </Layout>
  )
}

export default App

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        telegramLink
        docsLink
      }
    }
  }
`
