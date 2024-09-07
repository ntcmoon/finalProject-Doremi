import React, { useEffect, useMemo } from "react";
import data from "./card.json";
import { useState } from "react";

function Matching() {
  const [pickcard, setPickcard] = useState(["", ""]);
  const [score, setScore] = useState(0);
  const [pickedCards, setPickedCards] = useState([]);
  const [win, setWin] = useState(false);

  /*1.มีไพ่อยู่ 10 ใบ 2.สับไพ่ที่ตำแหน่งแรกไปใส่ในตำแหน่งที่ random ได้ 3.สับไพ่ที่ตำแหน่งแรกไปสุ่มใส่ในตำแหน่งที่ random ได้ ทำวนจนครบ 10 ครั้ง */
  const shuffleCards = useMemo(() => {
    return shuffle(data);
  }, [data]);

  function shuffle(card) {
    const numberOfShuffles = 10;
    for (let i = 0; i < numberOfShuffles; i++) {
      const firstCard = card.shift();
      const randomIndex = Math.floor(Math.random() * card.length);
      card.splice(randomIndex, 0, firstCard);
    }
    return card;
  }

  const selectCard = (card) => {
    if (pickedCards.includes(card.id)) return;
    if (pickcard.every((val) => val === "")) {
      setPickcard([card, ""]);
    } else {
      setPickcard([pickcard[0], card]);
    }
  };
  
  useEffect(() => {
    if (pickcard.every((val) => val !== "")) {
      if (pickcard[0].url === pickcard[1].url) {
        setTimeout(() => {
          setScore(score + 1);
          setPickcard(["", ""]);
          setPickedCards((prev) => [...prev, pickcard[0].id, pickcard[1].id]);
        }, 1000);
      } else {
        setTimeout(() => {
          setPickcard(["", ""]);
          setDropOpacity(false);
        }, 1000);
      }
    }
  }, [pickcard]);

  useEffect(() => {
    if (score === 10) {
      setWin(true);
    } else {
      setWin(false);
    }
  }, [score]);

  const replay = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="w-screen">
        <div className="container m-auto relative">
          <h2 className="text-center text-6xl font-bold p-16 text-amber-400">
            Matching Game
          </h2>
          <div className="grid grid-cols-10 items-center gap-4">
            {shuffleCards.map((d) => (
              <div
                key={d.id}
                onClick={() => selectCard(d)}
                style={{
                  opacity: pickedCards.includes(d.id) ? 0.5 : 1,
                  transition: "opacity 0.3s",
                }}
              >
                <img
                  src={
                    pickcard.map((c) => c.id).includes(d.id) || pickedCards.includes(d.id)
                      ? d.url
                      : d.img
                  }
                  width="120px"
                  height="120px"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-4 ">
            {pickcard.map((card, index) => (
              <div key={index} className="border-2 w-[120px] h-[150px]">
                {card == "" ? null : (
                  <img src={card?.url} className="size-[150px] object-cover" />
                )}
              </div>
            ))}
          </div>
          <div className="float-right  text-6xl text-yellow-400 font-bold tracking-wider ">
            {score} / 10
          </div>
          {win && (
            <button
              className="border-4 border-dashed border-amber-400 p-4 rounded-[50%] size-[120px] bg-amber-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -tralate-y-1/2 shadow-2xl shadow-violet-950"
              onClick={replay}
            >
              Replay
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Matching;
