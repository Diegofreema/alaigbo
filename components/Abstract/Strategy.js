import TitleText from '@/UI/Title';
import Words from '@/UI/Words';
import { strategyText } from '@/dummyText';
import React from 'react';
import Data from './Data';

const Strategy = () => {
  return (
    <Data
      data={strategyText}
      title={'Strategies Adopted to Achieve Our Vision and Mission:'}
    />
  );
};

export default Strategy;
