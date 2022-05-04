import React from 'react';
import styled from 'styled-components';
import { Testimonials } from '../data';
import { primaryColor, white } from '../variables';
import StarIcon from '@material-ui/icons/Star';
import Fade from 'react-reveal/Fade';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';


const Section = styled.div`
padding: 3rem 0 2rem 0;
background: #4a4b4d;
height: 100%;
width: 100%;
overflow: hidden;
`
const Div = styled.div``
const Quoteicon = styled(FormatQuoteIcon)`
color: ${primaryColor};
`
const Staricon = styled(StarIcon)`
color: ${primaryColor};
`
const Right = styled.div`
display: flex;
align: center;
justify-content: space-between;
flex: 2;

@media (max-width: 368px) {
    display: flex;
    flex-direction: column;
    align-items: center;
}
`
const FirstRow = styled.div``
const FirstCol = styled.div``
const SecondRow = styled.div``
const SecondCol = styled.div`

`
const Card = styled.div`
position: relative;
background: #262525;
width: 100%;
width: 100%;
border-radius: 10px;
padding: 20px;
margin: 10px 0;
cursor: pointer;
display: flex;
flex-direction: column;
gap: 10px;
transition: all 0.3s ease; 

@media (max-width: 368px){
    margin: 25px 0;
}

&:hover{
    transform: translateY(-8px);
}
`
const Center = styled.div`

@media (max-width: 368px) {
    display: flex;
    flex-direction: column;
    align-items: center;
}
`
const Name = styled.div`
color: #fff;
font-weight: 600;
`
const Handle = styled.p`
color:  #d4d2d2;
font-weight: 300;
`
const Ratings = styled.div`

`
const Bottom = styled.div`
flex: 2;
`
const Desc = styled.div`
color:  #d4d2d2;
font-weight: 400;

@media (max-width: 368px){
    text-align: center;
}
`
const ImageDiv = styled.div`
height: 50px;
width: 50px;
overflow: hidden;
border-radius: 50%;
margin-right: 10px;

@media (max-width: 368px){
    position: absolute;
    top: -30px;
    border: 2px solid ${primaryColor}; 
}
`
const Image = styled.img`
width: 100%;
height: 100%;
content-fit: cover;
object-position: center;
`
const Top = styled.div`
display: flex;
align-items: center;

@media (max-width: 368px) {
    display: flex;
    flex-direction: column;
    align-items: center;
}
`
const Title = styled.h1`
color: ${white};
`
const Para = styled.p`
color:  #d4d2d2;
`

const Testimonial = () => {
    return (
        <Section id='testimonials'>
            <Div className='container'>
                <FirstRow className='row'>
                    <FirstCol className='col-lg-12 text-center'>
                        <Title>Testimonials</Title>
                        <Para>What client's say about me</Para>
                    </FirstCol>
                </FirstRow>
                <SecondRow className='row'>

                    {Testimonials.map((item, index) => {
                        return <SecondCol className='col-lg-6 align-items-center justify-content-center'>
                            <Fade>
                            <Card>
                                <Top >
                                    <ImageDiv>
                                        <Image src={item.img} alt={item.alt} />
                                    </ImageDiv>

                                    <Right>

                                        <Center>
                                            <Name>{item.userName}</Name>
                                            <Handle>{item.userHandle}</Handle>
                                        </Center>

                                        <Ratings>
                                            <Staricon />
                                            <Staricon />
                                            <Staricon />
                                            <Staricon />
                                            <Staricon />
                                        </Ratings>
                                    </Right>
                                </Top>
                                <Bottom>
                                    <Desc> <Quoteicon />{item.Desc} <Quoteicon /></Desc>
                                </Bottom>
                            </Card>
                            </Fade>
                        </SecondCol>
                     })}
                </SecondRow>
            </Div>
        </Section>
    )
}

export default Testimonial;