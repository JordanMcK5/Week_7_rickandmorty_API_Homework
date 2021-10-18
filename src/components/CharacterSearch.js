import React from 'react'

const CharacterSearch = ({characters, onSearchChange}) => {

    const findCharacter = (event) => {
        const foundCharacter = characters.find((character) => {
            return character.name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1
        })
        if(foundCharacter){
            onSearchChange(foundCharacter)
        }
    }

    return(
        <>
        <input type="text" placeholder="Search for character..." onChange={findCharacter}/>
        </>
    )

}

export default CharacterSearch;