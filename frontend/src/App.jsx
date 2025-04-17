import './css/App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Favorites from './pages/Favorites'
import Navbar from './components/Navbar'
import { MovieProvider } from '../context/MovieContext'

function App() {

  return (
    <div>
      <MovieProvider>
        <Navbar />
        <main className='main-content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
      </MovieProvider>
    </div>
  )
}

export default App
