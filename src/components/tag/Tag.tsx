import * as React from 'react'
import './tag.css'

type TProps = {
  className?: string
}

const Tag = ({ className } : TProps) => {
  return (
    <div className={`tag ${className ?? ''}`}>
      <p className='tag-text'>18++</p>
    </div>
  )
}

export default Tag
