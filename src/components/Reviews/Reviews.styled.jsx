import styled from 'styled-components';
export const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
