import { useState, useEffect } from 'react';
import Link from 'next/link';

import { CharacterHistoryProps } from './CharacterHistory.props';
import { getId, findByName } from '../../utils';

export const CharacterHistory = ({ characters, ...props }: CharacterHistoryProps):JSX.Element => {

	const [storage, setStorage] = useState<Array<string>>([]);

	useEffect(() => {
		setStorage(Object.values(sessionStorage));
	}, [])
	
	return (
	<>
		{ storage.length && <h1>Вы недавно смотрели: </h1> }

		{storage.map(name => 
			<div key={getId()}>
				<Link href={`/characters/${findByName(characters, name)}`}>
					{name}
				</Link>
			</div>
		)}
	</>
  )
}
