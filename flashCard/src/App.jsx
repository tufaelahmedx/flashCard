import { useState } from 'react';
import './App.css';
import FlipCard from './Components/Flipcard';

function App() {
  // Correctly defining the 20 cards array
  const cards = [
    {
      front: {
        title: "Country 1: Canada",
        description: "Description of Canada: A country known for its natural beauty and multicultural cities.",
        image: "path_to_front_image_1.jpg",
      },
      back: {
        title: "Fact about Canada",
        fact: "Canada is the second largest country in the world by total area.",
        image: "path_to_back_image_1.jpg",
      },
    },
    {
      front: {
        title: "Country 2: Japan",
        description: "Description of Japan: An island nation known for its rich culture, technology, and sushi.",
        image: "path_to_front_image_2.jpg",
      },
      back: {
        title: "Fact about Japan",
        fact: "Japan has the highest life expectancy in the world.",
        image: "path_to_back_image_2.jpg",
      },
    },
    {
      front: {
        title: "Country 3: Brazil",
        description: "Description of Brazil: Famous for its Amazon rainforest and vibrant festivals like Carnival.",
        image: "path_to_front_image_3.jpg",
      },
      back: {
        title: "Fact about Brazil",
        fact: "Brazil is home to the Amazon River, the largest river by discharge of water in the world.",
        image: "path_to_back_image_3.jpg",
      },
    },
    {
      front: {
        title: "Country 4: Australia",
        description: "Description of Australia: Known for its diverse wildlife and beautiful beaches.",
        image: "path_to_front_image_4.jpg",
      },
      back: {
        title: "Fact about Australia",
        fact: "Australia is the only country that is also a continent.",
        image: "path_to_back_image_4.jpg",
      },
    },
    {
      front: {
        title: "Country 5: Italy",
        description: "Description of Italy: Renowned for its art, architecture, and delicious cuisine.",
        image: "path_to_front_image_5.jpg",
      },
      back: {
        title: "Fact about Italy",
        fact: "Italy is home to more UNESCO World Heritage Sites than any other country.",
        image: "path_to_back_image_5.jpg",
      },
    },
    {
      front: {
        title: "Country 6: Egypt",
        description: "Description of Egypt: Famous for its ancient civilization and monuments like the pyramids.",
        image: "path_to_front_image_6.jpg",
      },
      back: {
        title: "Fact about Egypt",
        fact: "The Great Pyramid of Giza is one of the Seven Wonders of the Ancient World.",
        image: "path_to_back_image_6.jpg",
      },
    },
    {
      front: {
        title: "Country 7: India",
        description: "Description of India: Known for its diverse culture, languages, and the Taj Mahal.",
        image: "path_to_front_image_7.jpg",
      },
      back: {
        title: "Fact about India",
        fact: "India is the world's largest democracy.",
        image: "path_to_back_image_7.jpg",
      },
    },
    {
      front: {
        title: "Country 8: France",
        description: "Description of France: Known for its art, fashion, and the Eiffel Tower.",
        image: "path_to_front_image_8.jpg",
      },
      back: {
        title: "Fact about France",
        fact: "France is the most visited country in the world.",
        image: "path_to_back_image_8.jpg",
      },
    },
    {
      front: {
        title: "Country 9: Mexico",
        description: "Description of Mexico: Famous for its cuisine, music, and ancient ruins.",
        image: "path_to_front_image_9.jpg",
      },
      back: {
        title: "Fact about Mexico",
        fact: "Mexico introduced chocolate, chilies, and corn to the world.",
        image: "path_to_back_image_9.jpg",
      },
    },
    {
      front: {
        title: "Country 10: South Africa",
        description: "Description of South Africa: Known for its varied topography and wildlife.",
        image: "path_to_front_image_10.jpg",
      },
      back: {
        title: "Fact about South Africa",
        fact: "South Africa is home to the world's largest individually timed bike race.",
        image: "path_to_back_image_10.jpg",
      },
    },
    // You can add more countries in the same format for a total of 20 cards
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const cardCount = cards.length;

  const nextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardCount);
  };

  const prevCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + cardCount) % cardCount);
  };

  return (
    <div className='App'>
      <div className='header'>
        <h2>Know your Geography</h2>
        <h4>How good are you with Geography? Test your knowledge here.</h4>
        <p>Current card: {currentCardIndex + 1} out of {cardCount}</p>
        <div className='button-container'>
          <button className='nav-button' onClick={prevCard}>
            Back
          </button>
          <button className='nav-button' onClick={nextCard}>
            Forward
          </button>
        </div>
      </div>

      <div className='card-container'>
        <div className='card-box'>
          <FlipCard 
            frontContent={cards[currentCardIndex].front}
            backContent={cards[currentCardIndex].back}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
