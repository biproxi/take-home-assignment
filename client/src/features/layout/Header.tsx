import React from 'react';
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { StyledButton } from "../../style/button";

const StyledHeader = styled.header`
  h1 {
    margin: 0;
  }

  h1 a:link {
    text-decoration: none;
    text-underline: none;
    color: darkslateblue;
  }

  h1 a:visited {
    text-decoration: none;
    text-underline: none;
    color: darkslateblue;
  }
`

const Header = () => {
    const location = useLocation()
    const { pathname: path } = location;
    const isArchive = path === '/archived'

    return (
        <>
            <StyledHeader>
                <h1><Link to='/'>Tom's Todos!</Link></h1>
                {!isArchive &&
                <nav>
                    <StyledButton><Link to='/archived'>Archived</Link></StyledButton>
                </nav>
                }
            </StyledHeader>
        </>
    );
};

export default Header;
