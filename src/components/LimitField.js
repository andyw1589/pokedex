import { useState } from "react";

const LimitField = props => {
    const [limitInput, setLimitInput] = useState(props.limit.toString());

    // takes the limit as a string, clamps it between 1 and 905 inclusive, returns a number
    const clampLimit = lim => {
        let limNum = Number(lim);

        // floor it to make it an integer
        return Math.floor(limNum < 1 ? 1 : Math.min(limNum, 905)).toString();
    }

    // submit the new limit
    const submitLimit = lim => {
        props.setLimit(Number(lim));
        setLimitInput(lim);
    }

    return (
        <div className="col">
            <input
                type="text"
                value={limitInput}
                className="mx-3"
                onChange={e => setLimitInput(e.target.value)}
            ></input>
            <button className="btn btn-primary" onClick={() => submitLimit(clampLimit(limitInput))}>Set limit</button>
        </div>
    );
}

export default LimitField;