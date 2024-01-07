"use client"; // This is a client component
import React, { useEffect, useState } from 'react';

const StartUpTime = () => {
  const [startupTime, setStartupTime] = useState('...');

  useEffect(() => {
    const fetchStartupTime = async () => {
      try {
        const response = await fetch('/api/ServerStartTime');
        if (!response.ok) {
          throw new Error('Failed to fetch startup time');
        }
        const data = await response.json();
        setStartupTime(data.startupTime);
      } catch (error) {
        console.error(error);
        setStartupTime('???');
      }
    };

    fetchStartupTime();
  }, []);

  return <span>Startup Time: {startupTime}</span>;
};

export default StartUpTime;