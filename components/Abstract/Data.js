'use client';
import TitleText from '@/UI/Title';
import Words from '@/UI/Words';
import React from 'react';

const Data = ({ data, title }) => {
  return (
    <div>
      {title && <TitleText text={title} />}
      <div>
        {data.map((text, i) => (
          <Words text={text} key={i} i={i} />
        ))}
      </div>
    </div>
  );
};

export default Data;
