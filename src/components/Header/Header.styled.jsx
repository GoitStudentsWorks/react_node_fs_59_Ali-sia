import styled from "styled-components";

import { greaterThan } from "helpers/breakpoints.styled";

import {ReactComponent as BurgerSVG} from './burger.svg';

export const HeaderStyled = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 24px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 64px;

    margin-left: auto;
    margin-right: auto;

    max-width: ${props => props.theme.breakpoints.mobile};

    background-color: transparent;
    color: ${props => props.theme.colors.textHeaderTheme};

    ${props => greaterThan("tablet", `
        max-width: ${props.theme.breakpoints.tablet};
        padding-left: 32px;
        padding-right: 32px;
    `)};

    ${props => greaterThan("laptop", `
        max-width: 100%;
        padding-bottom: 32px;
    `)};
`;

export const ButtonStyled = styled.button`
    background-color: transparent;
    border: 0;
    padding: 4px;

    cursor: pointer;

    display: block;

    &:hover,
    &:focus {
        box-shadow: 0 0 4px ${props => props.theme.colors.textHeaderTheme};
        border-radius: 50%;
    };

    ${() => greaterThan("laptop", `
        display: none;
    `)};
`

export const PageName =styled.h1`
    display: none;

    font-weight: ${props => props.theme.fontWeights.bold};
    font-size: ${props => props.theme.fontSizes.heading};

    line-height: 1;

    text-shadow: ${props => props.theme.shadows.headerText};

    ${() => greaterThan("laptop", `
        display: block;
    `)};
`

export const BurgerSVGStyled = styled(BurgerSVG)`
    display: block;
    width: 24px;
    height: 24px;
    color: ${props => props.theme.colors.textHeaderTheme};

    ${props => greaterThan("laptop", `
        width: 32px;
        height: 32px;
    `)};
`

export const UserMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;

    height: 100%;

    background-color: transparent;
`