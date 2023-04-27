import styled from 'styled-components';
import goose from './goose.png';
import goose2x from './goose@2x.png';
// import { greaterThan } from 'helpers/breakpoints.styled';

export const LoaderWrapper = styled.div`
    height: 100vh;
    width: 100vw;

    position: fixed;
    top: 0;
    left: 0;

    background-color: brown;

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 1000;
`;

export const RockinGoose = styled.div`
    width: 368px;
    height: 445px;
    background: no-repeat url(${goose});
    background-size: 100% 100%;

    @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
        background-image: url(${goose2x});
`;