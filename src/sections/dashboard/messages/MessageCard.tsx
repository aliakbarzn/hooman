import { PlusIcon, QuarterCircleIcon } from '@/assets/icons';
import React from 'react';

type MessageCardPropTypes = {
  selected: boolean;
  name: string;
  date: string;
  time: string;
  content: string;
};

export default function MessageCard({
  selected,
  name,
  date,
  time,
  content,
}: MessageCardPropTypes) {
  return (
    <div
      className={`relative flex flex-col p-6 gap-y-6 rounded-2xl rounded-br-none border w-full ${
        selected ? 'border-primary' : 'border-grayC'
      }`}
    >
      {selected && (
        <span className="absolute -top-px -left-px text-primary">
          <QuarterCircleIcon />
        </span>
      )}
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-4">
          <h3>{name}</h3>
          <p className="text-blackC-light">
            Date: {date} {'  '} {time}
          </p>
        </div>
        <div className="text-blackC-light cursor-pointer">
          <PlusIcon />
        </div>
      </div>

      {/* Separator */}
      <div className="bg-primary w-full h-[1px]"></div>

      {/* Content */}
      <p className="text-blackC-light">{content}</p>
    </div>
  );
}
