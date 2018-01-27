import React from 'react';
import imgLoading from '../img/loading.gif';

const Loading = () => {
    return(
        <div className="loading">
            <img src={imgLoading} className="loading__image" alt="" />
        </div>
    );
};

export default Loading;