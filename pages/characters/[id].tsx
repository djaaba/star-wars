import React from 'react'
import { CharacterInfo } from '../../components';
import { CharacterProps } from './Character.props'
import { GetServerSideProps } from 'next'
import { ICharacter } from '../../interfaces';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(`https://swapi.dev/api/people/${id}`);
  const data: ICharacter = await response.json();

  if(!data){
    return {
      notFound: true,
    }
  }

  return {
    props: { character: data }
  }
}

const Character = ( {children, character, ...props}: CharacterProps): JSX.Element => {
  return (
    <>
      <CharacterInfo character={character}/>
    </>
  )
}

export default Character;