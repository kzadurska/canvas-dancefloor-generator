import { queries } from 'styles';
import styled, { css } from 'styled-components';

const commonHeaderFooterStyles = css`
  position: fixed;
  height: 50px;

  text-align: center;
  line-height: 50px;

  @media ${queries.mobile} {
    width: 100%;
  }

  @media ${queries.desktop} {
    width: calc(100vw - 300px);
  }
`;

const commonGradientStyles = css`
  content: '';
  width: 100px;
  min-height: 2500px;
`;

export const Header = styled.header`
  ${commonHeaderFooterStyles};
  background-color: tomato;
  top: 0;
`;

export const Footer = styled.footer`
  ${commonHeaderFooterStyles};
  background: limegreen;
  bottom: 0;
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  background: gainsboro;
`;

export const Main = styled.main`
  display: flex;
  align-items: flex-start;
  min-height: 2500px;

  @media ${queries.mobile} {
    width: 100%;
  }

  @media ${queries.desktop} {
    width: calc(100vw - 300px);

    &::before {
      ${commonGradientStyles};
      background: linear-gradient(90deg, transparent, white);
    }

    &::after {
      ${commonGradientStyles};
      background: linear-gradient(90deg, white, transparent);
    }
  }
`;

export const Banner = styled.div`
  display: flex;
  align-items: center;

  background: navy;
  height: 300px;
  width: 100%;
`;

export const AnimatedSquare = styled.div`
  background: gold;
  width: 100px;
  height: 100px;
  cursor: pointer;
`;
