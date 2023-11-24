import './App.css'
import Home from './views/Home'
import Prices from './views/Prices'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainMenu from './layout/Main-menu';
import {BASE_PATH, PRICES_PATH} from "./constants/routes/RoutePaths.ts";

function App() {


  return (
    <>
      <MainMenu></MainMenu>
        <Router>
            <Routes>
                <Route path="/" element={<Home title="Bonjour test" />} />
                <Route path={BASE_PATH} element={<Home title="Bonjour test" />} />
                <Route path={PRICES_PATH} element={<Prices />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
