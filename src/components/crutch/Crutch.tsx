import * as React from 'react'
import CrutchPic from '../../assets/crutch.png'
import './crutch.css'

type TProps = {
  className?: string
}

const Crutch = ({ className } : TProps) => {
  return (
    <img src={CrutchPic} alt="crutch" className={`crutch ${className ?? ''}`} />
  )
}

export default Crutch
