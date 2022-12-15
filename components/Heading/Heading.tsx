import React from 'react'
import styled from 'styled-components';

import { HeadingProps } from './Heading.props';

const TitleH1 = styled.h1`
  font-size: 40px;
`;

const TitleH2 = styled.h2`
  font-size: 30px;
`;

const TitleH3 = styled.h3`
  font-size: 20px;
`;

export const Heading = ({ children, tag} : HeadingProps): JSX.Element => {
	
	switch(tag){
		case 'h1': 
			return <TitleH1>{children}</TitleH1>
		case 'h2': 
			return <TitleH2>{children}</TitleH2>
		case 'h3': 
			return <TitleH3>{children}</TitleH3>
		default: 
			return <></>
	}
}
