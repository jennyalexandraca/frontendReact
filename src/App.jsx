import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Formulario from './Components/Formulario'
import Card from './Components/Card'

let id = 0

function App() {

  const [colores, setColores] = useState([])
  
  function manejoColor (nombre, color) {
    // console.log(color)
    const nuevoColor = [...colores]
    nuevoColor.push({
      id: id++,
      name: nombre,
      color: color,
    })
    // console.log(nuevoColor)
    setColores(nuevoColor)

}

  return (
    <>
      <Header title= "Te mostramos tu color favorito:"/>
      <Formulario onSubmit={manejoColor}/>
      <hr/>
      {colores.map((color) => {
        return <Card key={color.id} title={color.name}color={color.color}/>
      })}
    </>
  )
}

export default App
