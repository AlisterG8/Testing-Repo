import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AComponent from './assets/components/AComponent'
import img from '../src/data/img.js'

function App() {
  

  return (
    <div>
      <h1>a</h1>
      {img.map( (data) =>
                    <AComponent key={data.Title}
                        image={data.Image} 
                        title={data.Title} 
                    />                
            )}


    </div>
  )
}

export default App
