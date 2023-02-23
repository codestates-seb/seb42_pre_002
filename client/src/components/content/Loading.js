import styled from 'styled-components';

import loadingImg from '../../esset/loading.gif';

const Wrapper = styled.div`
  width: 100%;
  height: 98vh;
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    width: 5%;
  }
`;

const Loading = () => {
  return (
    <Wrapper>
      <img src={loadingImg} alt="loading" />
    </Wrapper>
  );
};

export default Loading;
