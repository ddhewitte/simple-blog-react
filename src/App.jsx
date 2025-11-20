import './App.css'
import Header from './pages/Header'
import Homepage from './pages/Homepage'
import Footer from './pages/Footer'
import { Route, Routes } from 'react-router-dom'
import Premium from './components/Premium'
import Login from './components/Login'
import Detail from './pages/Detail'
import {useTheme} from './context/ThemeContext'

function App() {
  //get theme context
  const ThemeContext = useTheme();
  const { theme, setThemeToDark, setThemeToLight } = ThemeContext;

  return (
    <>
      <div className="container"> 
        <div className={`min-h-screen ${ theme }`}>
          <Header />
            <div className="flex justify-center mt-5 p-2 mx-auto w-full">
              <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/detail/:id" element={<Detail />}></Route>
                <Route path="/premium" element={<Premium />}></Route>
                <Route path="/login" element={<Login />}></Route>
              </Routes>
            </div>
          <Footer setDark={setThemeToDark} setLight={setThemeToLight}/>
        </div>
      </div>
      
    </>
  )
}

export default App
