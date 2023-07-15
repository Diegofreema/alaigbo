'use client';

import InputComponent from '@/UI/InputComponent';
import { Slider, Text, Textarea } from '@mantine/core';
import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const maxLength = 500;
  return (
    <div className="h-screen flex items-center">
      <div className="w-1/2 mx-auto space-y-3">
        <InputComponent value={name} setValue={setName} label={'Your Name'} />
        <InputComponent
          value={email}
          setValue={setEmail}
          label={'Your Email'}
        />
        <Textarea
          minRows={6}
          maxLength={maxLength}
          label={'Message'}
          value={message}
          onChange={(event) => setMessage(event.currentTarget.value)}
          autosize
          styles={{ input: { border: '1px solid #DE5000' } }}
        />
        <div className="text-right">
          <Text>Max {maxLength} words</Text>
        </div>
      </div>
    </div>
  );
};

export default Contact;
