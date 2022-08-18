import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RedNav = styled.nav`
    background-color: #c92418;
`;

const Header = () => {
    return (
        <header>
            <RedNav className="navbar px-3">
                <Link className="text-decoration-none nav-link" to="/" style={{color: "#fff"}}>Pulpapedia</Link>
                {/*
                For the love of heck, I could not figure out how to change the link colour by myself.
                https://stackoverflow.com/questions/46102586/change-default-color-of-link-from-blue-to-white
                */}
            </RedNav>
        </header>
    );
};

export default Header;