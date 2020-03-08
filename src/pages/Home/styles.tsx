import styled from 'styled-components';

export const HomeContainer = styled.div`
`;

export const HomeSlideContent = styled.div`
  margin: 0 auto;
  max-width: 1170px;
`;

export const HomeOverview = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${(props) => props.height};
  background-color: ${(props) => props.theme.colors.primaryBackground};;
`;

export const HomeOverviewContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  padding: 0 20px;
  max-width: 1170px;
`;
