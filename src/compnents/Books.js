import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { ADD_BOOK } from '../store/actions/books.action';
import ListBooks from '../compnents/ListBooks';


const Books= () => {
  const dispatch = useDispatch();
  const [ data, setData ] = useState({ name: "", price: "" });
  // 
  const handelChange = (e) => {
    const { name, value } = e.target;
    setData( { ...data , [name]: value } );
  }
  const validate = ()=>{
    if(data.name && data.price){
      return true;
    }
    else{
      return false;
    }
  }
const handelSubmit= (e)=>{
  if(validate()){
    e.preventDefault();
    dispatch(ADD_BOOK);
    setData({ name:"", price:"" });
    return;
  }
}
  return (
    <form onSubmit={handelSubmit} style={{border: "2px solid blue"}}>
    <input style={{border:"4px",borderColor:"blue"}} type="text" onChange={handelChange} placeholder="Enter an item" name='name' value={data.name}/>
    <input type="text" onChange={handelChange} placeholder="Enter an item" name='price' value={data.price}/>
    <input type="submiit">Submit</input>
    <ListBooks/>
    </form>

  )
}

export default Books;