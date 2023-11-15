import './App.css'
import Home from './views/Home'
import Tarifs from './views/Tarifs'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainMenu from './layout/Main-menu';

function App() {


  return (
    <>
      <MainMenu></MainMenu>
        <Router>
            <Routes>
                <Route path="/" element={<Home title="Bonjour" />} />
                <Route path="/tarifs" element={<Tarifs />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
