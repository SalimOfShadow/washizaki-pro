import * as React from 'react';
import { useState, createContext, useContext } from 'react';
import { useCookies } from 'react-cookie';

// Defining the possible character states
export type CharacterState =
  | 'running'
  | 'standing'
  | 'neomax'
  | 'final'
  | 'scissor'
  | 'turning'
  | 'final'
  | 'running-back';

// Defining the possible character names
export type CharacterName = 'bison';

const characterArray: CharacterName[] = ['bison'];

interface CharacterProviderProps {
  children: React.ReactNode;
}

// Create the CharacterContext
const CharacterContext = createContext({
  characterName: 'kyo' as CharacterName,
  setCharacterName: (name: CharacterName) => {},
  characterState: 'running' as CharacterState,
  setCharacterState: (state: CharacterState) => {},
});

// CharacterProvider Component
const CharacterProvider: React.FC<CharacterProviderProps> = ({ children }) => {
  const [cookies, setCookie] = useCookies(['character']);
  const [characterName, setCharacterName] = useState<CharacterName>('bison');
  const [characterState, setCharacterState] =
    useState<CharacterState>('running');
  // Function to update the character name with validation

  const updateCharacterName = (newName: CharacterName) => {
    // setCharacterName(newName);
    setCharacterName('bison');
    setCookie('character', newName, { path: '/' });
  };
  const updateCharacterState = (newState: CharacterState) => {
    setCharacterState(newState);
  };

  return (
    <CharacterContext.Provider
      value={{
        characterName,
        setCharacterName: updateCharacterName,
        characterState,
        setCharacterState: updateCharacterState,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

// Custom hook to use the CharacterContext
const useCharacter = () => {
  return useContext(CharacterContext);
};

export { CharacterProvider, useCharacter };
