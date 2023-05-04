import React from 'react';
import { ReactSpinner } from 'react-spinning-wheel';
import 'react-spinning-wheel/dist/style.css';

const Loading = () => {
    return (
        <div>
            <h2>Loading...</h2>
            <ReactSpinner />
        </div>
    );
};

export default Loading;