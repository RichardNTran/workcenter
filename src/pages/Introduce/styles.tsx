import styled, { css } from 'styled-components';
import homePanelBackground from '../../assets/images/home/home-panel-background.jpg';

export const IntroducePanel = styled.div`
  position: relative;
  background-image: url(${homePanelBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: calc(100vh - 55px);
`;

export const IntroducePanelOverview = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const IntroducePanelContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 760px;
`;

export const IntroduceOverview = styled.div`
  display: flex;
  align-items: center;
  height: ${(props) => props.height};
  width: 100%;

  ${(props) => props.bgHighlight &&
    css`
      background-color: gray;
    `}
`;

export const IntroduceOverviewContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0 30px;
  max-width: 1170px;
`;

export const IntroduceSlide = styled.div`
  width: 100%;
  background-color: gray;
`;

export const IntroduceSlideContent = styled.div`
  margin: 0 auto;
  max-width: 1170px;
`;

export const IntroduceSlideItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 30px;
  height: 300px;
  background-color: initial;
`;

export const WorkStepIndex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border: 1px solid ${(props) => props.theme.colors.primaryBorder};
  border-radius:  ${(props) => props.theme.radius.circle};
`;

export const TalentTypeContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100px;
`;

export const TalentTypeIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border: 1px solid ${(props) => props.theme.colors.primaryBorder};
  border-radius:  ${(props) => props.theme.radius.circle};
  cursor: pointer;
`;
