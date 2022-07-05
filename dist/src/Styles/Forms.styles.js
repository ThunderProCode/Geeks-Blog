import styled from "styled-components";
export const Form = styled.form `
    margin: 14px;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
`;
export const TextInput = styled.input `
    width: 95%;
    border: none;
    background: none;
    outline: none;
    color: white;
    &::placeholder {
        color: white;
        font-size: 12px;
        font-weight: 100;
    }
`;
export const Label = styled.label `
    width: 5%;
    color: white;
    font-size: 20px;
    margin-right: 6px;
`;
export const CheckBoxLabel = styled.label `
    color: white;
    font-size: 12px;
`;
export const CheckBox = styled.input `
    margin: 0px;
    margin-right: 6px;
    justify-self: left;
    width: 0.9em;
    height: 0.9em;
    border-radius: 50%;
    border: 1px solid white;
    vertical-align: middle;
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
    background-color: none;

    &:checked {
        background-color: white;
    }        

`;
export const PrimaryButton = styled.button `
    border-radius: 4px;
    padding: 6px;
    color: black;
    background: white;
    border: none;
    font-size: 20px;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
`;
export const LoginWithButton = styled.button `
    width: 100%;
    margin-top: 16px;
    border-radius: 4px;
    padding: 6px;
    color: black;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        margin-right: auto;
        color: white;
        font-size: 18px;
    }

    span {
        font-size: 12px;
        font-weight: 400;
        margin-right: auto;
    }

`;
