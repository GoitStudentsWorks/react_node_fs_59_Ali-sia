import styled from "styled-components";
import { between, greaterThan } from "./../../helpers/breakpoints.styled";

export const Main = styled.main`
    margin-left: auto;
    margin-right: auto;
    padding: 36px 20px 40px;

    background: #F7F6F9;

    ${between('mobile', 'tablet', `
        padding: 0 32px 38px;
    `)}

    ${greaterThan('tablet', `
        padding: 0 32px 38px;
    `)}
`;