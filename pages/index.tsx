import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { CharacterList, CharacterHistory } from "../components";
import { ICharacter } from "../interfaces";

export const getStaticProps = async () => {
  const response = await fetch('https://swapi.dev/api/people');
  const data: Array<ICharacter> = await response.json();
  
  if(!data){
    return {
      notFound: true,
    }
  }

  return {
    props: { characters: data.results }
  }
}

const Wrapper = styled.div`
  
`;

const Main = ({characters}: MainProps): JSX.Element => {
  const [value, setValue] = useState<string>('');
  const [array, setArray] = useState<Array<ICharacter>>([]);

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value.toLowerCase())
  
  useEffect(() => {
    console.log(characters)
    setArray(
      characters.filter(character => {
        return character.name.toLowerCase().includes(value);
      })
    );
  }, [value])

  return (
    <>
    <Wrapper>
      <input placeholder="Кого вы ищете?" value={value} type="text" onChange={e => changeValue(e)}/> 
      <CharacterList characters={characters} filtered={array}/>
      <CharacterHistory characters={characters} />
    </Wrapper>
    </>
  );
};

interface MainProps{
  characters: Array<ICharacter>
}

export default Main;
