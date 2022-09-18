import styled from "styled-components";

import SocialButton from "../SocialButton";

import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileAlt } from "@fortawesome/free-solid-svg-icons";

import { smallTabletMQ } from "../../breakpoints";

import Gaudel_Kristofer_Resume_Aug_07_2022 from '../../assets/Gaudel_Kristofer_Resume_Sep_13_2022.pdf';


const CenterWrapper = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

const Header = styled.h1`
    color: #E1EBF5;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 50px;

    ${smallTabletMQ(`
        font-size: 35px;
  `)}
`;

const EducationText = styled.h2`
    color: #E2E6EB;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 40px;

    ${smallTabletMQ(`
        font-size: 20px;
  `)}
`;

const DescriptionText = styled.h3`
    color: #E2E6EB;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 20px;
    text-align: left;
    margin-bottom: 40px;

    ${smallTabletMQ(`
        font-size: 10px;
  `)}
`;

const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 12px;

    ${smallTabletMQ(`
        font-size: 10px;
    `)}
`;

const GetInTouch = () => {
    return (
        <>  
            <CenterWrapper>
                <Header> 
                    Hi there, <br/>
                    I'm Kris
                </Header>
                <EducationText>
                    CS/BBA @ UWaterloo and WLU
                </EducationText>
                <DescriptionText>
                I am a software developer in Toronto, Canada passionate about front-end and full-stack development. Feel free to reach out, I would love to chat!
                </DescriptionText>
                <ButtonsWrapper>
                    <SocialButton icon={faGithub} link="https://github.com/kris-gaudel" size="4x"/>
                    <SocialButton icon={faLinkedinIn} link="https://www.linkedin.com/in/kristofer-gaudel/" size="4x"/>
                    <SocialButton icon={faEnvelope} link="mailto:kgaudel@uwaterloo.ca" size="4x"/>
                    <SocialButton icon={faFileAlt} link={Gaudel_Kristofer_Resume_Aug_07_2022} size="4x"/>
                </ButtonsWrapper>
            </CenterWrapper>
        </>
    );
};

export default GetInTouch;