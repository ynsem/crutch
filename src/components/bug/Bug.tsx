import * as React from 'react'
import BugPic from '../../assets/bug.png'
import './bug.css'

type TProps = {
  className?: string
}

const Bug = ({ className } : TProps) => {
  return (
    <img src={BugPic} alt="bug" className={`bug ${className ?? ''}`} />
  )
}

export default Bug
