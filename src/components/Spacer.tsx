import React from 'react'

interface PROPS {
  size?: string
}

const Spacer: React.VFC<PROPS> = ({ size = 'h-6' }) => {
  return <span className={size} />
}

export default Spacer
