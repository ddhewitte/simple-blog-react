import './App.css'
import Header from './pages/Header'
import Homepage from './pages/Homepage'
import Footer from './pages/Footer'
import { Route, Routes } from 'react-router-dom'
import Premium from './components/Premium'
import Login from './components/Login'

function App() {

  return (
    <>
      <div className="container"> 
        <div className="bg-white min-h-screen">
          <Header />
            <div className="flex justify-center mt-5 p-2 mx-auto w-full">
              <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/premium" element={<Premium />}></Route>
                <Route path="/login" element={<Login />}></Route>
              </Routes>
            </div>
          <Footer />
        </div>
      </div>
      
    </>
  )
}

export default App
