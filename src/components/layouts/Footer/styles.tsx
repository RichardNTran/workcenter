import styled, { css } from 'styled-components';
import vectorStrokeWhite from '../../../assets/vector-stroke-white.png';
import vectorStrokeGreen from '../../../assets/vector-stroke-green.png';

export const Footer = styled.div`
  position: relative;
  display: flex;
  height: 350px;
  width: 100%;
`;

export const FooterLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: calc(100% / 3 * 2);
  padding: 0 20px 0 135px;
  background-color: #5DAD90;
`;

export const FooterRight = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: calc(100% / 3);
  background-color: #85D28F;
  padding: 0 0 0 50px;
`;

export const CopyRight = styled.p`
  position: absolute;
  bottom: 15px;
  left: 50%;
  margin: 0;
  padding: 0;
  transform: translateX(-50%);
  font-size: 12px;
  line-height: 14px;
  color: rgba(255, 255, 255, 0.5);
`;

export const Logo = styled.div`
    height: 100%;
  & > div:first-child {
    display: flex;
    place-content: center;
    width: 150px;
    height: 40px;
    border-radius: 4px;
    border: 2px solid white;
    background-color: transparent;
    color: white;
    font-size: 23px;
    line-height: 26px;
    font-weight: 600;
    margin-bottom: 15px;
    margin-right: 40px;
    margin: 50px 40px 15px 0; 
  }

  & > div:last-child {
    display: flex;
    img {
      height: 18px;
      width: 18px;
      margin-right: 10px;
    }
  }
`;

export const Info = styled.div`
  height: 250px;
  width: 200px;
  padding-left: 25px;
  p {
    margin: 0 0 15px 0;
    padding: 0;
    color: white;
    font-size: 12px;
    line-height: 14px;
    &:first-child {
      margin-bottom: 20px;
      font-size: 18px;
      line-height: 21px;
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;

export const EmailForm = styled.div`
  p {
    font-size: 14px;
    line-height: 18px;
    color: #4d4d4d;
    font-weight: 600;
    margin: 0 0 10px 0;
  }
  input {
    width: 315px;
    margin: 0 0 10px 0;
    border: none;
    border-bottom: 1px solid #4D4D4D;
    background-color: transparent;

    &::placeholder {
      color: rgba(77, 77, 77, 0.7);
      font-size: 12px;
      line-height: 16px;
    }
  }
`;

export const ButtonShow = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  outline-offset: 0px;

  ${props =>
    props.showMore &&
    css`
      width: 120px;
      outline: 2px solid ${props => props.theme.colors.greenThird};
      background-color: ${props => props.theme.colors.white};

      &:before {
        color: ${props => props.theme.colors.greenSecond};
        content: 'Show more';
        font-size: 14px;
      }

      &:after {
        right: 10px;
        background-image: url(${vectorStrokeGreen});
      }
    `}

    ${props =>
      props.send &&
      css`
        width: 144px;
        outline: 2px solid white;
        background-color: #72BF8C;

        &:before {
          color: white;
          content: 'Send';
          font-size: 14px;
        }

        &:after {
          right: 10px;
          background-image: url(${vectorStrokeWhite});
        }
      `}
  
  &:after {
    position: absolute;
    height: 12px;
    width: 24px;
    content:'';
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }

  &:hover {
    outline-offset: -7.5px;
    &:after {
      right: -10px;
    }
  }
`;
