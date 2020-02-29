import React, { FunctionComponent } from 'react';
import Slider from "react-slick";

import { Text } from '../../components/styles';
import TopTalent from './view/TopTalent';

import {
  INTRODUCE_OVERVIEW,
  INTRODUCE_SLIDE,
  INTRODUCE_WORK_STEP,
  INTRODUCE_BUILDING_TEAMS,
} from './constants';

import * as Style from './styles';

interface IIntroducePageProps {}

const IntroducePage:FunctionComponent<IIntroducePageProps> = () => {
  function renderIntroduceOverview() {
    return INTRODUCE_OVERVIEW.map((homeIntroduce, homeIntroduceIndex) => (
      <div className="col-md-4" key={`home-introduce-${homeIntroduceIndex}`}>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img src={homeIntroduce.image} alt=""/>
          <Text className="mt-2 mb-2" xl w6>{homeIntroduce.title}</Text>
          <Text center>{homeIntroduce.content}</Text>
        </div>
      </div>
    ))
  }

  function renderIntroduceSlide() {
    return INTRODUCE_SLIDE.map((homeSlide, homeSlideIndex) => (
      <div>
        <Style.IntroduceSlideItem key={`home-slide-${homeSlideIndex}`}>
          <Text className="mt-2 mb-2" xl white w3>{homeSlide.content}</Text>
          <Text xxl white w6>{homeSlide.author}</Text>
        </Style.IntroduceSlideItem>
      </div>
    ))
  }

  function renderWorkStep() {
    return INTRODUCE_WORK_STEP.map((workStep, workStepIndex) => (
      <div className="col-md-4" key={`work-step-${workStepIndex}`}>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Style.WorkStepIndex>
            <Text xxl subText>{workStepIndex + 1}</Text>
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
          <img src={buildingItem.image} alt=""/>
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
    slidesToScroll: 1
  };

  return (
    <>
      <Style.IntroducePanel>
        <Style.IntroducePanelOverview>
          <Style.IntroducePanelContent>
            <Text fontSize="48px" white w3>
              The World's Top Talent, On Demand
            </Text>
            <Text className="mt-4 mb-4" xl white w3>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </Text>
            <div className="d-flex">
              <button className="mr-2 btn btn-lg btn-info">Schedule a Call</button>
              <button className="ml-2 btn btn-lg btn-outline-info">Apply as Freelancer</button>
            </div>
          </Style.IntroducePanelContent>
        </Style.IntroducePanelOverview>
      </Style.IntroducePanel>
      <Style.IntroduceOverview height="500px">
        <Style.IntroduceOverviewContent>
          <Text fontSize="42px" headerText w3>
            High-Performance Teams, On Your Terms
          </Text>
          <Text className="mt-4 mb-4">Work with hand-selected talent, customized to fit your needs at scale.</Text>
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
          <Text className="mb-4" fontSize="42px" headerText w3>
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
          <Text className="mb-4" fontSize="42px" headerText w3>
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
