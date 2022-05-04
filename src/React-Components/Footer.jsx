import { Twitter } from '@material-ui/icons'
import { LinkedIn } from '@material-ui/icons'
import { Email } from '@material-ui/icons'
import { GitHub } from '@material-ui/icons'
import { Copyright } from '@material-ui/icons'
import React from 'react';
import styled from 'styled-components'
import { primaryColor, white } from '../variables'

const Section = styled.div`
padding: 2rem 0;
 background: black;
`
const Div = styled.div``
const Copyrighticon = styled(Copyright)`
color: ${primaryColor};
`
const Githubicon = styled(GitHub)``
const LinkedInicon = styled(LinkedIn)``
const Twittericon = styled(Twitter)``
const Emailicon = styled(Email)``
const Row = styled.div``
const NameCol = styled.div`
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`
const NameDiv = styled.div``
const Name = styled.h1`
color: ${primaryColor};
`
const CopyrightCol = styled.div`
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`
const CopyrightDiv = styled.div`
color: ${white};
`
const SocialCol = styled.div`
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`
const SocialDiv = styled.div`
display: flex;
gap: 10px;
color: ${primaryColor};
`

const Footer = () => {
  return (
    <Section>
        <Div className='container'>
            <Row className='row align-items-center'>
                <NameCol className='col-lg-4 bg p-3'>
                    <NameDiv>
                    <Name>SparrowTheDev</Name>
                    </NameDiv>
                </NameCol>
                <CopyrightCol className='col-lg-4 p-3'>
                   <CopyrightDiv>
                   <Copyrighticon /> 2022 All Rights Reserved
                   </CopyrightDiv>
                </CopyrightCol>
                <SocialCol className='col-lg-4  p-3'>
                    <SocialDiv>
                    <Twittericon />
                    <Githubicon />
                    <LinkedInicon />
                    <Emailicon />
                    </SocialDiv>

                </SocialCol>
            </Row>
        </Div>
    </Section>
  )
}

export default Footer