'use client';
import TitleText from '@/UI/Title';
import Title from '@/UI/Title';
import Words from '@/UI/Words';
import { texts } from '@/dummyText';
import { Text } from '@mantine/core';
import React from 'react';
import Data from './Data';

const Identity = () => {
  return (
    <div className="we mt-16">
      <Data data={texts} title={'Who We Are'} />
    </div>
  );
};

export default Identity;
