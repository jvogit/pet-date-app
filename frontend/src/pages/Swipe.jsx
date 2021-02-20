import React, { useState, useMemo } from 'react';
import TinderCard from 'react-tinder-card';
import { Button } from 'baseui/button';
import CenterLayout from 'components/layouts/CenterLayout';
import "./App.css"

const db = [
  {
    name: 'Richard Hendricks',
    url: 'https://scontent.fsac1-2.fna.fbcdn.net/v/t1.15752-9/71932348_669756186845572_2113462731012046848_n.png?_nc_cat=103&ccb=3&_nc_sid=ae9488&_nc_ohc=ITTaYrkoU2IAX_IOxiT&_nc_ht=scontent.fsac1-2.fna&oh=c19881b1b68d32846a44559cca3600a0&oe=6054A1C7'
  },
  {
    name: 'Erlich Bachman',
    url: 'https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d'
  },
  {
    name: 'Monica Hall',
    url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*'
  },
  {
    name: 'Jared Dunn',
    url: 'https://scontent.fsac1-2.fna.fbcdn.net/v/t1.15752-9/151713557_1059592481198994_3516164195450905990_n.jpg?_nc_cat=105&ccb=3&_nc_sid=ae9488&_nc_ohc=KJMet4YCIy8AX-u_kUq&_nc_ht=scontent.fsac1-2.fna&oh=3bceba5d1b285c52f35522a108ee68f4&oe=6055BEF2'
  },
  {
    name: 'Toby',
    url: 'https://scontent.fsac1-2.fna.fbcdn.net/v/t1.15752-9/151713557_1059592481198994_3516164195450905990_n.jpg?_nc_cat=105&ccb=3&_nc_sid=ae9488&_nc_ohc=KJMet4YCIy8AX-u_kUq&_nc_ht=scontent.fsac1-2.fna&oh=3bceba5d1b285c52f35522a108ee68f4&oe=6055BEF2'
  }
]

const alreadyRemoved = []
let charactersState = db // This fixes issues with updating characters state forcing it to use the current state and not the state that was active when the card was created.

function Swipe() {
  const [characters, setCharacters] = useState(db)
  const [lastDirection, setLastDirection] = useState()

  const childRefs = useMemo(() => Array(db.length).fill(0).map(i => React.createRef()), [])

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
    alreadyRemoved.push(nameToDelete)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
    charactersState = charactersState.filter(character => character.name !== name)
    setCharacters(charactersState)
  }

  const swipe = (dir) => {
    const cardsLeft = characters.filter(person => !alreadyRemoved.includes(person.name))
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name // Find the card object to be removed
      const index = db.map(person => person.name).indexOf(toBeRemoved) // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir) // Swipe the card!
    }
  }

  return (
    <div>
      <h1>React Tinder Card</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >

        <div class="cardContainer">
          {characters.map((character, index) =>
            <TinderCard ref={childRefs[index]} className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
              <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
                <h3>{character.name}</h3>
              </div>
            </TinderCard>
          )}
        </div>

        <div style={{
          display: "flex",
          width: "50vw",
          justifyContent: "space-around",
        }}>
          <Button onClick={() => swipe('left')}>Swipe left!</Button>
          <Button onClick={() => swipe('right')}>Swipe right!</Button>
        </div>
        {lastDirection ? <h2 key={lastDirection} className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText'>Swipe a card or press a button to get started!</h2>}
      </div>
    </div>
  )
}

export default Swipe
/*
<div
style={{
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
}}
>*/