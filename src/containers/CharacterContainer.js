import React, { useState, useEffect } from 'react';
import CharacterList from '../components/CharacterList';
import CharacterDetail from '../components/CharacterDetail';
import CharacterSelect from '../components/CharacterSelect';
import CharacterSearch from '../components/CharacterSearch';
import './CharacterContainer.css';

const CharacterContainer = () => {
    const [characters, setCharacters] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    useEffect(() => {
        getCharacters();
      }, [])

    const getCharacters = () => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(res => res.json())
        .then(characters => setCharacters(characters.results))
    }

    const handleCharacterSelect = (character) => {
        setSelectedCharacter(character)
    }

    

    const onCharacterSelected = function(character){
        setSelectedCharacter(character);
    }

    return (
        <div className="main-container">
            <CharacterSelect characters={characters} onCharacterSelected={handleCharacterSelect}/>
            <CharacterSearch characters={characters} onSearchChange={handleCharacterSelect}/>
            {selectedCharacter ? <CharacterDetail selectedCharacter={selectedCharacter} /> : null}
            
        </div>
    )
}

export default CharacterContainer;