// Show an error
import meowth from '../assets/meowthisdead.jpg';

const Error = props => {
    return (
        <div>
            <img src={meowth} className="rounded" alt="death"></img>
            <h1>{"Something broke :("}</h1>
            <h3>{props.children}</h3>
        </div>
    )
}

export default Error;