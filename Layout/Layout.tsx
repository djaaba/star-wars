import { LayoutProps } from './Layout.props';
import {Footer, Header} from './index';
import styled from 'styled-components';

const LayoutWrapper = styled.div`
	height: 100vh;
	max-width: 1500px;
  	margin: 0 auto;
  	padding: 40px;
`;

export const Layout = ({children, ...props}: LayoutProps):JSX.Element => {
  return (
	<>
		<Header/>
			<LayoutWrapper>
				{children}
			</LayoutWrapper>
		<Footer/>
	</>
  )
}
