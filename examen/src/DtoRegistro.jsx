
import { useRef, useState } from 'react'

export default function DtoRegistro() {
  
    const password = useRef()
    const Email = useRef() 
    const [loged, setLoged] = useState(false)
    const [nombre,setNombre] = useState("")
  
      const updateText = (event) => {
          setNombre(event.target.value)
  
      }
  
  
      const Formulario = () => {
        const passEva = "123456";
        const emailEva = "kike@gmail.com";
  
        
         
  
        if(passEva === password.current.value && emailEva === Email.current.value && nombre !=null && nombre.trim() && nombre != " " && passEva.length > 5){

            setLoged(true)
            
  
        }else{
          alert("Credenciales Incorretas")
        
        }
  
      }
  
  
    return (
      <>
        {loged? (
            <ul>
                <li>{nombre}</li>
                <li>{Email.current.value}</li>
                <li>{password.current.value}</li>
            </ul>
        ) : (
            <form action="#" onSubmit={Formulario}>
            <input type="text"  placeholder='Nombre' onChange={updateText}/>
            <input type="password" placeholder='Password' ref={password} />
            <input type="email" placeholder='Email' ref={Email} />
            <button type='submit'>Registrar</button>
    
        </form>
        )}
      

      
       
      
      </>
    )
}
