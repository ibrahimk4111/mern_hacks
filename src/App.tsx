import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import { paths } from './lib/paths'
import Login from './components/login/Login'
import Header from './components/header/Header'
import Register from './components/register/Register'
import { Toaster } from "@/components/ui/toaster"

function App() {

  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path={paths.home} Component={Home}/>
        <Route path={paths.auth.login} Component={Login}/>
        <Route path={paths.auth.register} Component={Register}/>
      </Routes>
      <Toaster />
    </HashRouter>
  )
}

export default App
