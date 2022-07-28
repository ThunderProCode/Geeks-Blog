import styled from "styled-components";
export const MenuUl = styled.ul `
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    gap: 30px;
    margin-left: 42px;
    margin-top: 30px;
    text-decoration: none;

    a {
        text-decoration: none;
        color: white;
        font-size: 22px;
    }

`;
export const LargeMenuUl = styled.ul `
    display: flex;
    flex-direction: row;
    gap: 12px;
    margin-left: auto;
    margin-right: 12px;

    a {
        text-decoration: none;
        color: white;
        font-size: 16px;
    }

    a:hover {
        color: grey;
    }

    @media (max-width: 600px) {
        display: none ;
    }

`;
