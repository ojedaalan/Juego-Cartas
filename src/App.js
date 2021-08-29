import React, { useState, useEffect } from 'react';
import './index.css'
import Card from './components/Card';
import { images } from './import'

const App = () => {

const [cards, setCards] = useState([]);
const [firstCard, setFirstCard] = useState({});
const [secondCard, setSecondCard] = useState({});

const [unflippedCards, setUnflippedCards] = useState([]);
const [disabledCards, setDisabledCards] = useState([]);

//Modifica el orden de las tarjetas
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}

useEffect(() => {
  shuffleArray(images);
    setCards(images);
}, []);

useEffect(() => {
  checkForMatch();
}, [secondCard]);

const flipCard = (name, number) => {

    if (firstCard.name === name && firstCard.number === name){
      return 0;
    }
    if (!firstCard.name){
      setFirstCard({name, number});
      console.log(firstCard)
    }
    else if (!secondCard.name){
      setSecondCard({name, number});
      console.log(secondCard)
    }
    return 1;
}

const checkForMatch = () => {
  if ( firstCard.name && secondCard.name ){
    const match = firstCard.name === secondCard.name;
    match ? disableCards() : unflipCards();
  }

};
const disableCards = () => {
  setDisabledCards([firstCard.number, secondCard.number]);
  resetCards();
};
const unflipCards = () => {
  setUnflippedCards([firstCard.number, secondCard.number]);
  resetCards();
};
const resetCards = () => {
  setFirstCard({});
  setSecondCard({});
}

  return (
    <div className= "App">
      <div className="card-container">
        
        {
          cards.map( (card, index) => {
            return ( <Card 
            name={card.player} 
            number={index} 
            frontFace={card.src} 
            flipCard ={flipCard}
            unflippedCards={unflippedCards}
            disabledCards={disabledCards}
            
            /> 
            )
          })
          
        }
      </div>
    </div>
  );
}
export default App
