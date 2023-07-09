import React from 'react';
import Data from './Data';
import { investorText, numberedText } from '@/dummyText';

const Investors = () => {
  return (
    <div>
      <Data title={'To Our Valued Investors,'} data={investorText} />
      <div className="mt-8">
        <Data data={numberedText} />
      </div>
    </div>
  );
};

export default Investors;
