import React, { useEffect } from 'react'
import styled from 'styled-components';
import Head from "next/head";

import { CharacterInfoProps } from './CharacterInfo.props';
import { getId } from '../../utils';

export const CharacterInfo = ({ character, ...props } : CharacterInfoProps): JSX.Element => {
	
	const {birth_year, eye_color, gender, hair_color, height, mass, name, skin_color, url, ...rest} = character;

	useEffect(() => {
		sessionStorage.setItem(name, name);
		console.log(sessionStorage);
	}, [])

	return (
		<>
		<Head>
			<title>{name}</title>
		</Head>
		<div>
			{name}

			{birth_year}
			{eye_color}
			{gender}
			{hair_color}
			{height}
			{mass}
			{skin_color}
		</div>
		</>
	)
}
