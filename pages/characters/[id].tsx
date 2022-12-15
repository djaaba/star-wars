import React, { ReactNode, DetailedHTMLProps, HTMLAttributes } from "react";

import { CharacterInfo } from '../../components';
import { GetServerSideProps } from 'next'
import { ICharacter } from '../../interfaces';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params!.id;
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

export interface CharacterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
	character: ICharacter;
}

export default Character;