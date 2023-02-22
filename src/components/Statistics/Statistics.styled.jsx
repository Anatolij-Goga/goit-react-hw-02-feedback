import styled from '@emotion/styled';

const StatisticsContainer = styled.ul`
  background-color: #2196f3;
  margin: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  color: #ffffff;
  font-weight: bold;
`;

const StatisticsItem = styled.li`
  margin-bottom: 5px;
  font-size: 16px;

  &:last-child {
    margin-bottom: 0px;
  }
`;

export { StatisticsContainer, StatisticsItem };
