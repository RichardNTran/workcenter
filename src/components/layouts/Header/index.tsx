import React, { FunctionComponent } from 'react';

import { Text } from '../../styles';

import { HEADER_ITEMS } from './constants';

import * as Style from './styles';

interface IHeaderProps {}

const Header:FunctionComponent<IHeaderProps> = () => {
  function renderHeaderItem() {
    return HEADER_ITEMS.map((headerItem, headerItemIndex) => (
      <Text className="ml-4" lg white key={`header-item-${headerItemIndex}`}>
        {headerItem.title}
      </Text>
    ))
  }
  return (
    <Style.HeaderContainer>
      <Style.HeaderContent>
        <Text xxxl white>Logo Web</Text>
        <div className="d-flex align-items-center">
          {renderHeaderItem()}
          <Style.HeaderHighlightItem>
            <Text className="ml-4 p-2 border rounded" lg white>Schedule a Call</Text>
          </Style.HeaderHighlightItem>
        </div>
      </Style.HeaderContent>
    </Style.HeaderContainer>
  );
};

export default Header;
