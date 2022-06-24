import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  background-color: papayawhip;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem 0;

  h2 {
    background-color: skyblue;
    margin-bottom: 5px;
    padding: 0.3rem 0.5rem;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    h1,
    h2 {
      font-size: clamp(1rem, 4vw, 2rem);
    }
  }
`;
