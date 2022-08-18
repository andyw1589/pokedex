import styled from 'styled-components';

const RedFooter = styled.footer`
    background-color: #c92418;
    color: #e39d98
`;

const Footer = () => {
    return (
        <RedFooter className="footer pb-2 pt-3">
            <p>{"(Pulpapedia is not a real pokedex)"}</p>
        </RedFooter>
    );
};

export default Footer;