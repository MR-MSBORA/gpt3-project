import React from 'react'
import Article from './components/article/Article.jsx'
import Brand from './components/brand/Brand.jsx'
import Cta from './components/cta/Cta.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import Features from './components/features/Features.jsx'
import Blog from './containers/blog/Blog.jsx'
import Feature from './containers/feature/Feature.jsx'
import Footer from './containers/footer/Footer.jsx'
import Header from './containers/header/Header.jsx'
import Possibility from './containers/possibility/Possibility.jsx'
import WhatGPT3 from './containers/whatGPT3/WhatGPT3.jsx'
import './App.css'
const App = () => {
  return (
    <>
   <div className='App'>
        <div className='gradient__bg'>
            <Navbar/>

            <Header/>
        </div>
            <Brand/>
            <WhatGPT3/>
            <Feature/>
            <Possibility/>
            <Cta/>
            <Blog/>
            <Footer/>
    </div>
     </>
  )
}

export default App