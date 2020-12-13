import React from 'react'

export default function Widont({ children }) {
  return children.replace(/ ([^ ]+)$/, '\u00A0$1')
}
