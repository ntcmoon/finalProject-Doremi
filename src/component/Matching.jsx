import React from 'react'
import data from './card.json'


function Matching() {
  const randomIndex = Math.floor(Math.random() * data.length);
  const randomCard = data[randomIndex];
  
  return (
    <>
    <div>Matching</div>
    <img src={randomCard.url} width="250px" height="250px"/>
    {/* { data.map(d=> (
      <div key={d.id}>
        <img src={d.url}/>
      </div>
    ))} */}
    </>
  );
}

export default Matching