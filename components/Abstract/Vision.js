'use client';
import TitleText from '@/UI/Title';
import Words from '@/UI/Words';
import { visionText } from '@/dummyText';
import { Text } from '@mantine/core';
import React from 'react';
import Data from './Data';

const Vision = () => {
  return <Data data={visionText} title={'Our Vision'} />;
};

export default Vision;
