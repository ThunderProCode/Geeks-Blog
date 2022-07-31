import styled from "styled-components";

export const PageWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 600px) {
        width: 80%;
    }

    @media (min-width: 700px) {
        width: 70%;
    }

    @media (min-width: 1000px) {
        width: 40%;
    }

`

export const MenuWrapper = styled.div`
    background: black;
    width: 50%;
    height: 100%;
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    margin-top: 40px;

    @media (min-width: 600px) {
        display: none;
    }
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

export const TopHeader = styled.header`
    width: 90%;
    height: 5%;
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: black;
    z-index: 1;

    @media (min-width: 600px) {
        width: 100%;
        padding: 12px;
    }

    @media (max-width: 600px) {
        img {
            display: none;
        }
    }
`