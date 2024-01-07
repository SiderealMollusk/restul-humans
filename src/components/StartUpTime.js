"use client";
import React from 'react';

const dateString = process.env.SERVER_START_TIME;
const startTime = new Date(dateString).toLocaleTimeString();

const StartUpTime = () => {
  return <span>Startup Time: {startTime}</span>;
};

export default StartUpTime;