import React from 'react'
import Home from './pages/Home'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Blog from './pages/blog'
import Signin from './pages/Signin'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import CourseDetails from "./components/CourseDetails";
import Courses from './pages/courses'

const App = () => {
  return (
    <BrowserRouter>
    <Header></Header>
    <Routes>
    
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path="/course" element={<Courses/>} />
      <Route path="/course/:id" element={<CourseDetails />} />
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/sign-in' element={<Signin/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
    </Routes>

    </BrowserRouter>
  )
}

export default App
