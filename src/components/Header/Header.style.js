import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  background-color: rgb(123, 104, 238);
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem 0;

  h1 {
    color: #fff;
  }
  div {
    display: flex;
    justify-content: center;
    gap: 0.6rem;
  }
  h2 {
    max-width: 190px;
    max-height: 40px;
    margin-bottom: 5px;
    padding: 0.3rem 0.5rem;
    background: rgba(255, 255, 100, 0.17);
    border-radius: 8px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.1px);
    -webkit-backdrop-filter: blur(5.1px);
    border: 1px solid rgba(255, 255, 255, 0.69);
  }

  @media (max-width: 800px) {
    h1,
    h2 {
      font-size: clamp(1rem, 4vw, 1.5rem);
    }

    div {
      flex-direction: column;
      gap: 0.3rem;
    }
  }
`;
