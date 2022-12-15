import React from 'react'
import Link from 'next/link';
import styled from 'styled-components';

import { getId, findByName } from '../../utils';
import { CharacterListProps } from './CharacterList.props';


export const CharacterList = ({ characters, filtered, ...props} : CharacterListProps): JSX.Element => {
	
	return (
		<>
			<ul {...props}>
				{ filtered.map(({name}, id) => 
					<li key={getId()}>
						<Link href={`/characters/${findByName(characters, name)}`}>
							{name}
						</Link>
					</li>
				)}
			</ul>

			{ !filtered.length && <div>По вашему запросу ничего не найдено!</div> }
		</>
	)
}
