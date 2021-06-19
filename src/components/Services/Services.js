import React from 'react'
import {ServicesContainer, ServicesWrapper, ServicesIcon, ServicesH1, ServicesH2, ServicesP, ServicesCard} from './ServicesStyle'
import Icon1 from '../../images/destinations.svg'
import Icon2 from '../../images/global.svg'
import Icon3 from '../../images/wallet.svg'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Data analysis tools</ServicesH2>
                    <ServicesP>Track your financial journey with ease.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Virtual office</ServicesH2>
                    <ServicesP>Access our platform and services seamlessly online, 
                    from anywhere in the world.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>A team of experts</ServicesH2>
                    <ServicesP>Our experienced financial advisors and managers are ready for any challenge.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
            
    )
}

export default Services
