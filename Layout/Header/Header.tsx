import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

import { HeaderProps } from './Header.props';

const HeaderWrapper = styled.div`
  padding: 15px;
  background: var(--gray);
  border-bottom: 1px solid var(--light-gray);
`;

export const Header = ( {children, ...props}: HeaderProps): JSX.Element => {
  return (
    <>
      <HeaderWrapper>
        <Link href='/'>
          <Image
            src="/star-wars.png"
            alt="star-wars logo"
            width={108}
            height={57}
            priority 
            />
        </Link>
      </HeaderWrapper>
    </>
  )
}