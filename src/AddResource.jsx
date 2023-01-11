import React,{useState} from 'react'
import styled from 'styled-components'
import workplace from '../src/images/workplace.png'
import arrow from '../src/images/arrow.png'
import Nav from './components/Nav'
import { useNavigate as navigate} from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios'


const ImageDiv=styled.div` 
`

const Body=styled.div`
display:grid;
grid-template-columns: 5fr 3fr;
width:100vw;
height: 90vh;
overflow: hidden;
background-color: #F5F5F5;
`

const H1Div=styled.div`
display:flex;
justify-content:center;
align-items:center;
margin:80px 80px 0px 0px;
h1{
    width: 178px;
    height: 40px;
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 40px;
    color: #171F46;
}
`
const Image=styled.img`
height:674px;
width:100%;
`
const ButtonDiv=styled.div`
margin:3px 0px 0px 50px;
button{
  font-family: 'Space Grotesk';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 16px;
color: #7E858E;
}
`

const FormDiv=styled.form`
margin: 0px 0px 20px 0px;
padding-right:300px;
display: flex;
flex-direction: column;
align-items:center;
justify-content:center;
label{

  width: 65px;
height: 16px;
  font-family: 'Space Grotesk';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 16px;
letter-spacing: 0.01em;
text-transform: uppercase;
color: #7E858E;
margin:30px;
}
input,select{
  margin-top: 10px;
  margin-bottom:50px;
  width:320px;
  height:40px;
  background: #FFFFFF;
  box-sizing: border-box;
border: 1px solid #D7DFE9;
border-radius: 2px;
}
option,select{
  color: #7E858E;
  font-family: 'Space Grotesk';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
}
textarea{
  resize:none;
  border: 1px solid #D7DFE9;
border-radius: 2px;
width:320px;
height:50px;
}
`

const CreateButton=styled.button`
margin:40px 0px 0px 250px;
padding:5px 20px 5px 20px;
background: #0B69FF;
border-radius: 4px;
border: 0px;
font-family: 'Space Grotesk';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
display: flex;
align-items: center;
text-align: center;
color: #FFFFFF;`

function AddResource() {
  const nav=navigate();
 const [values,setValues]=useState({
  title:"",
  link:"",
  icon:"",
 tag:"",
 category:"",
 desc:""

 })
 const toastOptions = {
  position: "bottom-center",
  autoClose: 8000,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
};
function isURL(string){
  try{
    new URL(string);
    return true;
  }catch(err)
  {
    return false;
  }
}

const handelChange = (e) => {
  setValues({ ...values, [e.target.name]: e.target.value });
};

const handelValidation = () => {
  const { title,link,icon,tag,category,desc} = values;
  if (title.length < 3) {
    toast.error("Title should be greater than 3 character", toastOptions);
    return false;
  } else if (!isURL(link)) {
    toast.error("Not a valid Link", toastOptions);
    return false;
  }else if (!isURL(icon)) {
    toast.error("Not a valid icon", toastOptions);
    return false;
  }else if (category.length < 3 ) {
    toast.error("Category should be greater than 3 character", toastOptions);
    return false;
  }
  else if (desc.length < 3) {
    toast.error("Description should be greater than 3 character", toastOptions);
    return false;
  }
 
  return true;
};

const handleSubmit=async (e)=>{
  e.preventDefault();
  const { title,link,icon,tag,category,desc} = values;
  if(handelValidation())
  {
    await axios.post("https://cors-anywhere.herokuapp.com/https://media-content.ccbp.in/website/react-assignment/add_resource.json", {
      
        "title": title,
        "icon_url": icon,
        "link": link,
        "description": desc,
        "category": category,
        "tag": tag,
        "id": title
        
    }).then((response)=>toast.success(response.data.msg,toastOptions)).catch((err)=>toast.error(err.message,toastOptions));
    
  }
}

  return (
    <>
      <Nav addButton={false}/>
      <Body>
        <div>
          <ButtonDiv>
            <img src={arrow} style={{margin:"0px",height:"10px"}}/>
            <button style={{background:"transparent",border:"none",margin:"4px",cursor:"pointer"}} onClick={()=>nav("/")}>  Users</button>
          </ButtonDiv>
          <H1Div>
              <h1>Item Details</h1>
          </H1Div>
          <FormDiv onSubmit={(e)=>handleSubmit(e)}>
            <label>ITEM TITLE<input name="title" type='text' onChange={(e)=>handelChange(e)}/></label>
            <label>LINK<input name="link" type='text' onChange={(e)=>handelChange(e)}/></label>
            <label>ICON URL<input name="icon" type='text' onChange={(e)=>handelChange(e)}/></label>
            <label>TAG NAME
              <select name="tag" onChange={(e)=>handelChange(e)}>
                <option >User</option>
                <option>Request</option>
              </select>
            </label>
            <label>CATEGORY<input name="category" type='text' onChange={(e)=>handelChange(e)}/></label>
            <label>DESCRIPTION<textarea name="desc" onChange={(e)=>handelChange(e)}></textarea></label>
            <CreateButton type='submit'>CREATE</CreateButton>
          </FormDiv>
        </div>
        <ImageDiv>
            <Image src={workplace}/>
        </ImageDiv>
    </Body>
    <ToastContainer/>
    </>
  )
}

export default AddResource