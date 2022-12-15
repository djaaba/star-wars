import { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { CharacterHistoryProps } from './CharacterHistory.props';
import { getId, findByName } from '../../utils';
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

export const CharacterHistory = ({ characters, ...props }: CharacterHistoryProps):JSX.Element => {
	const [storage, setStorage] = useState<Array<string>>([]);

	useEffect(() => {
		setStorage(Object.values(sessionStorage));
	}, [])
	
	return (
	<>
		{ storage.length > 0 &&
			<Wrapper>
				{ <Heading tag='h2'>Вы недавно смотрели: </Heading> }
				<ul>
				{ storage.map(name => 
					<LiElem key={getId()}>
						<Link href={`/characters/${findByName(characters, name)}`}>
							<Heading tag='h3'>{name}: </Heading>
						</Link>
					</LiElem>
				)}
				</ul>
			</Wrapper>
		}
	</>
  )
}
