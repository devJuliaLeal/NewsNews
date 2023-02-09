import React from 'react'
import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import Analysis from './components/analysis/Analysis'
import Cryptos from './components/cryptos/Cryptos'


const App = () => {
  return (

    <div>
        <Nav/>
        <Home/>
        <Analysis/>
        <Cryptos/>
      

    </div>
  )
}

export default App