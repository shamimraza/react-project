import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componentes/Navbar/Navbar'
import PriceList from './componentes/PriceList/PriceList'
import Deshbord from './componentes/Deshbord/Deshbord'
import PhoneBar from './componentes/PhoneBar/PhoneBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <h2 className='text-5xl font-bold text-center mt-4 text-purple-500'>Hello from tailwind</h2> 
      <PriceList></PriceList> 
      <Deshbord></Deshbord>  
      <PhoneBar></PhoneBar>
    </div>
  )
}

export default App
