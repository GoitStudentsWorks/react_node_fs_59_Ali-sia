import styled from "styled-components";

import {ReactComponent as BurgerSVG} from './burger.svg';

export const HeaderStyled = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;

    max-width: 335px;
    
    margin-top: 20px;
    margin-bottom: 95px;
    margin-left: auto;
    margin-right: auto;

    background-color: transparent;
    color: ${props => props.theme.colors.textHeaderTheme};

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
        max-width: 704px;
        
        margin-top: 24px;
        margin-bottom: 64px;
    };

    @media screen and (min-width: ${props => props.theme.breakpoints.laptop}) {
        max-width: 100%;
        
        margin-top: 40px;
        margin-bottom: 32px;
        margin-left: 32px;
        margin-right: 32px;
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