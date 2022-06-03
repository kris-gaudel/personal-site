import Particles from 'react-tsparticles';
import styled from 'styled-components';
import particlesOptions from '../../particles.json';

const Wrapper = styled.div`
    position: fixed;
    overflow-x: hidden;
    width: 100%;
`;

const ParticleBackground = () => {
    return (
        <>
        <Wrapper>
            <Particles
                options={particlesOptions}
                width="100wh"
                height="100vh"
            />
        </Wrapper>
        </>
    );
}

export default ParticleBackground;