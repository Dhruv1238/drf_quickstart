import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Data from './pages/Data'
import Header from './components/Header'





function App() {

  return (
    <Router>
      <div className="">
        <Header />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/data/:id" Component={Data} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
