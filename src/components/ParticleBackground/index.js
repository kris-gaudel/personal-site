import Particles from 'react-tsparticles';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: fixed;
    width: 100%;
`;

const ParticleBackground = () => {
    return (
        <>
        <Wrapper>
        <Particles
            options={{
                background: {
                    color: "#6091C2",
                },
                fpsLimit: 60,
                interactivity: {
                    detectsOn: "window",
                    events: {
                        resize: true,
                        onHover: {
                            enable: true,
                            mode: ["repulse", "connect"],
                        }
                    },
                },
                particles: {
                    links:{
                        enable: true,
                        distance: 80,
                        warp: true,
                    },
                    color: {
                        value: "#ACCDF0"
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1080,
                        },
                        limit: 0,
                        value: 100,
                    },
                    opacity: {
                        animation: {
                            enable: true,
                            minimumValue: 0.06,
                            speed: 1,
                            sync: false,
                        },
                        random: {
                            enable: true,
                            minimumValue: 0.05,
                        },
                        value: 1,
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: "top",
                        random: true,
                        straight: true,
                        out_mode: "out",
                    },
                    shape: {
                        type: "circle",
                        size: {
                            random: {
                                enable: true,
                                minimumValue: 0.5,
                            },
                            value: 1,
                        }
                    },
                },
            }}
            width="100wh"
            height="100vh"
        />
        </Wrapper>
        </>
    );
}

export default ParticleBackground;