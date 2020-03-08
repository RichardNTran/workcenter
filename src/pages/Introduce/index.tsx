import React, { FunctionComponent } from 'react';
import Slider from "react-slick";
import { Button } from 'antd';

import history from 'src/config/history';

import CustomArrowSlick from 'src/components/CustomArrowSlick';
import { Text } from 'src/components/styles';
import TopTalent from './view/TopTalent';

import { RegisterPath } from 'src/constants/routerConstants';
import {
  INTRODUCE_OVERVIEW,
  INTRODUCE_SLIDE,
  INTRODUCE_WORK_STEP,
  INTRODUCE_BUILDING_TEAMS,
} from './constants';

import * as Style from './styles';

interface IIntroducePageProps { }

const IntroducePage: FunctionComponent<IIntroducePageProps> = () => {
  function renderIntroduceOverview() {
    return INTRODUCE_OVERVIEW.map((introduceOverview, introduceOverviewIndex) => (
      <div className="col-md-4" key={`introduce-overview-${introduceOverviewIndex}`}>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Style.IntroduceOverviewImage>
            <img src={introduceOverview.image} alt="" />
          </Style.IntroduceOverviewImage>
          <Text className="mt-2 mb-2" xl w6>{introduceOverview.title}</Text>
          <Text center>{introduceOverview.content}</Text>
        </div>
      </div>
    ))
  }

  function renderIntroduceSlide() {
    return INTRODUCE_SLIDE.map((introduceSlide, introduceSlideIndex) => (
      <div key={`introduce-slide-${introduceSlideIndex}`}>
        <Style.IntroduceSlideItem>
          <Text fontSize="96px" white w3>“</Text>
          <Text className="mt-2 mb-4" xl white w3>{introduceSlide.content}</Text>
          <Text xxl white w6>{introduceSlide.author}</Text>
        </Style.IntroduceSlideItem>
      </div>
    ))
  }

  function renderWorkStep() {
    return INTRODUCE_WORK_STEP.map((workStep, workStepIndex) => (
      <div className="col-md-4" key={`work-step-${workStepIndex}`}>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Style.WorkStepIndex>
            <Text xxl subText w3>{workStepIndex + 1}</Text>
          </Style.WorkStepIndex>
          <Text className="mt-4 mb-2" xl w6>{workStep.title}</Text>
          <Text center>{workStep.content}</Text>
        </div>
      </div>
    ))
  }

  function renderBuildingTeams() {
    return INTRODUCE_BUILDING_TEAMS.map((buildingItem, buildingIndex) => (
      <div className="col-md-4" key={`building-item-${buildingIndex}`}>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img src={buildingItem.image} alt="" />
          <Text className="mt-4" center>{buildingItem.content}</Text>
        </div>
      </div>
    ))
  }

  const slideSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomArrowSlick type="NEXT" onClick={(e) => e} />,
    prevArrow: <CustomArrowSlick type="PREV" onClick={(e) => e} />,
  };

  return (
    <>
      <Style.IntroducePanel>
        <Style.IntroducePanelOverview>
          <Style.IntroducePanelContent>
            <Text fontSize="48px" lineHeight="56px" white w3>
              The World's Top Talent, On Demand
            </Text>
            <Text className="mt-4 mb-4" width="600px" xl white w3 center>
              Wellcome to your elite talent network. Build high-performing teams with the talent you need, exactly when you need it.
            </Text>
            <div className="d-flex mt-4">
              <Button
                className="mr-2"
                type="primary"
                size="large"
                onClick={() => history.push(RegisterPath)}
              >
                Schedule a Call
              </Button>
              <Button 
                className="ml-2"
                ghost
                size="large"
                onClick={() => history.push(RegisterPath)}
              >
                Apply as Freelancer
              </Button>
            </div>
          </Style.IntroducePanelContent>
        </Style.IntroducePanelOverview>
      </Style.IntroducePanel>
      <Style.IntroduceOverview height="500px">
        <Style.IntroduceOverviewContent>
          <Text h1 headerText w3>
            High-Performance Teams, On Your Terms
          </Text>
          <Text className="mt-4 mb-4" lg>Work with hand-selected talent, customized to fit your needs at scale.</Text>
          <div className="row">
            {renderIntroduceOverview()}
          </div>
        </Style.IntroduceOverviewContent>
      </Style.IntroduceOverview>
      <Style.IntroduceSlide>
        <Style.IntroduceSlideContent>
          <Slider {...slideSettings}>
            {renderIntroduceSlide()}
          </Slider>
        </Style.IntroduceSlideContent>
      </Style.IntroduceSlide>
      <Style.IntroduceOverview height="500px">
        <Style.IntroduceOverviewContent>
          <Text className="mb-4" h1 headerText w3>
            How Toptal Work
          </Text>
          <div className="row mt-4">
            {renderWorkStep()}
          </div>
        </Style.IntroduceOverviewContent>
      </Style.IntroduceOverview>
      <TopTalent />
      <Style.IntroduceOverview height="500px">
        <Style.IntroduceOverviewContent>
          <Text className="mb-4" h1 headerText w3>
            Building Amazing Teams with On-Demand Telent
          </Text>
          <div className="row mt-4">
            {renderBuildingTeams()}
          </div>
        </Style.IntroduceOverviewContent>
      </Style.IntroduceOverview>
    </>
  );
};

export default IntroducePage;
