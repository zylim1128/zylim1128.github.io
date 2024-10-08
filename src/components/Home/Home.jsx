import React from 'react';
import Data from "./Data";
import ScrollDown from './ScrollDown';
import Contact from '../Contact/Contact';
import "./home.css";

const Home = () => {
  return (
    <section className="home section" id="home">
        {/*<p>Website is currently under construction!</p>*/}
        <div className="home_container container grid">
            <div className="home__content grid">
                <Contact />

                <div className="home__img"></div>

                <Data />
            </div>
            <ScrollDown />
        </div>
    </section>
  )
}

export default Home