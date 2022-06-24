import styled from 'styled-components';

export const CardWrapper = styled.div`
  cursor: pointer;
  border: 0.5rem solid;
  border-image: linear-gradient(to right, #3f5efb, #fc466b) 1;
  border-radius: 16px;
  img {
    height: 200px;
    display: block;
  }

  p {
    text-align: center;
    padding: 0;
    margin: 0;
    background-color: #fff;
  }
`;
