import React from 'react'
import {Button} from '../ButtonStyle';
import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img} from './InfoSectionStyle';


const InfoSection = ({lightBg, id, imgStart, topLine, lightText, heading,darkText,subtitle,buttonLabel,img,alt,primary,dark2,dark }) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{heading}</Heading>
                                <Subtitle darkText={darkText}>{subtitle}</Subtitle>
                                <BtnWrap>
                                    <Button to='home' 
                                        smooth={true} 
                                        duration={500} 
                                        spy={true} 
                                        exact="true" 
                                        offset={-80} 
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark ? 1 : 0}
                                        >
                                        
                                        {buttonLabel}
                                    </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>    
        </>
    )
}

export default InfoSection
