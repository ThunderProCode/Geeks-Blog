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
    margin-top: 16px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid white;
    border-radius: 1px;
    padding: 4px;
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
        font-size: 12px;
        text-align: end;
    }
`

export const RowWrapper = styled.div`
    margin-top: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    p {
        font-size: 14px;
    }

    a {
        text-decoration: none;
        color: #ADACAC;
        font-size: 14px;
        margin-left: 4px;
    }
`

export const Line = styled.div`
    margin: 12px;
    border: none;
    width: 100%;
    border-bottom: 2px solid white;
`
export const PostWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
`
export const PostIconContainer = styled.div`
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
    margin-top: 12px;
    margin-bottom: 12px;
    svg {
        font-size: 20px;
    }

    p {
        margin-left: 4px;
        font-size: 14px;
    }
`