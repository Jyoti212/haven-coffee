import React, { Suspense, lazy } from 'react'
import Navbar from './components/navbar'
import Home from './pages/home'
import { Routes, Route } from 'react-router-dom'

const About = lazy(() => import('./pages/about'))
const Contact = lazy(() => import('./pages/contact'))
const Menu = lazy(() => import('./pages/menu'))
const UserDetails = lazy(() => import('./pages/userDetails'))
const PostDetails = lazy(() => import('./pages/postDetails'))
const NotFound = lazy(() => import('./pages/notfound'))
const Footer = lazy(() => import('./components/footer'))

function App() {
  return (
    <div>
      <Navbar />

      <Suspense fallback={<div style={{ padding: 40 }}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:id" element={<UserDetails />} />
          <Route path="/post/:id" element={<PostDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </Suspense>
    </div>
  )
}

export default App