import './App.css'
import Header from './pages/Header'
import Homepage from './pages/Homepage'
import Footer from './pages/Footer'

function App() {

  return (
    <>
      <div className="container"> 
        <div className="bg-white min-h-screen">
          <Header />
            <Homepage />
          <Footer />
        </div>
      </div>
      
    </>
  )
}

export default App
