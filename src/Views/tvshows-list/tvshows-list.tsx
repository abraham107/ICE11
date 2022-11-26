import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import TVShowListDataService from '../../Services/TVShowListDataService';

import TVShow from '../../Models/TVShow';


function TVShowsList()
{
    const [TVShows, setTVShows] = useState<Array<TVShow>>([]);

    useEffect(()=>{
        readTVShows();
    }, []);

    function readTVShows()
    {
        TVShowListDataService.read()
        .then((response: any) => {
            setTVShows(response.data);
            console.log(response.data);
        })
        .catch((e: Error) => {
            console.log(e);
        });
    }

    return(
        <div className='container'>
            <h1>TV Shows List</h1>
            <div className="row">
                <div className="col">

                    <Link to={"/add"} id="addButton" className="btn btn-primary mb-1"><i className="fa-solid fa-circle-plus"></i> Add TV Show</Link>
                
                    <table className="table table-striped table-bordered table-hover">
                    
                        <thead className="table-dark">
                            <tr>
                                <th scope="col" className='text-center'>#</th>
                                <th scope="col">TV Show</th>
                                <th scope="col">Studio</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                        {/* repeatable rows */}
                        {
                            TVShows &&
                            TVShows.map((tvShow: TVShow, index: number) =>
                            {
                                return(
                                    <tr key={index}>
                                        <th scope="row" className="text-center">{index + 1}</th>
                                        <td>{tvShow.title}</td>
                                        <td>{tvShow.studio}</td>
                                    </tr>
                                );
                            })
                        }
                        </tbody>
                    </table>
                
                </div>
            </div>
        </div>
    )

}

export default TVShowsList;