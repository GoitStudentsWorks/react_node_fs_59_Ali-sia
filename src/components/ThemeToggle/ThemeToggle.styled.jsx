import styled from "styled-components";

import {ReactComponent as MoonSVG} from './moon.svg';
import {ReactComponent as SunSVG} from './sun.svg';

export const ButtonStyled = styled.button`
    background-color: transparent;
    border: 0;
    padding: 4px;

    cursor: pointer;

    &:hover,
    &:focus {
        box-shadow: 0 0 4px ${props => props.theme.colors.textHeaderTheme};
        border-radius: 50%;
    };
`

const SVGStyled = imageSVG => {
    return styled(imageSVG)`
        display: block;
        width: 24px;
        height: 24px;

        @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
            width: 32px;
            height: 32px;
        };
    `
}

export const MoonSVGStyled = SVGStyled(MoonSVG);

export const SunSVGStyled = SVGStyled(SunSVG);