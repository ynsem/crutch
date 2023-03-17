import * as React from 'react'
import Tag from '../../components/tag'
import Bug from '../../components/bug'
import Crutch from '../../components/crutch'
import Footer from '../../components/footer'
import './main.css'

const ANIMATION_DELAY_STEP = 150
const NAME = 'Костыли против багов'

const Main = () => {
  const [text, setText] = React.useState<string[]>([])

  React.useEffect(() => {
    for (let i = 0; i < NAME.length; i++) {
      setTimeout(() => {
        setText(prevState => [...prevState, NAME[i]])
      }, ANIMATION_DELAY_STEP * i)
    }
  }, [])

  return (
    <main className='main'>
      <Tag className='tag-position'/>
      <Bug className='bug-position'/>
      <Crutch className='crutch-position'/>
      <Footer />

      <p className='authors-text'>
        Дэн Абрамов, Эван Ю <br />
        <span className='authors-text-additional'>и все друзья и знакомые кролика</span>
      </p>

      <p className='name-text'>
        {text.join('')} <br />
        {/* <span className='name-text-additional'>против</span><br />
        Багов */}
      </p>
    </main>
  )
}

export default Main
