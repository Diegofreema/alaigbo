import Button from '@/components/Button';
import EventNotification from '@/components/Events/EventNotification';
import EventTimer from '@/components/Events/EventTimer';
import Speakers from '@/components/Events/Speakers';
import React from 'react';

const Event = () => {
  return (
    <div className="">
      <EventNotification />
      <EventTimer />
      <Speakers />
    </div>
  );
};

export default Event;
