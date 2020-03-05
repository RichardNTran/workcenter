import styled, { css } from 'styled-components';

export const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  background-color: #204ecf;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  z-index: 99;

  ${(props) => props.isTopHeader
    && css`
      background-color: initial;
      box-shadow: none;
      color: white;
    `}
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 30px;
  max-width: 1170px;
  width: 100%;
  height: 55px;

  ${(props) => props.fullWidth
    && css`
      padding: 0;
      max-width: 100%;
    `}
`;

export const UserAvatar = styled.div`
  width: 55px;
  height: 55px;
  background-color: #0e2971;
`;

export const UserName = styled.div`
  width: 200px;
  height: 55px;
  background-color: #193ea4;
`;
