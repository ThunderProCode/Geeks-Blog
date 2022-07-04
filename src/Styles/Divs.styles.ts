import styled from "styled-components";

export const PageWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const FormInputWrapper = styled.div`
    width: 100%;
    margin-top: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid white;
`

export const CheckBoxWrapper = styled.div`
    width: 100%;
    display: flex;
    align-self: left;
    flex-direction: row;
    align-items: center;
    justify-content: left;
`

export const PasswordWrapper = styled.div`
    margin-top: 16px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
     
    a {
        width: 50%;
        text-decoration: none;
        color: white;
    }
`