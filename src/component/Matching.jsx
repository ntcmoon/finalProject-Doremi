import React from "react";
import data from "./card.json";
import { useState } from "react";

function Matching() {
  const [pickcard, setPickcard] = useState(["", ""]);
  const [score, setScore] = useState(0)

  /*1.มีไพ่อยู่ 10 ใบ 2.สับไพ่ที่ตำแหน่งแรกไปใส่ในตำแหน่งที่ random ได้ 3.สับไพ่ที่ตำแหน่งแรกไปสุ่มใส่ในตำแหน่งที่ random ได้ ทำวนจนครบ 10 ครั้ง */

  function shuffle(card) {
    const numberOfShuffles = 10;
    for (let i = 0; i < numberOfShuffles; i++) {
      const firstCard = card.shift();
      const randomIndex = Math.floor(Math.random() * card.length);
      card.splice(randomIndex, 0, firstCard);
    }
  }
  shuffle(data);
  console.log(data);

  const selectCard = (card) => {
    if (pickcard.every(val => val === "")){
      setPickcard([card, ""])
    } else {
      setPickcard([pickcard[0], card])
    }
  }
  console.log(pickcard)



  return (
    <>
      <div>Matching</div>
      {/* <img src={randomCard.url} width="250px" height="250px"/> */}
      <div className="grid grid-cols-10 items-center gap-4">
        {data.map((d) => (
          <div key={d.id} onClick={()=> selectCard(d)}>
            <img src={d.url} width="120px" height="120px" />
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-4 ">
        {pickcard.map((card, index) => (
          <div key={index} className="border-2 w-[120px] h-[120px]">
            {/* <img src="card.url" width="120px" height="120px"></img> */}
            {card == "" ? (null) : (<img src={card.url} width="120px" height="120px"/>)}
          </div>
        ))}
      </div>
      <div>{score}/10</div>
    </>
  );
}

export default Matching;
