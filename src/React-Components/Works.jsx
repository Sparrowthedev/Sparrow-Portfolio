import React from "react";
import styled from "styled-components";
import { primaryColor } from "../variables";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Roll from "react-reveal/Roll";

const Div = styled.div``;
const LiveDiv = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 10px;
`;

const LiveLink = styled.a`
text-decoration: none;
`;

const LiveInnerDiv = styled.div`
  cursor: pointer;
  display: flex;
  gap: 2px;
  border: 2px solid #08ea6d;
  padding: 5px;
  border-radius: 6px;
  align-items: center;
`;
const LivePara = styled.p`
  color: #fff;
  margin: 0;
  font-weight: bold;
  font-size: 13px;
`;
const ColFourDivSpan = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 10px;
  gap: 5px;
`;
const ImageThree = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transform: translateX(90px);
  transition: all 0.6s ease;
  border-top-left-radius: 10px;

  @media (max-width: 991px) {
    transform: none;
    border-top-left-radius: 0;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }
`;

const ColFourMainDiv = styled.div`
  background: Black;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  cursor: pointer;
  gap: 10px;
  border-radius: 10px;
  padding: 0;

  &:hover {
    ${ImageThree} {
      transform: scale(1.2);
    }
  }
`;
const ColFourTop = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0 2rem 0;
`;
const ColFourImageDiv = styled.div`
  flex: 2;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const BottomMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0 3rem 0;
  flex: 1;
`;
const BottomImageDiv = styled.div`
  flex: 2;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const TopTitle = styled.h2``;
const TopPara = styled.p``;
const Top = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-bottom: 2rem;
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  background: #282829;
  border-radius: 10px;
`;
const ImageOne = styled.img`
  width: 80%;
  height: 80%;
  object-fit: cover;
  transform: translateY(20px);
  transition: all 0.6s ease;
  border-bottom-right-radius: 10px;

  @media (max-width: 991px) {
    transform: none;
    width: 100%;
    height: 100%;
    border-top-right-radius: 0;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }
`;

const ColOneDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  cursor: pointer;
  gap: 10px;
  border-radius: 10px;
  padding: 0;

  &:hover {
    ${ImageOne} {
      transform: scale(1.2) translateY(0);
    }
  }
`;
const ImageTwo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 10px;
  transition: all 0.6s ease;
  transform: translateX(90px) translateY(50px) rotate(5deg);

  @media (max-width: 991px) {
    transform: none;
    border-top-left-radius: 0;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }
`;

const ColTwoDiv = styled.div`
background: #2c2b30;
display: flex;
flex-direction: column;
cursor-pointer;
width: 100%;
height: 100%;
gap: 10px;
border-radius: 10px;
padding: 0;

&:hover{

    ${ImageTwo}{
        transform: scale(1.2);
    }
}
`;
const ColTwoMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0 3rem 0;
  flex: 1;
`;
const ColTwoImageDiv = styled.div`
  flex: 2;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const ParaDiv = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const Row = styled.div``;
const Left = styled.div`
  background: #8a8787;
  paddind: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 100px;
  height: 20px;
`;
const Center = styled.div`
  background: #8a8787;
  paddind: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 100px;
  height: 20px;
`;
const Right = styled.div`
  background: #8a8787;
  paddind: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 100px;
  height: 20px;
`;

const TitleSec = styled.h2`
  color: #d6d6d6;
  margin: 0;
`;
const TitleSecMain = styled.h2`
  color: ${primaryColor};
`;
const ParaSec = styled.p`
  width: 70%;
  color: #d4d2d2;
`;
const DivSpan = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 10px;
  gap: 5px;
`;
const Link = styled.a`
  color: ${primaryColor};
`;

const ColFour = styled.div`
  background: ;
`;

const ColThree = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ColTwo = styled.div``;
const ColOne = styled.div`
     
${Row}{

   
`;

const Section = styled.div`
  padding: 5rem 0 0 0;
  width: 100%;
  height: 100%;
  background: #262525;
  overflow: hidden;
`;

const Works = () => {
  return (
    <Section id="works">
      <Div className="container">
        <Row className="row">
          <ColOne className="col-lg-6 col-md-6 mt-3">
            <Fade left>
              <ColOneDiv>
                <Top className="text-white">
                  <Roll right>
                    <TopTitle>Latest Works</TopTitle>
                    <TopPara>Perfect solutions for digital enterprise</TopPara>
                  </Roll>
                </Top>

                <Bottom>
                  <BottomMainDiv>
                    <LiveDiv>
                      <TitleSec>Invoice App</TitleSec>
                      <LiveLink href="https://invoice-app-nine-ashen.vercel.app/home" target="blank">
                        <LiveInnerDiv>
                          <LivePara>Live site </LivePara>
                          <svg
                            style={{
                              color: "#08ea6d",
                              width: "20px",
                              height: "20px",
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M13 9H21L11 24V15H4L13 0V9ZM11 11V7.22063L7.53238 13H13V17.3944L17.263 11H11Z"></path>
                          </svg>
                        </LiveInnerDiv>
                      </LiveLink>
                    </LiveDiv>

                    <DivSpan>
                      <Left>React</Left>
                      <Center>MongoDb</Center>
                      <Right>Nodejs</Right>
                      <Right>Expressjs</Right>
                    </DivSpan>
                  </BottomMainDiv>

                  <BottomImageDiv>
                    <ImageOne
                      src={`${process.env.PUBLIC_URL}/images/invoice.png`}
                      alt="franc png"
                      className="img-fluid"
                      id="image"
                    ></ImageOne>
                  </BottomImageDiv>
                </Bottom>
              </ColOneDiv>
            </Fade>
          </ColOne>
          <ColTwo className="col-lg-6 col-md-6  mt-3">
            <Fade right>
              <ColTwoDiv>
                <ColTwoMainDiv>
                <LiveDiv>
                      <TitleSec>Shortly</TitleSec>
                      <LiveLink href="https://sparrowthedev.github.io/Url-shortener/" target="blank">
                        <LiveInnerDiv>
                          <LivePara>Live site </LivePara>
                          <svg
                            style={{
                              color: "#08ea6d",
                              width: "20px",
                              height: "20px",
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M13 9H21L11 24V15H4L13 0V9ZM11 11V7.22063L7.53238 13H13V17.3944L17.263 11H11Z"></path>
                          </svg>
                        </LiveInnerDiv>
                      </LiveLink>
                    </LiveDiv>
                  <DivSpan>
                    <Left>Html</Left>
                    <Center>Css</Center>
                    <Right>Javascript</Right>
                  </DivSpan>
                </ColTwoMainDiv>

                <ColTwoImageDiv>
                  <ImageTwo
                    src={`${process.env.PUBLIC_URL}/images/shortly.png`}
                    className="img-fluid"
                    alt="tesla png"
                    id="image"
                  ></ImageTwo>
                </ColTwoImageDiv>
              </ColTwoDiv>
            </Fade>
          </ColTwo>
          <ColThree className="col-lg-6 col-md-6  mt-3">
            <Bounce>
              <ParaDiv>
                <ParaSec>
                  * Some project are not published due to NDA to see more,{" "}
                  <Link href="#">Contact</Link>
                </ParaSec>
              </ParaDiv>
            </Bounce>
          </ColThree>
          <ColFour className="col-lg-6 col-md-6  mt-3 mb-4">
            <Fade right>
              <ColFourMainDiv>
                <ColFourTop>
                <LiveDiv>
                      <TitleSec>Sparrow AI</TitleSec>
                      <LiveLink href="https://sparrowthedev.github.io/Sparrow-AI/" target="blank">
                        <LiveInnerDiv>
                          <LivePara>Live site </LivePara>
                          <svg
                            style={{
                              color: "#08ea6d",
                              width: "20px",
                              height: "20px",
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M13 9H21L11 24V15H4L13 0V9ZM11 11V7.22063L7.53238 13H13V17.3944L17.263 11H11Z"></path>
                          </svg>
                        </LiveInnerDiv>
                      </LiveLink>
                    </LiveDiv>

                  <ColFourDivSpan>
                    <Left>React</Left>
                    <Center>MongoDb</Center>
                    <Right>Nodejs</Right>
                    <Right>Expressjs</Right>
                  </ColFourDivSpan>
                </ColFourTop>

                <ColFourImageDiv>
                  <ImageThree
                    src={`${process.env.PUBLIC_URL}/images/sparrowai.png`}
                    alt="dark png"
                    className="img-fluid"
                    id="image"
                  ></ImageThree>
                </ColFourImageDiv>
              </ColFourMainDiv>
            </Fade>
          </ColFour>
        </Row>
      </Div>
    </Section>
  );
};

export default Works;
