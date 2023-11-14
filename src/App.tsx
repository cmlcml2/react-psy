import { useState } from 'react'
import './App.css'
import Home from './views/Home'
import Tarifs from './views/Tarifs'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainMenu from './layout/Main-menu';

function App() {
  const [count, setCount] = useState("3")


  return (
    <>
      <MainMenu></MainMenu>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tarifs" element={<Tarifs />} />
            </Routes>
        </Router>

      {/*<Home title={count}></Home>*/}
      {/*<Button onClick={() => setCount((parseInt(count) + 1).toString())}>Coucou</Button>*/}
    </>
  )
}

export default App
