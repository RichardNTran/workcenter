import React, { FunctionComponent, useState, useEffect } from 'react';

import history from '../../../util/history';

import { Text } from '../../styles';

import { HEADER_ITEMS } from './constants';
import { IntroducePath } from '../../../constants/routerConstants';

import * as Style from './styles';

interface IHeaderProps {
  isIntroduceHeader: Boolean,
}

const Header:FunctionComponent<IHeaderProps> = ({
  isIntroduceHeader
}) => {
  const [isTopHeader, setIsTopHeader] = useState<Boolean>(true);

  useEffect(() => {
    function listenScrollEvent() {
      setIsTopHeader(window.scrollY < 55);
    }
    if (history.location.pathname === IntroducePath) {
      window.addEventListener('scroll', listenScrollEvent);
    }
    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);


  function renderHeaderItem() {
    return HEADER_ITEMS.map((headerItem, headerItemIndex) => (
      <Text className="ml-4" lg white key={`header-item-${headerItemIndex}`}>
        {headerItem.title}
      </Text>
    ))
  }

  return (
    <Style.HeaderContainer
      isTopHeader={isTopHeader && history.location.pathname === IntroducePath}
    >
      <Style.HeaderContent fullWidth={!isIntroduceHeader}>
        {isIntroduceHeader
          ? (
            <>
              <Text xxxl white>Logo Web</Text>
              <div className="d-flex align-items-center">
                {renderHeaderItem()}
                <div className="ml-4 p-2 border rounded">
                  <Text lg white>Schedule a Call</Text>
                </div>
              </div>
            </>
          )
          : (
            <>
              <Text className="ml-4" xxxl white>Logo Web</Text>
              <div className="d-flex">
                <Style.UserName />
                <Style.UserAvatar />
              </div>
            </>
          )
        }
      </Style.HeaderContent>
    </Style.HeaderContainer>
  );
};

export default Header;
