import styled from "styled-components";

import { greaterThan } from "helpers/breakpoints.styled";

import {ReactComponent as LogoutSVG} from './logout.svg';

export const ButtonStyled = styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    
    border: 0;
    border-radius: 16px;

    padding: 14px 28px;

    background: ${({theme}) => theme.colors.btnLogout};

    font-weight: ${props => props.theme.fontWeights.semibold};
    font-size: ${props => props.theme.fontSizes.s};
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${({theme}) => theme.colors.white};

    &:hover,
    &:focus {
        box-shadow: ${props => props.theme.shadows.loginBtn};
    };

    ${props => greaterThan("tablet", `
        padding: 16px 23px;

        font-size: ${props.theme.fontSizes.l};
        line-height: 1.33;
    `)};
`

export const LogoutSVGStyled = styled(LogoutSVG)`
    display: block;
    width: 18px;
    height: 18px;

    margin-left: 6px;

    ${() => greaterThan("tablet", `
        width: 20px;
        height: 20px;

        margin-left: 11px;
    `)};
`