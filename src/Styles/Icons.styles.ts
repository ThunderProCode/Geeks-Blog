import styled from "styled-components";
import { GiHamburgerMenu } from 'react-icons/gi';

export const MenuIcon = styled(GiHamburgerMenu)`
    color: white;
    font-size: 24px;

    @media (min-width:600px){
        display: none;
    }

`