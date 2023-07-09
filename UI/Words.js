'use client';

import { Text } from '@mantine/core';
import React from 'react';

const Words = ({ text, i }) => {
  return (
    <Text
      fz={i === 0 ? 'lg' : 'md'}
      fw={i === 0 ? 600 : 400}
      fs={i === 0 ? 'italic' : 'normal'}
      mt={20}
    >
      {text}
    </Text>
  );
};

export default Words;
