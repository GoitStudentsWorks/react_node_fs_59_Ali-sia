import styled from "styled-components";
import photoPlug from "./ph_user.svg";
import { HiPlus } from "react-icons/hi";

export const Form = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 40px 20px;
    padding: 40px 18px;

    background-color: #fff;
    border-radius: 16px;
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
`;

export const SelectionIcon = styled(HiPlus)`
    position: absolute;
    left: 50%;
    top: 50%; 
    transform: translate(-50%, -50%);
    color: #fff;
`;

export const Label = styled.label`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 18px;
`;

export const LabelName = styled.span`
    margin-bottom: 8px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
`;

export const Input = styled.input`
    padding: 12px 14px;

    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
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
`;

export const Button = styled.button`
    width: 195px;
    height: 46px;
    margin-left: auto;
    margin-right: auto;

    cursor: pointer;
    font-weight: 600;
    font-size: 14px;  
    line-height: 18px;
    color: white;
    background-color: #3E85F3;
    border: 2px solid transparent; 
    border-radius: 16px;

    &:hover {
        box-shadow: rgba(0, 0, 0, 7) 0px 5px 15px;
    }
`;