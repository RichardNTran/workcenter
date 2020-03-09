import React, { FunctionComponent, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Dropdown, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import history from 'src/config/history';

import { Text } from '../../styles';

import { HEADER_ITEMS } from './constants';
import {
  IntroducePath,
  HomePath,
  RegisterPath,
  ProfilePath,
} from 'src/constants/routerConstants';

import dropdownIcon from 'src/assets/images/header/dropdown-icon.png';

import * as Style from './styles';

interface IHeaderProps {
  isIntroduceHeader: Boolean,
}

const Header: FunctionComponent<IHeaderProps> = ({
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
      <Button className="ml-3" type="link" ghost size="large" key={`header-item-${headerItemIndex}`}>
        {headerItem.title}
      </Button>
    ))
  }

  function renderDropdowMenu() {
    return (
      <Menu>
        <Menu.Item>
          <Link to={ProfilePath} >
            Edit Profile
          </Link>
        </Menu.Item>
        <Menu.Item>
          Logout
        </Menu.Item>
      </Menu>
    )
  }

  return (
    <Style.HeaderContainer
      isTopHeader={isTopHeader && history.location.pathname === IntroducePath}
    >
      <Style.HeaderContent fullWidth={!isIntroduceHeader}>
        <Text xxxl white onClick={() => history.push(HomePath)}>Logo Web</Text>
        {isIntroduceHeader
          ? (
            <>
              <div className="d-flex align-items-center">
                {renderHeaderItem()}
                <Button className="ml-4" ghost size="large" onClick={() => history.push(RegisterPath)}>
                  Schedule a Call
                </Button>
              </div>
            </>
          )
          : (
            <>
              <div className="d-flex">
                <Style.UserName>
                  <Text lg white w3>User Name</Text>
                  <Dropdown overlay={renderDropdowMenu} placement="bottomRight">
                    <Button type="link" size="small">
                      <img src={dropdownIcon} width="16px" height="16px" alt="" />
                    </Button>
                  </Dropdown>
                </Style.UserName>
                <Style.UserAvatar>
                  <UserOutlined style={{ fontSize: '20px', color: '#fff' }} />
                </Style.UserAvatar>
              </div>
            </>
          )
        }
      </Style.HeaderContent>
    </Style.HeaderContainer>
  );
};

export default Header;
