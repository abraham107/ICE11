import React, { ChangeEvent, useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

import TVShowListDataService from '../../Services/TVShowListDataService';
import TVShow from '../../Models/TVShow';

function AddTVShow()
{
    const [title, setTitle] = useState('');
    const [studio, setStudio] = useState('');
    const navigate = useNavigate(); // alias - only for convenience

    useEffect(()=>{
        document.title = "Add TV Show";
    }, []);

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>)
    {
        setTitle(event.target.value);
    }

    function onChangeStudio(event: ChangeEvent<HTMLInputElement>)
    {
        setStudio(event.target.value);
    }

    function saveTVShow(event: any)
    {
        event.preventDefault();
        const data: TVShow = {
            title: title,
            studio: studio
        }

        TVShowListDataService.create(data, "2")
        .then((response: any)=>{
            setTitle(response.data.title);
            setStudio(response.data.studio);
        })
        .catch((e: Error) =>{
            console.log(e);
        });

        navigate("/tvshows-list");
       // window.location.reload();
    }

    return(
        <div className="container">
            <h1 className="col-lg-6 col-md-10 col-sm-10">Add TV Show</h1>
            <hr />
            
            <div className="row justify-content-lg-center g-3">
                <form className="col-lg-6 col-md-10 col-sm-10" onSubmit={saveTVShow}>

                    <div className="input-group mb-3">
                        <span className="input-group-text">TV Show Title</span>
                        <input type="text" id="tvShowTitle" className="form-control" 
                        value={title} onChange={onChangeTitle}
                        aria-label="TV Show Title" aria-describedby="TV Show Title Input"/>
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text">TV Show Studio</span>
                        <input type="text" id="tvShowStudio" className="form-control" 
                        value={studio} onChange={onChangeStudio}
                        aria-label="TV Show Studio" aria-describedby="TV Show Studio Input"/>
                    </div>

                    <button id="addButton" type="submit" className="btn btn-primary me-3">
                        <i className="fa-solid fa-circle-plus"></i> Add</button>
                    <Link to={"/tvshow-list"} id="cancelButton" type="button" className="btn btn-warning">
                        <i className="fa-solid fa-rotate-left"></i> Cancel</Link>
                </form>
            </div>
        </div>
    )
}

export default AddTVShow;