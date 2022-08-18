import styled from 'styled-components';
import pokeball from '../assets/pokeball.png';

// credit: https://flaviocopes.com/rotate-image/
// wanted to make a custom loading thing instead of the bootstrap spinner
const SpinningImage = styled.img`
    animation: rotation 0.5s infinite linear;

    @keyframes rotation {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(359deg);
        }
      }
`;

const Loading = () => {
    return (
        <SpinningImage 
            src={pokeball}
            width="50"
            height="auto"
            alt="loading"
        />
    )
}

export default Loading;