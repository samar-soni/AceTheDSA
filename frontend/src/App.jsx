import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Footer from './components/Footer/Footer'
import Practice from './Pages/Practice/Practice'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Company from './Pages/Company/Company'
import Revision from './Pages/Revision/Revision'
import LoginPopup from './components/LoginPopup/LoginPopup'
import { useContext } from 'react'
import { StoreContext } from './context/StoreContext'
import CompanyQuestions from './Pages/Company/CompanySpecific/CompanyQuestions'
import DisplayTopicWise from './Pages/Practice/Topic/DisplayTopicWise'
import PrivateRoute from './components/PrivateRoute/privateRoute'
import Leetcode from './Pages/Leetcode/Leetcode'




function App() {

  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const { companies } = useContext(StoreContext)
  const { topics } = useContext(StoreContext)


  return (
    <>
      {showLoginPopup ? <LoginPopup setShowLoginPopup={setShowLoginPopup} /> : <></>}
      <Navbar showLoginPopup={showLoginPopup} setShowLoginPopup={setShowLoginPopup} />
      
      <Routes>
        <Route path="/" element={<Home />} />


        <Route
          path="/practice"
          element={
            <PrivateRoute>
              <Practice />
            </PrivateRoute>
          }
        />

        <Route path="/company" element={
          <PrivateRoute>
            <Company />
          </PrivateRoute>
        } />
        <Route path="/revision" element={
          <PrivateRoute>
            <Revision />
          </PrivateRoute>
        } />
         <Route path="/leetcode" element={
          <PrivateRoute>
            <Leetcode/>
          </PrivateRoute>
        } />


        {companies.map(company => (
          <Route
            key={company}
            path={`/company/${company}`}
            element={<CompanyQuestions company={company} />} // Replace with dynamic component if needed
          />
        ))}
        {topics.map(topic => (
          <Route
            key={topics}
            path={`/practice/${topic}`}
            element={<DisplayTopicWise topic={topic} />} // Replace with dynamic component if needed
          />
        ))}



      </Routes>
      <Footer />

    </>
  )
}

export default App
