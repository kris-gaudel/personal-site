import ParticleBackground from './components/ParticleBackground';
import GetInTouch from './components/GetInTouch';

import styled from 'styled-components';

const Wrapper = styled.div`
  overflow-x: hidden;
`;

const AppWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
`;

const App = () => {
  return (
    <AppWrapper>
      <ParticleBackground />
        <Wrapper>
            <GetInTouch/>
        </Wrapper>
    </AppWrapper>
  );
}

export default App;
