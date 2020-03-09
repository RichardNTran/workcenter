import styled, { css } from 'styled-components';

export const CustomArrowIcon = styled.div`
  z-index: 97;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  cursor: pointer;

  ${(props) => props.type === 'PREV' && css`
    left: 15px;
  `}
  ${(props) => props.type === 'NEXT' && css`
    right: 15px;
  `}
`;
