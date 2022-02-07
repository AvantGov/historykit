import React from 'react';

const Mobile = () => {

    return (
    <div className="MobileApp">
        <div className="MobileApp__container">
            <a className="button_link" href="/">
                <div className="container__button">
                    <span className="button__icon">Apple Music</span>
                </div>
            </a>
            <a className="button_link" href="/">
                <div className="container__button">
                    <span className="button__icon">Spotify</span>
                </div>
            </a>
            <a className="button_link" href="/">
                <div className="container__button">
                    <span className="button__icon">Bandcamp</span>
                </div>
            </a>
            {/* template for a new button comp. */
            /* <a className="button_link" href="/">
                <div className="container__button">
                    <span className="button__icon"></span>
                </div>
            </a> */}
        </div>
    </div>
    );
};

export default Mobile;