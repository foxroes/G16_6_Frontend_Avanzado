// Reglas para crar un Hook
// Def.: Un "CUSTOM HOOK" es una función que utiliza otros hooks de React.
// 1. Siempre debemos usar la palabra 'use' al nombrarlo: Ej. UseForm.
// 2. Siempre deben ser funciones (a partir de React 16 se usan Hooks).
// 3. Siempre debe de usar al menos un Hook de React: useState, useEffect, useRef, etc.
// 4. Deben ser reutilizables, no para casos muy específicos.

import { useState, useEffect } from 'react'

function UseForm (callback, defaults) {
  // Estado único para guardar los datos de mi formulario en un objeto
  const [input, setInput] = useState(defaults)

  // Cargar los valores por defecto
  useEffect(() => {
    setInput({ ...defaults })
  }, [defaults])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    // const name = event.target.name
    // const value = event.target.value
    console.log(name, value)
    setInput({ ...input, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault() // Evito que se recargue la página
    callback(input) // Función que envío como parámetro
  }

  return {
    input,
    handleInputChange,
    handleSubmit
  }
}

export default UseForm
