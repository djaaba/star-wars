import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { CharacterList, CharacterHistory } from "../components";
import { ICharacter } from "../interfaces";

export const getStaticProps = async () => {
  const response = await fetch('https://swapi.dev/api/people');
  const data = await response.json();
  
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
  max-width: 1000px;
  margin-bottom: 50px;
  margin: 0 auto;
  margin-bottom: 50px;
`

const Input = styled.input`
  padding: 10px 0px 10px 15px;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  border: 2px solid orange;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`

interface MainProps{
  characters: Array<ICharacter>
}

const Main = ({characters}: MainProps): JSX.Element => {
  const [value, setValue] = useState<string>('');
  const [array, setArray] = useState<Array<ICharacter>>([]);

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value.toLowerCase())
  
  useEffect(() => {
    setArray(
      characters.filter(character => {
        return character.name.toLowerCase().includes(value);
      })
    );
  }, [value])

  return (
    <>
      <Wrapper>
        <Input placeholder="Я ищу..." value={value} type="text" onChange={e => changeValue(e)}/> 
      </Wrapper>
      <Container>
          <CharacterList characters={characters} filtered={array}/>
          <CharacterHistory characters={characters} />
      </Container>
    </>
  );
};

export default Main;