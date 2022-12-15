import { FooterProps } from './Footer.props';

import styled from 'styled-components';
import { getId } from '../../utils';

const FooterWrapper = styled.ul`
  padding: 15px;
  background: var(--gray);
  border-top: 1px solid var(--light-gray);
  display: flex;
  justify-content: space-around;
`;

interface ILink {
  resurs: string;
  address: string;
}

const links: Array<ILink> = [
  {resurs: 'vk', address: 'https://vk.com/djaba13'},
  {resurs: 'nebo.team', address: 'https://nebo.team'},
  {resurs: 'github', address: 'https://github.com/djaaba/star-wars'}
]

export const Footer = ( {children, ...props}: FooterProps): JSX.Element => {
  return (
    <>
      <FooterWrapper>
        { links.map(link => 
          <li key={getId()}>
            <a 
              href={link.address}
            >
              {link.resurs}
            </a>
          </li>
        ) }
      </FooterWrapper>
    </>
  )
}