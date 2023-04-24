import styled from "styled-components";

export const UserName = styled.p`
    margin: 0px;
    margin-right: 14px;
    margin-left: 14px;

    font-weight: 700;
    font-size: 14px;
    line-height: 1.29;

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
        font-size: 18px;
        line-height: 1;
    };
`

export const UserMenuButton = styled.button`
    box-sizing: border-box;

    width: 32px;
    height: 32px;

    background-color: ${props => props.theme.colors.white});
    border: 1.8px solid #3E85F3;
    padding: 0;

    border-radius: 50%;
    overflow: hidden;

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
        width: 44px;
        height: 44px;
    };
`