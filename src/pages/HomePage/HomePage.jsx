import React from 'react'
import { HomeBanner } from './HomeBanner/HomeBanner'
import { OnlyOnNetflix } from './OnlyOnNetflix/OnlyOnNetflix'
import './style.scss'
const HomePage = () => {
  return (
    <div>
      <HomeBanner/>
      <OnlyOnNetflix/>
    </div>
  )
}

export default HomePage