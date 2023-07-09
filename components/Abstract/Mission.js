'use client';
import { missionText } from '@/dummyText';
import React from 'react';
import Data from './Data';

const Mission = () => {
  return <Data data={missionText} title={'Our Mission'} />;
};

export default Mission;
