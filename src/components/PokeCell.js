import styled from 'styled-components';
import { capitalize } from '../utils/helper';

// https://css-tricks.com/almanac/properties/a/aspect-ratio/
// A grid cell that you click on to view a pokemon's stats
const SquareDiv = styled.div`
    background-color: white;
    color: black;
    aspect-ratio: 1 / 1;
    border: 3px solid black;
    border-radius: 20px;
    min-height: 0;

    :hover {
        background-color: #f5e4df;
    }
`;

const PokeCell = props => {
    return (
        <SquareDiv className="px-3 py-3">
            {/* does this count as an api call????? */}
            <img 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokeId}.png`}
                alt="sprite"
                width="70%"
                height="auto"
            ></img>
            <p style={{fontSize: "2.5vh"}}>{capitalize(props.pokeName)}</p>
            {/* got a little help from https://stackoverflow.com/questions/14431411/pure-css-to-make-font-size-responsive-based-on-dynamic-amount-of-characters */}
        </SquareDiv>
    );
}

export default PokeCell;