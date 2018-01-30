import React from 'react';
import imgLoading from '../img/loading.gif';
import { List } from 'react-content-loader'

//TODO: DONT REPEAT SO MUCH CODE
const Loading = () => {
    return(
        <div className="container loading-container">
            <div className="card">
                <List className='card__svg'/>
            </div>
            <div className="card">
                <List className='card__svg'/>
            </div>
            <div className="card">
                <List className='card__svg'/>
            </div>
            <div className="card">
                <List className='card__svg'/>
            </div>
            <div className="card">
                <List className='card__svg'/>
            </div>
        </div>
    );
};

export default Loading;