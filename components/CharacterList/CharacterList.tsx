import React from 'react'
import Link from 'next/link';
import styled from 'styled-components';

import { getId, findByName } from '../../utils';
import { CharacterListProps } from './CharacterList.props';
import { Heading } from '..';

const LiElem = styled.li`
	padding-top: 15px;
`;

const Wrapper = styled.div`
	background: var(--gray);
	border-radius: 20px;
	padding: 20px;
	border: 1px solid var(--light-gray);
`;

export const CharacterList = ({ characters, filtered, ...props} : CharacterListProps): JSX.Element => {
	
	return (
		<>
		<Wrapper>
			{ filtered.length > 0 && <Heading tag='h2'>Персонажи Вселенной: </Heading> }

			<ul {...props}>
				{ filtered.map(({name}, id) => 
					<LiElem key={getId()}>
						<Link href={`/characters/${findByName(characters, name)}`}>
							<Heading tag='h3'>{name}: </Heading>
						</Link>
					</LiElem>
				)}
			</ul>

			{ !filtered.length && <div>По вашему запросу ничего не найдено!</div> }
		</Wrapper>
		</>
	)
}
