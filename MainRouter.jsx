import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './src/components/Home'
import About from './src/components/about'
import Contact from './src/components/contact'
import Education from './src/components/education'
import Project from './src/components/project'
import Layout from './src/components/Layout'
import Services from './src/components/services'

const MainRouter = () => {
    return (<div>
        <Layout/>
        <Routes>

            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/education" element={<Education />} />
            <Route exact path="/project" element={<Project />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/services" element={<Services />} />

        </Routes>
    </div>
)
}
export default MainRouter
