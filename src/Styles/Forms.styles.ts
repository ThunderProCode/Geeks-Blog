import styled from "styled-components";

export const Form = styled.form`
    margin: 14px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: center;
`

export const TextInput = styled.input`
    width: 95%;
    border: none;
    background: none;
    outline: none;
    color: white;
`

export const Label = styled.label`
    width: 5%;
    color: white;
`
export const CheckBoxLabel = styled.label`
    color: white;
`

export const CheckBox = styled.input`
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

`
