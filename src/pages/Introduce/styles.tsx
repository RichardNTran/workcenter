import styled, { css } from 'styled-components';
import homePanelBackground from 'src/assets/images/introduce/home-panel-background.jpg';

export const IntroducePanel = styled.div`
  position: relative;
  margin-top: -55px;
  width: 100%;
  height: 100vh;
  background-image: url(${homePanelBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const IntroducePanelOverview = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.primary75};
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
      background-image: linear-gradient(to bottom,#191e28 0,#394458 100%);
    `}
`;

export const IntroduceOverviewImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  height: 160px;
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
  background: url('https://bs-uploads.toptal.io/blackfish-uploads/enterprise_page/content/quotes_section/background_file/background/2029/quotes_bg_2-abd3be0b83023b95592bf4b04fa4503a.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const IntroduceSlideContent = styled.div`
  margin: 0 auto;
  max-width: 1170px;
`;

export const IntroduceSlideItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 80px;
  height: 300px;
  background-color: initial;
`;

export const WorkStepIndex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius:  ${(props) => props.theme.radius.circle};
  background-color:  ${(props) => props.theme.colors.primary75};
  color: white;
`;

export const TalentTypeContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 20px;
  width: 60px;
  opacity: 0.5;
  transition: 0.3s;

  &:hover {
    opacity: 1;
  }

  ${(props) => props.actived &&
    css`
      opacity: 1;
    `}
`;

export const TalentTypeIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border: 1px solid white;
  border-radius:  ${(props) => props.theme.radius.circle};
  cursor: pointer;
`;
