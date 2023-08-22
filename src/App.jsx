import "./App.css";
import contactsData from "./contacts.json";
import { useState } from "react";
function App() {
  
  
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));
  const handleContacs=()=>{
   let randomNumber=Math.random()*contactsData.length
   let randomIndex=Math.floor(randomNumber)
   let randomContact=contactsData[randomIndex]
 
   let clone = JSON.parse(JSON.stringify(contacts))
   clone.unshift(randomContact) 

   setContacts(clone)

   
 }
 const handleListContacts = () => {  
  let clone = JSON.parse(JSON.stringify(contacts))

  clone.sort((cont1, cont2) => {
       return cont1.name > cont2.name ? 1 : -1
   

  })

  setContacts(clone)

}

const handleListMathContacs=()=>{
  let clone = JSON.parse(JSON.stringify(contacts))
clone.sort((cont1, cont2) => cont2.popularity - cont1.popularity);

setContacts(clone);

//sort ordena alfabeticamente los numeros para que lo realize bien hay que poner (cont1, cont2),Si queremos ordenar los números en orden descendente, esta vez necesitamos restar el segundo parámetro (cont2) del primero (cont1)


}
 
const handleDeleteContacs = (name) => {
  
 //El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
  let filteredArr = contacts.filter((eachcontacs) => {
    if (eachcontacs.name === name) {
      return false
    } else {
      return true
    }

  })

  
  setContacts(filteredArr)
}
 
  
   
   
   
   
   
    return(
  
 
      <div>
        <table>
          <button onClick={handleContacs}>Add random contact</button>
          <button onClick={handleListContacts}>Orden Alfabetico</button>
          <button onClick={handleListMathContacs}>Nota Media</button>
          <tr>
            <th>picture</th>
            <th>name</th>
            <th>popularity</th>
            <th>won Oscar</th>
            <th>won Emy</th>
            <th>Actions</th>
          </tr>
           {contacts.map((eachContacs, i) => {
   
          return (
          <tr key={i}>
            <td><img src={eachContacs.pictureUrl} width={"15px"}></img></td>
            <td>{eachContacs.name}</td>
            <td>{eachContacs.popularity.toFixed(2)}</td>
            <td>{eachContacs.wonOscar===true ? "🏆":""}</td>
            <td>{eachContacs.wonEmmy===true ? ":estrella2:  ":""}</td>
            <td><button onClick={() => handleDeleteContacs(eachContacs.name)}>Eliminar</button></td>
          </tr>) 
    })}
        </table>
      </div>
    )
  
  
  }
  
  
 


export default App;
