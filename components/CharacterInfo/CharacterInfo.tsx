import React, { useEffect } from 'react'
import styled from 'styled-components';
import Head from "next/head";

import { CharacterInfoProps } from './CharacterInfo.props';
import { Heading } from '..';

const Wrapper = styled.ul`
	background: var(--gray);
	border-radius: 20px;
	padding: 20px;
	border: 1px solid var(--light-gray);
`;

const LiElem = styled.li`
	padding-top: 15px;
`;

export const CharacterInfo = ({ character, ...props } : CharacterInfoProps): JSX.Element => {
	
	const {birth_year, eye_color, gender, hair_color, height, mass, name, skin_color, url, ...rest} = character;

	useEffect(() => {
		sessionStorage.setItem(name, name);
	}, [])

	return (
		<>
			<Head>
				<title>{name}</title>
			</Head>
			<Wrapper>
				<LiElem>
					<Heading tag='h1'>{name} </Heading>
				</LiElem>
				<LiElem>
					<Heading tag='h3'>Birth Year: {birth_year}</Heading>
				</LiElem>
				<LiElem>
					<Heading tag='h3'>Eye Color: {eye_color}</Heading>
				</LiElem>
				<LiElem>
					<Heading tag='h3'>Gender: {gender}</Heading>
				</LiElem>
				<LiElem>
					<Heading tag='h3'>Hair Color: {hair_color}</Heading>
				</LiElem>
				<LiElem>
					<Heading tag='h3'>Birth Year: {height} cm</Heading>
				</LiElem>
				<LiElem>
					<Heading tag='h3'>Mass: {mass} kg</Heading>
				</LiElem>
				<LiElem>
					<Heading tag='h3'>Skin Color: {skin_color}</Heading>
				</LiElem>
			</Wrapper>
		</>
	)
}
