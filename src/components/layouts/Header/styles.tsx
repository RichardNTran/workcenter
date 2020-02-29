import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: fixed;
  width: 100vw;
  background-color: rgb(25,30,40); /* #191E28 */
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  z-index: 99;
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
`;

export const HeaderHighlightItem = styled.div`
`;
