import React, { FunctionComponent } from 'react';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';

import * as Style from './styles';

interface ICustomArrowSlickProps {
  type: String,
  onClick: Function,
}

const CustomArrowSlick: FunctionComponent<ICustomArrowSlickProps> = ({
  type,
  onClick,
}) => (
  <Style.CustomArrowIcon type={type} onClick={onClick}>
    {type === 'NEXT'
      ? <RightOutlined style={{ fontSize: '28px', color: '#fff' }} />
      : <LeftOutlined style={{ fontSize: '28px', color: '#fff' }} />
    }
  </Style.CustomArrowIcon>
);

export default CustomArrowSlick;
