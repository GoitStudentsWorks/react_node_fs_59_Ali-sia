import styled from "styled-components";
import DatePicker from "react-datepicker";
import photoPlug from "./ph_user.svg";
import { HiPlus } from "react-icons/hi";
import { between, greaterThan, lesserThan } from "./../../helpers/breakpoints.styled";


export const StyledForm = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 335px;
    margin: 0 auto;
    padding: 40px 18px;

    background-color: #fff;
    border-radius: 16px;

    ${lesserThan('mobile', `
        margin: 0 20px;
    `)}
    
    ${greaterThan('tablet', `
        max-width: 704px;
        padding-right: 175px;
        padding-left: 175px;
        padding-top: 268px;
    `)}

    ${greaterThan('laptop', `
        max-width: 1087px;
        padding-right: 175px;
        padding-left: 175px;
    `)}
`;

export const Photo = styled.img`
    position: absolute;
    left: 50%;
    top: 0px;    
    transform: translate(-50%, -50%);
    width: 72px;
    height: 72px;

    background-color: #fff;
    border: 2px solid #3E85F3;
    border-radius: 50%;

    ${greaterThan('tablet', `
        top: 100px; 
        width: 124px;
        height: 124px;
    `)}
`;

export const Plug = styled.div`
    position: absolute;
    left: 50%;
    top: 0px;    
    transform: translate(-50%, -50%);
    width: 72px;
    height: 72px;

    background-color: #fff;
    background-image: url(${photoPlug});
    background-repeat: no-repeat;
    background-size: 50% 50%;
    background-position: center;
    border: 2px solid #3E85F3;
    border-radius: 50%;

    ${greaterThan('tablet', `
        top: 100px;
        width: 124px;
        height: 124px;
    `)}
`;

export const PhotoSelection = styled.input`
    opacity: 0;
    width: 0.1px;
    height: 0.1px;
    overflow: hidden;
    position: absolute;
    z-index: -1;
`;

export const LabelPhotoSelection = styled.label`
    position: absolute;
    left: calc(50% + 16px);
    top: 34px;    
    transform: translate(-50%, -50%);
    width: 14px;
    height: 14px;

    cursor: pointer;
    border: none;
    border-radius: 50%;
    background: #3E85F3;

    &:hover {
        box-shadow: rgba(0, 0, 0, 7) 0px 5px 15px;
    }

    ${greaterThan('tablet', `
        top: 160px;
        left: calc(50% + 28px);
        width: 24px;
        height: 24px;
    `)}
`;

export const Wrapper = styled.div`
    ${greaterThan('laptop', `
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 50px;
        justify-content: center;
        width: 785px;
        margin: 0 auto;
    `)}
`

export const SelectionIcon = styled(HiPlus)`
    position: absolute;
    left: 50%;
    top: 50%; 
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;

    color: #fff;

    ${greaterThan('tablet', `
        width: 16px;
        height: 16px;
    `)}
`;

export const Label = styled.label`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 18px;

    ${between('tablet', 'laptop', `
        max-width: 354px;
        margin: 0 auto 24px;
    `)}
`;

export const LabelName = styled.span`
    margin-bottom: 8px;
    
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.3;

    ${greaterThan('tablet', `
        font-size: 14px;
    `)}
`;

export const Input = styled.input`
    padding: 12px 14px;

    font-weight: 600;
    font-size: 14px;
    line-height: 1.3;
    color: #111111;
    background-color: inherit;
    border: 1px solid rgba(17, 17, 17, 0.1);
    border-radius: 8px;

    &:focus-visible {
        outline: none;
    }
        
    &:hover {
        text-decoration: underline;
        text-decoration-color: #3E85F3;
        text-decoration-thickness: 2px;
    }

    ${greaterThan('tablet', `
        font-size: 16px;
    `)}
`;

export const StyledDatePicker = styled(DatePicker)`   
    width: 100%;
    padding: 12px 14px;

    font-weight: 600;
    font-size: 14px;
    line-height: 1.3;
    color: #111111;
    border: 1px solid rgba(17, 17, 17, 0.1);
    border-radius: 8px;

    &:focus-visible {
        outline: none;
    }
        
    &:hover {
        text-decoration: underline;
        text-decoration-color: #3E85F3;
        text-decoration-thickness: 2px;
    }

    .react-datepicker .goose {
        width: 373px !important;
        height: 354px !important;
        padding: 9px 18px !important;
        background: #3E85F3 !important;
        color: #fff !important;
        border: 1px solid #aeaeae !important;
        border-radius: 16px !important;
    }

    ${greaterThan('tablet', `
        font-size: 16px;
    `)}
`;

export const Button = styled.button`
    width: 58%;
    height: 46px;
    margin: 22px auto 0;

    cursor: pointer;
    font-weight: 600;
    font-size: 14px;  
    line-height: 1.3;
    color: white;
    background-color: #3E85F3;
    border: 2px solid transparent; 
    border-radius: 16px;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.7) 0px 5px 15px;
    }

    ${between('tablet', 'laptop', `
        width: 226px;
        height: 48px;
        margin: 16px auto 0;
    `)}

    ${greaterThan('laptop', `
        width: 226px;
        height: 48px;
        margin: 70px auto 60px;
    `)}
`;