import styled from "styled-components";

import { theme } from 'theme';

import {ReactComponent as MoonSVG} from './moon.svg';
import {ReactComponent as SunSVG} from './sun.svg';

export const ButtonStyled = styled.button`
    background-color: transparent;
    border: 0;
    padding: 0;

    cursor: pointer;
`

const SVGStyled = imageSVG => {
    return styled(imageSVG)`
        width: 24px;
        height: 24px;

        @media screen and (min-width: ${theme.breakpoints.tablet}) {
            width: 32px;
            height: 32px;
        };
    `
}

export const MoonSVGStyled = SVGStyled(MoonSVG);

export const SunSVGStyled = SVGStyled(SunSVG);