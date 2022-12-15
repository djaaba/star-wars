import React from 'react';

import { ICharacter } from '../../interfaces';
import { CharacterList } from '../../components';

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

interface MainProps{
	characters: Array<ICharacter>
}

const Characters = ({characters}: MainProps) => {
  return (
	  <>
          <CharacterList characters={characters} filtered={characters}/>
	  </>
  )
}

export default Characters;