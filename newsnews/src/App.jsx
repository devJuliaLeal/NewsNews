import React from 'react'
import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import Analysis from './components/analysis/Analysis'
import Cryptos from './components/cryptos/Cryptos'
import News from './components/news/News'


const App = () => {
  return (

    <>
        <Nav/>
        <Home/>
        <Analysis/>
        <Cryptos/>
        <News/>


    </>
  )
}

export default App