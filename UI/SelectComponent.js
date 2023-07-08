import { Select } from '@mantine/core';
import React from 'react';

const SelectComponent = ({ data, label, setValue, value }) => {
  return (
    <Select
      className="outline-none !focus:outline-none"
      label={label}
      value={value}
      onChange={setValue}
      data={data}
    />
  );
};

export default SelectComponent;
