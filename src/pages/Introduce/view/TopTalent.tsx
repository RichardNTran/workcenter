import React, { FunctionComponent, useState } from 'react';

import { Text } from '../../../components/styles';

import { TALENT_DATA } from '../constants';

import * as Style from '../styles';

interface ITopTalentProps {}

const TopTalent:FunctionComponent<ITopTalentProps> = () => {
  const [talentTypeActived, setTalentTypeActived] = useState(0);
  function renderTalentTypes() {
    return TALENT_DATA.map((talentType, talentTypeIndex) => (
      <Style.TalentTypeContent key={`talent-type-${talentTypeIndex}`}>
        <Style.TalentTypeIcon onClick={() => setTalentTypeActived(talentTypeIndex)}>
          <img src={talentType.icon} alt=""/>
        </Style.TalentTypeIcon>
        <Text className="mt-1" sm white w3 center width="70px">{talentType.title}</Text>
      </Style.TalentTypeContent>
    ))
  }

  function renderTopTalents() {
    return TALENT_DATA[talentTypeActived].talent.map((talentItem, talentIndex) => (
      <div className="col-md-4" key={`talent-item-${talentIndex}`}>
        <div className="card w-100 border-0 rounded-0">
          <img src={talentItem.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{talentItem.name}</h5>
            <p className="card-text">{talentItem.about}</p>
          </div>
        </div>
      </div>
    ))
  }

  return (
    <Style.IntroduceOverview height="850px" bgHighlight>
      <Style.IntroduceOverviewContent>
        <Text className="mb-4" fontSize="42px" white w3>
          Building Amazing Teams with On-Demand Telent
        </Text>
        <div className="d-flex mt-4">
          {renderTalentTypes()}
        </div>
        <div className="row mt-4 w-100">
          {renderTopTalents()}
        </div>
      </Style.IntroduceOverviewContent>
    </Style.IntroduceOverview>
  );
};

export default TopTalent;
