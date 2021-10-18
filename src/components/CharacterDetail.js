import React from 'react';
import CharacterContainer from '../containers/CharacterContainer';

const CharacterDetail = ({selectedCharacter}) => {
  return (
      
      <div>
          <h3>Name : {selectedCharacter.name}</h3>
          <h3>Species : {selectedCharacter.species}</h3>
          <h3>Home Planet :{selectedCharacter.origin.name}</h3>
          <img src={selectedCharacter.image} alt={"face of character"}/>
      </div>
  )
}

export default CharacterDetail;