import { Route, Routes } from 'react-router-dom'
import './App.css'
import PsychologistsPage from './pages/PsychologistsPage/PsychologistsPage.jsx'
import FavoritesPage from './pages/FavoritesPage/FavoritesPage.jsx'
import HomeTab from './pages/HomeTab/HomeTab.jsx'

function App() {

  return (
    <Routes>
      <Route path='psychologists' element={<PsychologistsPage/>}/>
      <Route path='favorites' element={<FavoritesPage/>}/>
      <Route index element={<HomeTab />} />
    </Routes>
  )
}

export default App
