// Import the librarys
import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

// Main Variables And Toggle Swtiches
const title = '';
const showBackground = true;

// Background Image And Animal Images
const background =(
   <img
    class='background'
    alt='ocan'
    src='/images/ocean.jpg'
    /> 
)

let images = []

for (const animal in animals) {
  images.push(
    <img
    key={animal}
    className='animal'
    alt={animal}
    src={animals[animal].image}
    ariaLabel={animal}
    role='button'
    onClick={displayFact}
    />
    )
}

// Displays Facts To The Animals
function displayFact(e) {
  const animalName = e.target.alt;
  const randomIndex = Math.floor(Math.random() * 3);
  const funFact = animals[animalName].facts[randomIndex];
  const factElement = document.getElementById("fact");
  factElement.innerHTML = funFact;
}

// Main Render
// Shows Title, Background and Logic for the showBackground variable
const animalFacts = (
  <div>
  <h1>{title === '' ? `Click an animal for a fun fact!` : title}</h1>
  <p id='fact'></p>
  {showBackground && background}
  <div className='animals'>
    {images}
  </div>
  </div>
  )

// ReactDOM
ReactDOM.render(animalFacts, document.getElementById('root'));