import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import { paths } from './utilities/paths'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path={paths.home} Component={Home}/>
      </Routes>
    </HashRouter>
  )
}

export default App
