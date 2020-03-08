import React, { FunctionComponent } from 'react';

import { Text } from '../../components/styles';

import { HOME_OVERVIEW } from './constants';

import * as Style from './styles';

interface IHomePageProps {}

const HomePage:FunctionComponent<IHomePageProps> = () => {
  function renderHomeOverview() {
    return HOME_OVERVIEW.map((honmOverview, honmOverviewIndex) => (
      <div className="col-md-4" key={`home-honm-${honmOverviewIndex}`}>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img src={honmOverview.image} alt=""/>
          <Text className="mt-2 mb-2" xl headerText>{honmOverview.title}</Text>
          <Text center>{honmOverview.content}</Text>
        </div>
      </div>
    ))
  }

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center pt-4 pb-4">
        <Text headerText xxxl center>
          Wellcome to the Toptal Application Process!
        </Text>
        <Text className="mt-2" lg center>
          We are a global network of top developers, designer, and business experts.
        </Text>
        <Text lg center>
          With Toptal, you'll build an amazing career, wherever you live.
        </Text>
      </div>
      <Style.HomeOverview>
        <Style.HomeOverviewContent>
          <Text headerText xxl center w6>
            Why Freelance Through Toptal?
          </Text>
          <div className="row mt-4">
            {renderHomeOverview()}
          </div>
        </Style.HomeOverviewContent>
      </Style.HomeOverview>
    </>
  );
};

export default HomePage;
