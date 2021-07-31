import React from 'react'
import axios from 'axios'
import SyntaxHighlighter from 'react-syntax-highlighter'
import dark from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark'
import { CodeWindow } from './CodeWindow'
import { Token } from './Code'
import { useAnimation } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import styles from './Hero.module.css'
import { useMedia } from '../hooks/useMedia'
import GradientLockup from './GradientLockup'

// number is taken from bitcoincash.network
const BCHRaisedByFS = 8978.27

const jsCode = `
  import Signup from "@signupcash/provider";

  const signup = new Signup.cash({ addr: 'DEVELOPER BCH ADDRESS'});

  // Request user permission to spend up to $5
  const { status } = await signup.requestSpendToken({ budget: 5.0 });

  if (status === "GRANTED") {
    // charge your user $2
    const { txResult } = await signup.pay(2, "usd");
    console.log('Done!, transaction id is =>', txResult.txId);
  }


`

export function Hero() {
  const [bchPrice, setBchPrice] = useState(500)
  const [finished, setFinished] = useState(false)
  const supportsMd = useMedia('(min-width: 640px)')
  const [isMd, setIsMd] = useState(false)

  useEffect(() => {
    axios
      .get('https://index-api.bitcoin.com/api/v0/cash/price/usd')
      .then(({ data }) => {
        if (data.price) {
          setBchPrice(data.price / 100)
        }
      })
  })

  return (
    <GradientLockup
      color="purple"
      pin="right"
      left={
        <div className="grid pt-0 mt-0 lg:mt-5 sm:pt-5 px-0">
          <div className="relative col-start-2 col-end-3 lg:col-end-3 row-start-2 row-end-3 lg:row-start-3 lg:row-end-4 self-center px-0 md:px-8 pt-6 md:pt-8 lg:px-0 lg:pt-0">
            <div className="relative z-10 rounded-tl-xl md:rounded-t-xl lg:rounded-xl shadow-lg lg:-mr-8 tabular-nums">
              <div className="bg-white md:rounded-tl-xl lg:rounded-t-xl">
                <div className="absolute invisible sm:visible top-0 sm:top-4 left-4 sm:top-6  w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    viewBox="0 0 64 64"
                    className="absolute inset-0 w-full h-full text-green-400"
                    transform="rotate(90) scale(1 -1)"
                  >
                    <path
                      d="M6,32a26,26 0 1,0 52,0a26,26 0 1,0 -52,0"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-dasharray="163.38558959960938px 163.38558959960938px"
                      stroke-width="12"
                      stroke-dashoffset="0px"
                    ></path>
                  </svg>
                  <div className="relative bg-white rounded-full w-10 h-10 shadow-sm"></div>
                  <svg
                    viewBox="0 0 64 64"
                    className="absolute inset-0 w-full h-full"
                  >
                    <path
                      d="M22.668 33.333l5.333 5.334 13.334-13.334"
                      fill="none"
                      stroke="#22C55E"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="26.399829864501953px 26.399829864501953px"
                      opacity="1"
                      stroke-dashoffset="0px"
                    ></path>
                  </svg>
                </div>
                <dl className="p-4 pb-0 sm:p-6 sm:pb-0">
                  <div className="flex-none w-full pl-18 sm:pl-20 sm:py-0.5">
                    <dt className="text-sm font-medium">
                      Money raised for building on Bitcoin Cash
                    </dt>
                    <dd className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                      $
                      <span>
                        {((BCHRaisedByFS * bchPrice) / 1000000).toFixed(2)}
                      </span>
                      M
                    </dd>
                  </div>
                  <div className="visible sm:invisible flex items-center border-t border-gray-100 -mx-2 mt-2 px-4 font-mono text-xs leading-5">
                    <dt className="whitespace-pre">
                      Next killer app is only a few lines of code!
                    </dt>
                  </div>
                  <div className="invisible sm:visible flex items-center border-t border-gray-100 -mx-2 sm:-mx-6 mt-4 sm:mt-6 px-4 sm:px-6 py-3 font-mono text-xs leading-5">
                    <dt className="whitespace-pre">Next killer app </dt>
                    <dd className="flex-auto">is only -></dd>
                    <dd className="text-rose-700 sm:flex lg:hidden xl:flex items-center">
                      <span>a few more lines of code</span>
                      <svg
                        viewBox="0 0 82 12"
                        width="82"
                        height="12"
                        className="flex-none ml-2 "
                      >
                        <rect width="12" height="12" fill="#f43f5e"></rect>
                        <rect
                          width="12"
                          height="12"
                          x="14"
                          fill="green"
                          style={{ transformOrigin: '20px 6px 0px' }}
                        ></rect>
                        <rect
                          width="12"
                          height="12"
                          x="28"
                          fill="green"
                          style={{ transformOrigin: '34px 6px 0px' }}
                        ></rect>
                        <rect
                          width="12"
                          height="12"
                          x="42"
                          fill="green"
                          style={{ transformOrigin: '48px 6px 0px' }}
                        ></rect>
                        <rect width="12" height="12" x="56" fill="green"></rect>
                        <rect width="12" height="12" x="70" fill="green"></rect>
                      </svg>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <p className="text-white px-2 mt-5 mr-5">
              Hundreds of developers are building on Bitcoin Cash to bring
              economic freedom to the world. Use Signup to build your next dApp
              and use{' '}
              <a
                href="https://flipstarter.cash"
                target="_blank"
                rel="noreferrer noopener"
                className="text-teal-700 underline font-semibold"
              >
                Flipstarter
              </a>{' '}
              and Signup to raise funds!
            </p>
          </div>
        </div>
      }
      right={
        <CodeWindow
          className={`${styles.codeWindow} bg-purple-200 pb-6 md:pb-0`}
        >
          <SyntaxHighlighter
            customStyle={{ fontSize: '0.9em' }}
            showLineNumbers
            style={dark}
            language="javascript"
          >
            {jsCode}
          </SyntaxHighlighter>
        </CodeWindow>
      }
    />
  )
}