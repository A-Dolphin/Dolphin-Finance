import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroSectionStyle';
import {Button} from '../ButtonStyle';

const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }
    
    return (
        <HeroContainer id="home">
            <HeroBg>
               <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Discover your financial freedom.</HeroH1>
                <HeroP>
                    Independent guidance and strategy to create opportunities for your wealth.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="about" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                        Get started {hover ? <ArrowForward/> : <ArrowRight/> }
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
