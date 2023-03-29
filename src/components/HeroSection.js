import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container' HeroSection>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>my React JS</h1>
            <p>I am Guan-Min Lien</p>
            <div className='hero-btns'>
                <Button className='btns'
                    buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STARTED
                </Button>
                <Button className='btns' href="https://github.com/qwnim2"
                    buttonStyle='btn--primary' buttonSize='btn--large'>
                    My GitHub <i class="fa-brands fa-github"></i>
                </Button>


            </div>
        </div>
    )
}

export default HeroSection