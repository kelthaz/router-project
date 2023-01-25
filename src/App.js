import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home.js'
import Portafolio from './components/portafolio/Portafolio.js';
import { ProtectedRoute } from './components/ProtectedRoute/protectedRoute';

const App = () => {

  return (
    <>
    <BrowserRouter>
      <Routes>

      <Route element={<ProtectedRoute isAllowed={true}/>}> 
        <Route path='/portafolio' element={<Portafolio/>}> </Route>
      
      </Route>

        <Route path='/home' element={<Home/>}> </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App