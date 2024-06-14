

import Header from './components/Header'
import HeadlineCard from './components/HeadlineCard'
import HeroPage from './components/HeroPage'
import Food from './components/Food';
import Category from './components/Category'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';





import './index.css'


function App() {
 

  return (
    <>
    <Router>
      
<Routes>
     {/* <Header/>
    <HeroPage/>
    <HeadlineCard/>
    <Food/>
    <Category/>  */}
    
    <Route path="/header"  Component={Header} />
    <Route path="/"  Component={HeroPage} />
    <Route path="/headline"  Component={HeadlineCard} />
    <Route path="/food"  Component={Food} />
    <Route path="/category"  Component={Category} />
</Routes>
       
    </Router>

     
    </>
  )
}

export default App
