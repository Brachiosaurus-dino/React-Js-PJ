
import './css/App.css'
import Home from './pages/Home';
import {Routes,Route} from 'react-router-dom'
import Favorites from './pages/favorite';
import Navbar from "./components/Navbar";
import { MovieProvider } from './context/Moviecontext';

function App() {

  return (
    <MovieProvider>
      <Navbar/>
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/favorites' element={<Favorites/>}/>

    </Routes>
  </main>
  </MovieProvider>
   
  )
}

export default App;
