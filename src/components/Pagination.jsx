import React from 'react'
import styled from 'styled-components';

const PagiNationDiv=styled.div`
margin: 10px auto;
display: flex;
  align-items: center;
button{
    color:white;
    --size: 32px;
  --margin: 6px;
  margin: 0 var(--margin);
  border-radius: 6px;
  background: #202020;
  max-width: auto;
  min-width: var(--size);
  height: var(--size);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0 6px;
}
`

function Pagination({totalPosts,postsPerPage,setCurrentPage}) {
    let pages=[];
    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++)
    {
        pages.push(i);
    }
  return (
    <PagiNationDiv>
        {pages.map((page,index)=>{
            return <button key={index}  onClick={()=>setCurrentPage(page)}>{page}</button>
        })}
    </PagiNationDiv>
  )
}

export default Pagination