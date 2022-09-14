import { useState, useEffect } from 'react'
import useForm from '../hooks/useForm'

const FormHook = () => {
  /* Paso 1: Crear un ÚNICO estadp con toda la info en forma de objeto */
  const [datos, setDatos] = useState({
    nombre: 'Claudia',
    apellido: 'Avilés',
    edad: 0,
    género: 'F',
    email: 'pubolss@gmail.com',
    password: 'holicaseroli'
  })

  const sendData = (data) => {
    console.log(data)
  }

  // Paso 4: Uso mi custom Hoook de useForm
  const { input, handleInputChange, handleSubmit } = useForm(sendData, datos)
  /* Paso 2: Simular traer datos de una API y prellenar el formulario */
  useEffect(() => {
    setTimeout(() => {
      const info = {
        nombre: 'Claudia',
        apellido: 'Avilés',
        edad: 0,
        género: 'F',
        email: 'pubolss@gmail.com',
        password: 'holicaseroli' // JSON que manda el backend
      }
      setDatos(info)
    }, 2000)
  }, [])
  return (
    <div>FormHook</div>
  )
}

export default FormHook
