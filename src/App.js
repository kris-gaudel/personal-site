import ParticleBackground from './components/ParticleBackground';
import GetInTouch from './components/GetInTouch';

import styled from 'styled-components';

const Wrapper = styled.div`
    top: 0;
    left: 0;
    width: "100%";
    height: "100%";
`;

const App = () => {
  return (
    <div className='app'>
      <ParticleBackground />
      <Wrapper>
          <GetInTouch/>
      </Wrapper>
    </div>
  );
}

export default App;
