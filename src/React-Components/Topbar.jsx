import React from 'react';
import styled from 'styled-components';
import CodeIcon from '@material-ui/icons/Code';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import { primaryColor, secondaryColor, white } from '../variables';
import { useWindowScrollPositions } from '../useWindowScrollPositions'

const Container = styled.div``
const Logo = styled.a``
const Div = styled.div``
const Ul = styled.ul``
const Li = styled.li``
const Link = styled.a``
const ImgDiv = styled.div``
const EmailDiv = styled.div``
const Codeicon = styled(CodeIcon)``
const Twittericon = styled(TwitterIcon)``
const Githubicon = styled(GitHubIcon)``
const Emailicon = styled(EmailIcon)``
const Title = styled.h1``
const Button = styled.button``
const Span = styled.span``


const Nav = styled.nav`

  ${Container}{

    ${Button}{
        width: 40px;
        height: 25px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
        border: none;
        background-color: transparent;

        @media (min-width: 991px){
            display:none;
        }
        


        ${Span}{
           transition: all 0.8s ease;
           transform-origin: right;
            &:nth-child(1), :nth-child(3){
                width: 80%;
                height: 3px;
                transform: translateX(6px);
                background-color: ${primaryColor};
            }
            &:nth-child(2){
                width: 100%;
                height: 3px;
                background-color: ${primaryColor};
            }

        }

        &.active{
           
            ${Span}{

                &:nth-child(1){
                    transform: rotate(-45deg);
                }
                &:nth-child(2){
                    opacity: 0;
                }
                &:nth-child(3){
                    transform: rotate(45deg);
                }
            }
        }
    }

    ${Logo}{
        margin-right: 40px;

        ${ImgDiv}{
            display: flex;
            align-items: center;            

            ${Codeicon}{
                color: ${primaryColor};
                font-size: 50px;

                @media (max-width: 576px){
                    font-size: 25px;
                }
            }

            ${Title}{
                color: ${white};
                font-size: 20px;
                align-self: center;
                padding-top: 8px;

                @media (max-width: 576px){
                    font-size: 15px;
                }
            }
        }
    }

    ${Div}{

        ${Ul}{


            ${EmailDiv}{
                width: 40px;
                height: 40px;
                background: rgb(42, 42, 42);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;

                @media (max-width: 576px){
                    display: none;
                }
                &:hover{
                    background: ${primaryColor};

                    ${Emailicon}{
                        color: ${secondaryColor};
                    }
                }

                ${Emailicon}{
                    color: ${primaryColor};

                }

            }


            ${Li}{
                &.border{
                    border-bottom: 2px solid ${primaryColor};
                }
            
                ${Link}{
                    display: flex;
                    align-items: center;
                    text-transform: capitalize;
                 
                    &:hover{
                        color: ${primaryColor} !Important;

                        ${Twittericon}{
                            color: ${primaryColor} !Important;
                        }
                        ${Githubicon}{
                            color: ${primaryColor} !Important;
                        }
                    }
                ${Twittericon}{
                    color: ${white};
                    margin-right: 10px;

                }
                ${Githubicon}{
                    color: ${white};
                    margin-right: 10px;
                }

                }
            }
        }
    }
  }
`


const Topbar = ({ setMenuOpen, menuOpen }) => {
    const { scrollY } = useWindowScrollPositions()
    return (
        <Nav className={`${scrollY > 508 ? "navbar navbar-expand-lg navbar-light fixed-top bg-secondary" : 'navbar navbar-expand-lg navbar-light bg-dark'}`}>
            <Container className="container">
                <Logo className="navbar-brand" href="#home">
                    <ImgDiv>
                        <Codeicon />
                        <Title>SparrowTheDev</Title>
                    </ImgDiv>
                </Logo>

                <Button className={`${menuOpen ? 'active' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" onClick={() =>setMenuOpen(!menuOpen)}>
                    <Span ></Span>
                    <Span ></Span>
                    <Span ></Span>
                </Button>

                <Div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <Ul className="navbar-nav">
                        <Li className="nav-item">
                            <Link className="nav-link" aria-current="page" href="#home">Home</Link>
                        </Li>
                        <Li className="nav-item">
                            <Link className="nav-link" href="#services">Services</Link>
                        </Li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#more" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                               More
                            </a>
                            <ul class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#works">Works</a></li>
                                <li><a class="dropdown-item" href="#testimonials">Testimonials</a></li>
                                <li><a class="dropdown-item" href="#contact">Get In Touch</a></li>
                            </ul>
                        </li>
                    </Ul>
                    <Ul className="navbar-nav sec-nav">
                        <Li className="nav-item">
                            <Link className="nav-link" aria-current="page" href="#home"><Twittericon />Twitter</Link>
                        </Li>
                        <Li className="nav-item">
                            <Link className="nav-link" href="#services"> <Githubicon />Github</Link>
                        </Li>

                        <EmailDiv className='shadow-lg'>
                            <Emailicon />
                        </EmailDiv>
                    </Ul>
                </Div>
            </Container>
        </Nav>

    )
}

export default Topbar