import styled from "styled-components";

export const UserName = styled.p`
    margin-right: 14px;
    margin-left: 14px;

    font-weight: ${props => props.theme.fontWeights.bold};
    font-size: ${props => props.theme.fontSizes.s};
    line-height: 1.29;

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
        font-size: ${props => props.theme.fontSizes.l};
        line-height: 1;
    };
`

export const UserMenuButton = styled.button`
    box-sizing: border-box;

    width: 32px;
    height: 32px;

    background-color: ${props => props.theme.colors.textHeaderTheme};
    border: 1.8px solid #3E85F3;
    padding: 0;

    border-radius: 50%;
    overflow: hidden;

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
        width: 44px;
        height: 44px;
    };
`

export const UserMenuButtonChar = styled.p`
    color: ${prop => prop.theme.colors.bgcMainTheme};
    font-weight: ${props => props.theme.fontWeights.bold};
    font-size: ${props => props.theme.fontSizes.logo};

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
        font-size: ${props => props.theme.fontSizes.heading};
    };
`