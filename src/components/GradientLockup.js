import React from 'react'
import { gradients } from '../utils/gradients'
import { motion } from 'framer-motion'
import styles from './GradientLockup.module.css'

const rotation = {
  '-1': '-rotate-1',
  '-2': '-rotate-1 sm:-rotate-2',
  1: 'rotate-1',
  2: 'rotate-1 sm:rotate-2',
}

export default function GradientLockup({
  header,
  left,
  right,
  color,
  rotate,
  pin = 'left',
  gradientProps = {},
}) {
  return (
    <div className={`grid ${styles.root} mt-5 lg:mt-0`}>
      <div
        className={`col-start-2 col-end-3 lg:col-start-1 lg:col-end-5 ${
          left && right ? 'row-start-2 row-end-4' : 'row-start-2 row-end-5'
        } lg:row-end-5 lg:py-10 xl:py-16 flex ${
          pin === 'left' ? '-ml-8 sm:pr-4 sm:ml-0 ' : '-mr-8 sm:pl-4 sm:mr-0 '
        }`}
      >
        <motion.div
          className={`w-full flex-none -ml-full md:rounded-3xl transform shadow-lg bg-gradient-to-br ${gradients[color][0]} ${rotation[rotate]}`}
          {...gradientProps}
        />
      </div>
      {header && (
        <div className="relative col-start-1 col-end-4 px-4 sm:px-6 md:px-8 lg:px-0 lg:col-start-2 lg:col-end-4 xl:col-end-3 row-start-1 row-end-2 xl:row-end-3 pb-8 lg:pb-11 xl:pb-0">
          {header}
        </div>
      )}
      {left && right ? (
        <>
          <div
            style={{ height: 400 }}
            className={`relative col-start-2 col-end-3 lg:col-end-3 row-start-2 row-end-3 lg:row-start-3 lg:row-end-4 sm:self-center ${
              pin === 'left' ? 'pr-0' : 'pl-0'
            } sm:px-6 md:px-8 pt-6 md:pt-8 lg:px-0 lg:pt-0`}
          >
            {left}
          </div>
          <div
            style={{ maxWidth: '100%', overflow: 'scroll' }}
            className="relative w-full lg:w-auto col-start-1 col-end-4 md:px-8 lg:px-0 lg:col-start-3 lg:col-end-4 row-start-3 row-end-4 lg:row-start-2 lg:row-end-5 self-center pb-8 lg:pb-0"
          >
            {right}
          </div>
        </>
      ) : (
        <div className="relative w-full col-start-1 lg:col-start-2 col-end-4 row-start-2 row-end-5 py-8 md:px-8 lg:p-0">
          {left || right}
        </div>
      )}
    </div>
  )
}
