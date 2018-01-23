import React from 'react';
import imgLoading from '../img/loading.gif';

const Loading = () => {
    return(
        <div className="text-center">
            <img src={imgLoading} className="loadingImg" alt="" />
        </div>
    );
};

export default Loading;