import { useState } from "react"


export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue)   // Establecemos el useState del counter con el valor inicial del param

    const increment = (value = 1) => {  // Función incrementadora.
        setCounter((current)=> current + value)
    }

    const decrement = (value = 1) => {  // Función decrementadora.
        if(counter ===0) return
        setCounter((current)=> current - value)
    }

    const reset = () => {          // Funcion reseteadora.
        setCounter(initialValue)
    }


  return {       // Aca devolvemos tanto el valor actual del counter para mostrarlo en pantalla, como 
    counter,     // las propiedades para accerder a las funciones de incrementacion, decrementacion y reseteo.
    increment,
    decrement,
    reset
  }
}
