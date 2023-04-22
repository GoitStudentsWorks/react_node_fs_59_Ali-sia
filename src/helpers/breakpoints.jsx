import { css } from 'styled-components';

const breakpoints = {
  mobile: 375,
  tablet: 768,
  laptop: 1440,
};

export const media = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}px) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});

// usage
// import styled from 'styled-components';
// import { media } from './breakpoints';

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background-color: #f0f0f0;
//   padding: 20px;

//   ${media.tablet} {
//     flex-direction: row;
//     padding: 40px;
//   }
// `;
