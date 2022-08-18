import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// components
import PokeCell from '../components/PokeCell';
import Loading from '../components/Loading';
import LimitField from '../components/LimitField';

// pages
import Error from '../components/Error';

const Listing = () => {
    const [limit, setLimit] = useState(151);
    const [loading, setLoading] = useState(true);
    const [pokeList, setPokeList] = useState([]);
    const [errorCode, setErrorCode] = useState(undefined);

    useEffect(() => {
        // Get the listing
        setTimeout(() => {
            axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
                .then(response => {
                    const { results } = response.data;
                    console.log(`response gotten, limit is ${limit}`);

                    // map into an array of objects {name, id}
                    const pList = results.map((obj, i) => {
                        return {
                            name: obj.name,
                            id: i + 1
                        };
                    });

                    setPokeList(pList);
                    setLoading(false);
                })
                .catch(error => {
                    // error handling - this is essentially the same from the demos
                    const { message } = error;
                    setErrorCode(message);
                    setLoading(false);
                });
        }, 1000);
    }, [limit]);

    // lim is an integer
    const setLimitAndReload = lim => {
        setLoading(lim !== limit);
        setLimit(lim);
    }

    // i have no idea how to use css grid so i'm gonna try using bootstrap instead
    // layout is a grid with 4 columns
    const gridRows = [];

    // num of rows is ceil(# of elements / 4)
    for (let i = 0; i < Math.ceil(pokeList.length / 4); i++) {
        gridRows.push([]);  // each subarray represents a single
    }

    // next we populate the rows
    pokeList.forEach((name, i) => {
        gridRows[Math.floor(i / 4)].push(name);
    })

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
                // error
                !loading && errorCode && (
                    <div>
                        <Error>
                            {errorCode}
                        </Error>
                    </div>
                )
            }

            {
                // Not loading anymore and no error - display the list
                !loading && !errorCode && (
                    <div>
                        <h1>Pokemans</h1>
                        <h3>Click on a poker man to view its stats!</h3>
                        <LimitField setLimit={setLimitAndReload} limit={limit}/>
                        <div className="container w-75">
                            {/* dynamic javascript to convert gridRows into bootstrap rows */}
                            {
                                gridRows.map((row, i) => (
                                    <div className="row" key={i}>
                                        {/* create each row */}
                                        {
                                            row.map(poke => (
                                                <div className="col-3 px-4 py-4" key={poke.id}>
                                                    <Link to={`view/${poke.id}`} className="text-decoration-none">
                                                        <PokeCell pokeName={poke.name} pokeId={poke.id} />
                                                    </Link>
                                                </div>
                                            ))
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Listing;