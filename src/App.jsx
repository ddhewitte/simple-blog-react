import './App.css'
import Header from './pages/Header'
import Homepage from './pages/Homepage'
import Footer from './pages/Footer'
import { Route, Routes } from 'react-router-dom'
import Premium from './components/Premium'
import Login from './components/Login'
import Detail from './pages/Detail'
import ThemeProvider from './context/ThemeContext'

function App() {

  return (
    <>
      <div className="container"> 
        <div className="bg-white min-h-screen">
          <ThemeProvider>
            <Header />
              <div className="flex justify-center mt-5 p-2 mx-auto w-full">
                <Routes>
                  <Route path="/" element={<Homepage />}></Route>
                  <Route path="/detail/:id" element={<Detail />}></Route>
                  <Route path="/premium" element={<Premium />}></Route>
                  <Route path="/login" element={<Login />}></Route>
                </Routes>
              </div>
            <Footer />
          </ThemeProvider>
        </div>
      </div>
      
    </>
  )
}

export default App
