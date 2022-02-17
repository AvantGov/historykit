// * COMPS 
import React from 'react';

// * DATA 
import buttons from './assets/data/buttons.js';

// * icons (hate this)
import icon_apple from './assets/img/US-UK_Apple_Music_Listen_on_Badge_RGB_072720.svg'
import icon_bandcamp from './assets/img/bc-logotype-dark-128.png'
import icon_spotify from './assets/img/Spotify_Logo_RGB_White.png'
import icon_deezer from './assets/img/Deezer_Logo_RVB_MonoWhite.svg'
import icon_twitter from './assets/img/Twittersocialiconscirclewhite.svg'

// * CSS 
import './CSS/Main.css'

const Main = () => {

    const icons = [
        icon_apple,
        icon_bandcamp,
        icon_spotify,
        icon_deezer,
        icon_twitter
    ]

    var count = 0;

    return(
        <div className='Main__container' aria-label='history kit main directory. How can we help you today?'> 
            {buttons.map((item) => {
                console.log(item)
                count += 1
                return(
                    <a className='link' href={item.link} key={item.name}>
                        <div className='container__button' aria-label={item.altText}>
                            <img className="button__icon" src={icons[count - 1]} aria-label={item.altText} />
                            <div className='button__title'aria-label={item.altText}>{item.name}</div>
                        </div>
                    </a>
                )
            })}

        </div>
    );
};

export default Main;