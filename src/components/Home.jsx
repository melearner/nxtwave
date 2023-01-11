import axios from 'axios'
import React,{useState,useEffect} from 'react'
import Nav from './Nav'
import styled from 'styled-components'
import search from "../images/search.png"
import Cards from './Cards'
import Pagination from './Pagination'


const Body=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
width:100vw;
height: 90vh;
overflow: auto;
background-color: #F5F5F5;
div{
    margin-top: 2rem;
}
`


const Button=styled.button`
cursor:pointer;
background: ${props=>props.active?"#0B69FF":"rgba(215, 223, 233, 0.24)"};
border: 1px solid #D7DFE9;
width: 12.5rem;
height: 2.5rem;
font-family: 'Space Grotesk';
color: ${props=>props.active?"white":"black"};
border-top-left-radius: ${props=> props.border==="left"?"10px":"0px"};
border-bottom-left-radius: ${props=> props.border==="left"?"10px":"0px"};
border-top-right-radius: ${props=> props.border==="right"?"10px":"0px"};
border-bottom-right-radius: ${props=> props.border==="right"?"10px":"0px"};
`

const InputField=styled.div`
background-color:white;
border: 1px solid #D7DFE9;
border-radius: 3px;
box-sizing: border-box;
width:40.5rem;
height: 2.5rem;
margin:0px 200px;
`
const Input=styled.input`
border:none; width:100%;height:100%;background: url(${search}) no-repeat left center;background-position: 15px 15px;
padding: 12px 20px 10px 40px;
`
const CardDiv=styled.div`
display:grid;
grid-template-columns: repeat(3,1fr);
gap:15px;
margin:0px 200px;`

function Home() {
  const [currentPage,setCurrentPage] = useState(1)
  const [postsPerPage,setPostsPerPage] = useState(6)
  const [val,setVal] = useState('')
  const [item,setItem] =useState([])
  const [active,setActive]=useState([true,false,false])
  const [resourses,setResourses]=useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [category,setCategory]=useState("");
  const loadResourses = async () => {
    setIsLoading(true);
    await axios.get(
      "https://media-content.ccbp.in/website/react-assignment/resources.json")
      .then(response => {
        setItem(response.data)
        setResourses(response.data)
        setIsLoading(false)
      }).catch(error => {
        setError("Sorry, something went wrong")
        setIsLoading(false)
      })
  }
    useEffect(() => {
        
       loadResourses()
       
      },[])
  const handleClick=(props)=>{
    setCurrentPage(1)
    if(props==='resource') setActive([true,false,false]);
    else if(props==='request') setActive([false,true,false]);
    else if(props==='user') setActive([false,false,true]);
    if(props==='resource') {setItem(resourses);return;}
    const updated=resourses.filter((item)=> {return item.tag===props})
    setItem(updated)
  }

  const handleChange=(e)=>{
    setVal(e.target.value)
    if(e.target.value==='') {
      let props;
      if(active[0]) props='resource';
      else if(active[1]) props='request';
      else props='user'
      if(props==='resource') {setItem(resourses);return;}
      const updated=resourses.filter((item)=> {return item.tag===props});
      setItem(updated);
      return;
    }
    const updated=item.filter((item)=> {return item.title.toUpperCase().includes(e.target.value.toUpperCase())})
    setItem(updated)
  }
    const lastPostIndex=currentPage * postsPerPage;
    const firstPostIndex=lastPostIndex-postsPerPage;
    const currentPosts=item.slice(firstPostIndex,lastPostIndex);
  return (
    <>
      <Nav addButton={true}/>
      <Body>
        <div style={{margin:"39px 400px",padding:"0px"}}>
            <Button border="left" active={active[0]} onClick={()=>handleClick('resource')}>Resources</Button>
            <Button border="none" active={active[1]} onClick={()=>handleClick('request')}>Requests</Button>
            <Button border="right" active={active[2]} onClick={()=>handleClick('user')}>Users</Button>
        </div>
        <InputField>
            <Input type="text" placeholder="Search" value={val} onChange={(e)=>handleChange(e)}/>
        </InputField>
        <CardDiv>
        {isLoading  ? (
                    <h4>Loading...</h4>) :
                    (currentPosts.map((item) =>
                       <Cards resourse={item}/>
                       )
                    )
                }
        </CardDiv>
        <Pagination totalPosts={item.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
    </Body>
    </>
  )
}

export default Home