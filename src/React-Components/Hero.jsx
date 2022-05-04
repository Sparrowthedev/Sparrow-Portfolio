import React from 'react';
import styled from 'styled-components';
import { white, primaryColor, } from '../variables';
import Fade from 'react-reveal/Fade';


const Div = styled.div``
const Dot = styled.div``
const SecDiv = styled.div``
const ReactDiv = styled.div``
const MongoDiv = styled.div``
const NodeDiv = styled.div``
const Image = styled.img``
const ExpressDiv = styled.div``
const Row = styled.div``
const Col = styled.div``
const Main = styled.div``
const Button = styled.button``
const MainTitle = styled.h3``
const Para = styled.p``
const MainLink = styled.a``

const Section = styled.section`
    padding: 10rem 0 8rem 0;
    width: 100%;
    height: 100%;
    background: black;
    background-image: url(images/sparrow.jpeg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    overflow: hidden;

    ${Div} {

        ${Row}{

            ${Col}{

                ${Main}{

                    ${Button}{
                        margin-bottom: 2rem;
                    }

                    ${MainTitle}{
                        color: ${white};
                        font-size: 3rem;
                    }

                    ${Para}{
                        color: ${white};
                        font-weight: 200;
                        font-size: 1.1rem;
                    }
                }

            }
        }
    }

    ${SecDiv}{
        position relative;
        
        ${ExpressDiv}{
            width: 100px;
            height: 100px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #2b2b2b;
            position: absolute;
            right: 40%;
            top: -50px;

            ${Image}{
                object-fit: contain;
                border-radius: 50%;
            }
        }
        ${MongoDiv}{
            width: 100px;
            height: 100px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #2b2b2b;
            position: absolute;
            right: 5%;
            top: -300px;

            ${Image}{
                object-fit: contain;
                border-radius: 50%;
            }
        }
        ${ReactDiv}{
            width: 100px;
            height: 100px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #2b2b2b;
            position: absolute;
            top: -150px;
            right: 10px;

            ${Image}{
                object-fit: contain;
                border-radius: 50%;
            }
        }
        ${NodeDiv}{
            display: none;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #2b2b2b;
            position: absolute;
            right: 12%;
            top: -50%;

            ${Image}{
                object-fit: contain;
                border-radius: 50%;
            }
        }

        ${Dot}{
            width: 7px;
            height: 7px;
            background: ${primaryColor};
            border-radius: 50%;
            position: absolute;
            top: -350px;
            right: 50%;
        }
    }
`

const Hero = () => {
    return (
        <Section id='home'>
            <Div className='container'>
                <Row className='row align-items-center' id='maxheight'>
                    <Col className='col-lg-6'>
                        <Main>
                           <Fade top>
                           <Button className='btn btn-primary p-2'>Front-End Developer</Button>
                           </Fade>

                            <Fade left><MainTitle id='title'>Talk is cheap. show me the code</MainTitle></Fade>
                            <Fade right><Para>I design and code beautiful simple things, and i love what i do.</Para></Fade>

                            <Fade bottom><MainLink href='#'>Let's Chat</MainLink></Fade>
                        </Main>
                    </Col>
                </Row>
            </Div>

            <SecDiv className='sec-div'>
                <ExpressDiv>
                    <Image src='images/express.png' alt='express png' className='img-fluid' />
                </ExpressDiv>
                <MongoDiv>
                    <Image src='images/mongodb.png' alt='express png' className='img-fluid' />
                </MongoDiv>
                <ReactDiv>
                    <Image src='images/react.png' alt='express png' className='img-fluid' />
                </ReactDiv>
                <NodeDiv>
                    <Image src='images/nodejs.png' alt='express png' className='img-fluid' />
                </NodeDiv>
                <Dot></Dot>
            </SecDiv>
        </Section>
    )
}

export default Hero