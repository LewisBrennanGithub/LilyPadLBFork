import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const HomeNavElement = () => (
  <Link to="/">
    <NavigationBarElement>
      <StyledCloverIcon>
        <path d={FrogSVGUrl} />
      </StyledCloverIcon>
      <HomeText>Home</HomeText>
    </NavigationBarElement>
  </Link>
);

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-5px);
  }
  60% {
    transform: translateY(-3px);
  }
`;

const NavigationBarElement = styled.div`
  color: #fc0000;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  padding-top: 3px;

  @media (max-width: 768px) {
    padding-top: 1.5px;
  }

  &:hover {
    color: white;
    animation: ${bounce} 1s;
  }
`;

const HomeText = styled.span`
  display: inline;
  padding-top: 0.1em;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledCloverIcon = styled.svg.attrs({
  viewBox: '0 0 448 512',
  xmlns: 'http://www.w3.org/2000/svg',
})`
    width: 3rem;
  height: 2.25rem;
  fill: currentColor;
  stroke: black;
  stroke-width: 23.5px;

  &:hover {
    fill: white;
  }


`;

const FrogSVGUrl = "M173.3 32C139.4 32 112 59.4 112 93.3v4.9c0 12 3.3 23.7 9.4 34l18.8 31.3c1.1 1.8 1.2 3.1 1 4.2c-.2 1.2-.8 2.5-2 3.6s-2.4 1.8-3.6 2c-1 .2-2.4 .1-4.2-1l-31.3-18.8c-10.3-6.2-22-9.4-34-9.4H61.3C27.4 144 0 171.4 0 205.3c0 16.2 6.5 31.8 17.9 43.3l1.2 1.2c3.4 3.4 3.4 9 0 12.4l-1.2 1.2C6.5 274.9 0 290.5 0 306.7C0 340.6 27.4 368 61.3 368h4.9c12 0 23.7-3.3 34-9.4l31.3-18.8c1.8-1.1 3.1-1.2 4.2-1c1.2 .2 2.5 .8 3.6 2s1.8 2.4 2 3.6c.2 1 .1 2.4-1 4.2l-18.8 31.3c-6.2 10.3-9.4 22-9.4 34v4.9c0 33.8 27.4 61.3 61.3 61.3c16.2 0 31.8-6.5 43.3-17.9l1.2-1.2c3.4-3.4 9-3.4 12.4 0l1.2 1.2c11.5 11.5 27.1 17.9 43.3 17.9c33.8 0 61.3-27.4 61.3-61.3v-4.9c0-12-3.3-23.7-9.4-34l-18.8-31.3c-1.1-1.8-1.2-3.1-1-4.2c.2-1.2 .8-2.5 2-3.6s2.4-1.8 3.6-2c1-.2 2.4-.1 4.2 1l31.3 18.8c10.3 6.2 22 9.4 34 9.4h4.9c33.8 0 61.3-27.4 61.3-61.3c0-16.2-6.5-31.8-17.9-43.3l-1.2-1.2c-3.4-3.4-3.4-9 0-12.4l1.2-1.2c11.5-11.5 17.9-27.1 17.9-43.3c0-33.8-27.4-61.3-61.3-61.3h-4.9c-12 0-23.7 3.3-34 9.4l-31.3 18.8c-1.8 1.1-3.1 1.2-4.2 1c-1.2-.2-2.5-.8-3.6-2s-1.8-2.4-2-3.6c-.2-1-.1-2.4 1-4.2l18.8-31.3c6.2-10.3 9.4-22 9.4-34V93.3C336 59.4 308.6 32 274.7 32c-16.2 0-31.8 6.5-43.3 17.9l-1.2 1.2c-3.4 3.4-9 3.4-12.4 0l-1.2-1.2C205.1 38.5 189.5 32 173.3 32z"


export default HomeNavElement;