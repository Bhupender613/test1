import React,{useState,useEffect,useContext} from 'react'
import Data from './Getdata'
import { useNavigate } from 'react-router-dom'
const Selectdata = () => {

const[find,setfind] = useState("")
const[usercolltion,setusercolltion] = useState("")
const set = useContext(Data)

  const navigete = useNavigate()
useEffect(() => {

    fetch(`https://dummyjson.com/users`)
    .then(res =>res.json())
    .then(res =>setusercolltion(res))
    .catch(error => console.error(error))
    
    
}, [])

const handlechange =(e) =>{
let url = `https://dummyjson.com/users/${e.target.value}`
set.setvalue(url)
navigete('/getTable')


}
const handlechangegender =(e) =>{
let url = `https://dummyjson.com/users/filter?limit=10&key=gender&value=${e.target.value}`
set.setvalue(url)
navigete('/GenderSelect')


}




  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-3'>
            <label >Name : </label>
      <select onChange={handlechange}>
      <option>...Name...</option>
        {usercolltion && usercolltion.users.map((user,index)=>(
            <option value={user.id} key={index} >{user.firstName}</option>
        ) )

        }
        
      </select>
      </div>
            <div className='col-md-3'>
            <label >Gender : </label>
      <select onChange={handlechangegender}>
       <option>...gender...</option>
       <option value='male'> male</option>
       <option value='female'>female</option>
        
      </select>
      </div>
      </div>
    </div>
  )
}

export default Selectdata
