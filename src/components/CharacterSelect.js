import React from 'react';

const CharacterSelect = ({characters, onCharacterSelected}) => {

    const handleChange = function(event) {
        const chosenCharacter = characters[event.target.value];
        onCharacterSelected(chosenCharacter);
    }
    
    const characterOptions = characters.map((character, index) => {
      return <option value={index} key={index}>{character.name}</option>
    })

    return (
        <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Choose a Rick & Morty Character!</option>
            {characterOptions}
        </select>
    )
}

export default CharacterSelect;