import React from 'react'
import styled from 'styled-components'



const Card=styled.div`
width: 22.5rem;
height: 12rem;
box-sizing: border-box;
border: 1px solid #D7DFE9;
border-radius: 4px;
background: #FFFFFF;
padding: 0px;
`
const ResourceLogo=styled.div`
display:flex;
flex-direction:row;
`
const Image=styled.img`
margin: 24px;
width: 40px;
height: 40px;
background: #FFFFFF;
border: 2px solid #D7DFE9;
border-radius: 4px;
`
const ResourceLogoInfo=styled.div`
h3{
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #171F46;
    width: 100%;
    height: 24px;
}
p{
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #7E858E;
    width: 82px;
    height: 16px;
}
`

const ResourceInfo=styled.div`
a{
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #0B69FF;
    text-decoration:none;
    margin-bottom: 8px;
}
p{
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #7E858E;
    margin-bottom: 8px;
}
`

function Cards(props) {
  //  console.log(props);
    if(props.resourse===undefined)
    return <h1>Loading</h1>
   
  return (
   
        <Card>
            <ResourceLogo style={{margin:"0px"}}>
                <Image src={props.resourse.icon_url}/>
                <ResourceLogoInfo style={{margin:"20px 0 0 0"}}>
                    <h3>{props.resourse.title}</h3>
                    <p>{props.resourse.category}</p>
                </ResourceLogoInfo>
            </ResourceLogo>
            <ResourceInfo style={{margin:"0 24px 24px 24px"}}>
                    <a href={props.resourse.link}>{props.resourse.link}</a>
                    <p>{props.resourse.description}</p>
            </ResourceInfo>
        </Card>
        
  
  )
}

export default Cards