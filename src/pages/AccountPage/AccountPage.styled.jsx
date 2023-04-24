import styled from "styled-components";
import { between, greaterThan } from "./../../helpers/breakpoints.styled";

export const Main = styled.main`
    max-width: 375px;
    margin-left: auto;
    margin-right: auto;

    background: #F7F6F9;

    ${between('mobile', 'tablet', `
        max-width: 768px;
    `)}

    ${greaterThan('tablet', `
        max-width: 1200px;
    `)}
`;