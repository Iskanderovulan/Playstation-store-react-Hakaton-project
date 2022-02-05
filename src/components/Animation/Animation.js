import React from 'react';
import './Animation.css'

const Animation = () => {
    return (
        <div className="animation">
            <div className="playstation-loader">
                <div className="icon-container">
                    <div className="icon square">▢</div>
                </div>
                <div className="icon-container">
                    <div className="icon triangle">△</div>
                </div>
                <div className="icon-container">
                    <div className="icon cross">✕</div>
                </div>
                <div className="icon-container">
                    <div className="icon circle">◯</div>
                </div>
            </div>

            <div className="loading-text">Loading, please wait…</div>
        </div>
    );
};

export default Animation;