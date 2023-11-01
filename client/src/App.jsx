import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Route,BrowserRouter,Routes} from "react-router-dom"

import Home from './views/home/home.component'
import Landing from './views/landing/landing.component'
import Detail from './views/detail/detail.component'
import Create from './views/create/create.component'


import './App.css'  


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<Home/>}/>
          <Route path="/home/:id" element={<Detail/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/" element={<Landing/>}/>
        </Routes> 
     </BrowserRouter>
       )
      }
      
      export default App;
    

    
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Enzo + Camilla</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>

      

    // </>
    

    

