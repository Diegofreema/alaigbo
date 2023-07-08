import Button from '@/UI/Button';
import EventNotification from '@/components/Events/EventNotification';
import EventTimer from '@/components/Events/EventTimer';
import Speakers from '@/components/Events/Speakers';
import React from 'react';

const Event = () => {
  return (
    <div className=" overflow-x-hidden">
      <EventNotification />
      <EventTimer />
      <Speakers />
    </div>
  );
};

export default Event;
