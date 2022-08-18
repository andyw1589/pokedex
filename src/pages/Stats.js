import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { capitalize } from '../utils/helper';
import axios from "axios";
import { useState, useEffect } from "react";

// components
import Loading from "../components/Loading";
import Error from "../components/Error";

const Stats = () => {
    const { id } = useParams();  // get the url params

    // states
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState("");
    const [stats, setStats] = useState([]);
    const [errorCode, setErrorCode] = useState(undefined);

    useEffect(() => {
        setTimeout(() => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
                .then(response => {
                    const { name, stats } = response.data;
                    setStats(stats);
                    setName(name);
                    setLoading(false);
                })
                .catch(error => {
                    // error handling - this is essentially the same from the demos
                    const { message } = error;
                    setErrorCode(message);
                    setLoading(false);
                });
        }, 500);
    }, [id]);

    return (
        <div className="my-4">
            {
                // Loading
                loading && !errorCode && (
                    <div>
                        <Loading />
                    </div>
                )
            }

            {
                // Error
                !loading && errorCode && (
                    <div>
                        <Error>
                            {errorCode}
                        </Error>
                    </div>
                )
            }

            {
                // Not loading anymore and no error - display the stats
                !loading && !errorCode && (
                    <div>
                        <h1>
                            {capitalize(name)}
                        </h1>

                        {/* Main poke image */}
                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                            alt={name}
                        ></img>

                        {/* Stats */}
                        <table className="table table-striped w-50 mx-auto">
                            <thead>
                                <tr>
                                    <th>Stat</th>
                                    <th>Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    // loop thru the stats
                                    stats.map(statData => (
                                        <tr key={statData.stat.name}>
                                            <td>{statData.stat.name.toUpperCase().replace('-', ' ')}</td>
                                            <td>{statData.base_stat}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

                        {/* Back button */}
                        <Link to="">
                            <p>Go back</p>
                        </Link>
                    </div>
                )
            }

        </div>
    )
}

export default Stats;