import styled from "styled-components";

import {ReactComponent as BurgerSVG} from './burger.svg';

export const HeaderStyled = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 24px;
    padding-left: 20px;
    padding-right: 20px;

    margin-left: auto;
    margin-right: auto;
    margin-bottom: 64px;

    max-width: ${props => props.theme.breakpoints.mobile};

    background-color: transparent;
    color: ${props => props.theme.colors.textHeaderTheme};

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
        max-width: ${props => props.theme.breakpoints.tablet};

        padding-left: 32px;
        padding-right: 32px;
    };

    @media screen and (min-width: ${props => props.theme.breakpoints.laptop}) {
        max-width: ${props => props.theme.breakpoints.laptop};

        margin-bottom: 32px
    };
`;

export const ButtonStyled = styled.button`
    background-color: transparent;
    border: 0;
    padding: 0;

    cursor: pointer;

    display: block;
    
    @media screen and (min-width: ${props => props.theme.breakpoints.laptop}) {
        display: none;
    };
`

export const PageName =styled.p`
    display: none;

    font-weight: 700;
    font-size: 32px;

    padding: 0;
    margin: 0;
    line-height: 1;

    text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
    
    @media screen and (min-width: ${props => props.theme.breakpoints.laptop}) {
        display: block;
    };
`

export const BurgerSVGStyled = styled(BurgerSVG)`
    width: 24px;
    height: 24px;
    color: ${props => props.theme.colors.textHeaderTheme};

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
        width: 32px;
        height: 32px;
    };
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