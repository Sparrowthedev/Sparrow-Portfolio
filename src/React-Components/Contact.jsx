import React, { useRef } from "react";
import { useState } from "react";
import styled from "styled-components";
import { primaryColor } from "../variables";

const Div = styled.div``;
const SpanTwo = styled.span`
  color: ${primaryColor};
  padding: 1rem;
  text-align: center;
`;
const Left = styled.div`
  width: 20px;
  height: 100%;
  background: ${primaryColor};
  position: absolute;

  @media (max-width: 600px) {
    display: none;
  }
`;
const FirstRow = styled.div``;
const SecondRow = styled.div``;
const FirstCol = styled.div`
  @media (max-width: 991px) {
    display: none;
  }
`;
const SecondCol = styled.div``;
const FormDiv = styled.div``;
const FormMainDiv = styled.div``;
const HeadingThree = styled.h2``;
const Form = styled.form``;
const FormInput = styled.input``;
const TextArea = styled.textarea``;
const FormCusDiv = styled.div``;
const FormButton = styled.button``;
const ContactDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 50%;
  padding-left: 10px;
  margin-top: 20px;
`;
const HeadingTwo = styled.h3`
  font-size: 25px;
`;
const Span = styled.span`
  font-size: 25px;
  color: ${primaryColor};
  margin-left: 7px;
`;
const ParaTwo = styled.p`
  display: flex;
  align-items: center;
`;
const ParaOne = styled.h4`
  font-size: 20px;
`;
const HeadingOne = styled.h1``;
const Section = styled.div`
  padding: 4rem 0;
  background: #262525;
  position: relative;
  overflow: hidden;
`;

const Contact = () => {
  const [done, setDone] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Create an instance of FormData to collect data from the form
    const formData = new FormData(form.current);

    // Prepare the data to be sent in the POST request
    const dataToSend = {
      user_name: formData.get("user_name"),
      user_subject: formData.get("user_subject"),
      user_email: formData.get("user_email"),
      message: formData.get("message"),
    };

    // Sending data to the server
    fetch("http://localhost:5000/apiv1/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setDone(true);

        form.current.reset(); // Clear the form fields

        // Reset done state after 5 seconds
        setTimeout(() => {
          setDone(false);
        }, 2500);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Section id="contact">
      <Left></Left>
      <Div className="container text-white">
        <FirstRow className="row text-center">
          <HeadingOne>Get In Touch</HeadingOne>
        </FirstRow>

        <SecondRow className="row">
          <FirstCol className="col-12 col-lg-6 p-3">
            <ContactDiv className="">
              <HeadingTwo>Let's Make Something Amazing Together</HeadingTwo>
              <ParaOne>100% Satisfaction Guaranteed</ParaOne>
              <ParaTwo>
                You can start by saying <Span>hi!</Span>
              </ParaTwo>
            </ContactDiv>
          </FirstCol>
          <SecondCol className="col-12 col-lg-6  p-3">
            <FormMainDiv className="w-100 pb-2">
              <HeadingThree className="mb-5 text-center">
                Start your project
              </HeadingThree>
              <Form ref={form} onSubmit={sendEmail} className="row">
                <FormDiv className="mb-3 col-lg-12 col-md-6">
                  <FormInput
                    type="text"
                    placeholder="Name"
                    name="user_name"
                    id="inputFirstName"
                    className="form-control shadow form-control-lg"
                    required
                  />
                </FormDiv>
                <FormDiv className="mb-3 col-lg-12 col-md-6">
                  <FormInput
                    type="text"
                    placeholder="Subject"
                    name="user_subject"
                    id="inputLastName"
                    className="form-control shadow form-control-lg"
                    required
                  />
                </FormDiv>
                <FormDiv className="mb-3 col-lg-12">
                  <FormInput
                    type="email"
                    placeholder="Email Address"
                    name="user_email"
                    className="form-control shadow form-control-lg"
                    required
                  />
                </FormDiv>
                <FormDiv className="mb-3 col-lg-12">
                  <TextArea
                    name="message"
                    id="message"
                    placeholder="Message"
                    rows="8"
                    className="form-control shadow form-control-lg"
                    required
                  ></TextArea>
                </FormDiv>

                <FormCusDiv className="text-center col-12 d-grid mt-1">
                  <FormButton
                    type="button submit"
                    value="Send"
                    className="btn btn-primary pt-3 pb-3"
                  >
                    Submit
                  </FormButton>
                  {done && (
                    <SpanTwo>
                      Thank you for messaging i'll get back to you soon!!
                    </SpanTwo>
                  )}
                </FormCusDiv>
              </Form>
            </FormMainDiv>
          </SecondCol>
        </SecondRow>
      </Div>
    </Section>
  );
};

export default Contact;
