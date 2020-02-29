import React, { Component } from 'react';

import facebookIcon from '../../../assets/facebook-icon.svg';
import twitterIcon from '../../../assets/twitter-icon.svg';
import instagramIcon from '../../../assets/instagram-icon.svg';

import * as Style from './styles';

class Footer extends Component<{}> {
  render() {
    return (
      <Style.Footer>
        <Style.FooterLeft>
          <Style.Logo>
            <div>Logo</div>
            <div>
              <img src={facebookIcon} alt='' />
              <img src={twitterIcon} alt='' />
              <img src={instagramIcon} alt='' />
            </div>
          </Style.Logo>
          <Style.Info>
            <p>Learn More</p>
            <p>Link</p>
            <p>Link</p>
            <p>Link</p>
            <p>Link</p>
            <p>Link</p>
            <p>Link</p>
          </Style.Info>
          <Style.Info>
            <p>Learn More</p>
            <p>Link</p>
            <p>Link</p>
            <p>Link</p>
            <p>Link</p>
            <p>Link</p>
            <p>Link</p>
          </Style.Info>
          <Style.Info>
            <p>Learn More</p>
            <p>Link</p>
            <p>Link</p>
            <p>Link</p>
            <p>Link</p>
            <p>Link</p>
            <p>Link</p>
          </Style.Info>
        </Style.FooterLeft>
        <Style.FooterRight>
          <Style.EmailForm>
            <p>RECEIVE EMAIL UPDATES</p>
            <input placeholder='Your email address' />
            <Style.ButtonShow send />
          </Style.EmailForm>
        </Style.FooterRight>
        <Style.CopyRight>
          Copyright © 2019, Design Team
          </Style.CopyRight>
      </Style.Footer>
    );
  }
};

export default Footer;
