import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.png'
import person from '../images/person.png'
import { useNavigate as navigate} from 'react-router-dom'

const Navbar=styled.div`
position:sticky;
top:0;
display: flex;
justify-content: space-between;
width:100%;
height: 4rem;
padding-left: 1rem;
padding-right: 1rem;
align-items:center;
background: #FFFFFF;
margin-top: 0;
`

const NxtWaveLogo=styled.img`
margin-left: 0.5rem; 
`;

const AddButton=styled.button`
margin:1rem;
cursor:pointer;
padding: 2px 15px;
gap: 10px;
background: #2DCA73;
border-radius: 4px;
border:none;
font-family: 'HK Grotesk';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 24px;
color: #FFFFFF;
width: 107px;
height: 40px;
`
const Person=styled.img`
cursor:pointer;
margin:1rem;
border-radius: 100%;
`
const ButtonContainer=styled.div`
display:flex;
justify-content:space-between;`

function nav(props) {
  const nav=navigate();
  return (
    <Navbar>
        <NxtWaveLogo src={logo}/>
        <ButtonContainer>
            {props.addButton && <AddButton onClick={()=>nav("/add")}>ADD ITEM</AddButton>}
            <Person src={person}/>
        </ButtonContainer>
    </Navbar>
  )
}

export default nav