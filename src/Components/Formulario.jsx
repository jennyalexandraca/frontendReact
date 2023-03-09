import { useState } from "react"

function Formulario (props) {
    const [input, setInput] = useState('')
    const [inputColor, setInputColor] = useState('')

    function manejoNombre(e) {
        const inputName = e.target.value.trim()
        setInput(inputName)
        // console.log(e.target.value)
    }

    function manejoColor(e) {
        const inputColor = e.target.value
        setInputColor(inputColor)
        // console.log(e.target.value)
    }

    function validaciones(input, inputColor) {

        const esCorrectoName = input.length >= 3;
        const longitudColor = inputColor.length >= 6
    
        if(!esCorrectoName) { console.error("El nombre debe tener al menos 3 caracteres y no tener espacios en blanco al comienzo")}
        if(!longitudColor) { console.error("El color debe tener al menos 6 caracteres")}
    
        return esCorrectoName && longitudColor
    }

    
    function controlEnviar (e) {
        e.preventDefault()
        if(!validaciones(input, inputColor)) {
            return
            }
        props.onSubmit(input, inputColor)
    }

    return (
        <>
        <form onSubmit={controlEnviar}>
            <input type="text" placeholder="Escribe tu nombre" value={input} onChange={manejoNombre}></input>
            <input type="text" placeholder="Escribe un color" value={inputColor} onChange={manejoColor}></input>
            <button type="submit">Enviar</button>
        </form>
        <div>
        {!validaciones(input, inputColor) ? `Los datos ingresados deben ser: al menos 3 caracteres en el nombre sin espacios al inicio y al menos 6 caracteres en el color`: undefined}
        </div>
        </>
    )
}

export default Formulario