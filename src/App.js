import './styles/App.css';
import './styles/reset.css';
import Card from './components/card'
import Header from './components/header'
import Footer from './components/footer'
import React, { useEffect, useState } from "react";

function App() {
  const [shownCards, setShownCards] = useState([0,1,2]);
  const [cards, setCards] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [loadedImages, setLoadedImages] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);


  const names = 
      [
      'Classic',
      'Sorcereress',
      'Spellthief',
      'Commando',
      'Imperial',
      'Steel Legion',
      'Star Guardian',
      'Elementalist',
      'Lunar Empress',
      'Pajama Guardian',
      'Battle Academia',
      'Dark Cosmic',
      'Cosmic'
  ];

  const links =
  [
    'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg',
    'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_1.jpg',
    'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_2.jpg',
    'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_3.jpg',
    'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_4.jpg',
    'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_5.jpg',
    'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_6.jpg',
    'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_7.jpg',
    'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_8.jpg',
    'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_14.jpg',
    'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_15.jpg',
    'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_17.jpg',
    'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_18.jpg'
    
  ];

  useEffect(() => {
    createNewDeck();
  }, [])

  function startNewGame() {
    setCurrentScore(0);
    if(isLoaded) {
      createNewDeck();
    }
  }

  function incrementMatchedCards(cardId) {
    setCurrentScore(currentScore + 1);
    if(currentScore + 1 === links.length) {
      alert('you win!')
      startNewGame();
    }
    else {
      let newCards = cards;
      newCards[cardId].matched = true;
      setCards(newCards);
      randomize();
    }
  }

  function createNewDeck() {
    let newCards = [];
    for(let i = 0; i < names.length;i++) {
      newCards.push({imgRef:links[i], randomizeCard: randomize, skinName: names[i], matched: false, cardId: i })
    }
    setCards(newCards);
  }

  useEffect(() => {
    randomize();
  }, [cards])

  function randomInt() {
    return Math.floor(Math.random() * links.length);
  }

  function randomize() {
    if(cards.length === 0 || currentScore == links.length){
      return;
    } 
    let alreadyMatched = 0;
    let card1 = randomInt();
    while (shownCards.includes(card1)) {
      card1 = randomInt();
    }
    if (cards[card1].matched === true) 
      alreadyMatched++;
    let card2 = randomInt();
    while (card2 === card1 || shownCards.includes(card2)) {
      card2 = randomInt();
    }
    if (cards[card2].matched === true) 
      alreadyMatched++;
    let card3 = randomInt();
    while(card3 === card1 || card3 === card2 || shownCards.includes(card3) || (alreadyMatched === 2 && cards[card3].matched)) {
      card3 = randomInt();
    }
    setShownCards([card1, card2, card3]);
  }

  useEffect(() => {
    setLoaded(false);
    setLoadedImages(0);
  }, [shownCards])

  function incrementImageCount() {
    setLoadedImages(loadedImages + 1);
  };

  useEffect(() => {
    if(loadedImages === 3) {
      setLoaded(true);
    }
  }, [loadedImages])

  useEffect(() => {
    if(currentScore > maxScore) {
      setMaxScore(currentScore);
    }
  }, [currentScore])

  return (
    <div className="App">
      <Header currentScore={currentScore} highScore={maxScore}/>
      <div id="shown-cards" style={{display: isLoaded ? "flex" : "none"}}>
      <Card  {...cards[shownCards[0]]} notifyImgLoaded={incrementImageCount} notifyPickedNonmatch={incrementMatchedCards} notifyGameOver={startNewGame}/>
      <Card  {...cards[shownCards[1]]} notifyImgLoaded={incrementImageCount} notifyPickedNonmatch={incrementMatchedCards} notifyGameOver={startNewGame}/>
      <Card  {...cards[shownCards[2]]} notifyImgLoaded={incrementImageCount} notifyPickedNonmatch={incrementMatchedCards} notifyGameOver={startNewGame}/>
      </div>
      <div id="load-notification" style={{display: (!isLoaded) ? "flex" : "none"}}>Loading...</div>
      <Footer />
    </div>
  )
}
export default App;
