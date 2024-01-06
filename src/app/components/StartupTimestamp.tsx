"use client"; // This is a client component
import dynamic from 'next/dynamic'

import React, { useEffect, useState } from 'react';

const StartupDateTime = () => {
  const [startupTime, setStartupTime] = useState('...');

  useEffect(() => {
    const fetchStartupTime = async () => {
      try {
        const response = await fetch('/api/startup-time');
        if (!response.ok) {
          throw new Error('Failed to fetch startup time');
        }
        const data = await response.json();
        setStartupTime(data.startupTime);
      } catch (error) {
        console.error(error);
        setStartupTime('null');
      }
    };

    fetchStartupTime();
  }, []);

  return (
    <div>
      <p>Startup Time: {startupTime}</p>
      {startupTime !== '...' && (
        <p>Startup Date: {startupTime !== 'null' ? new Date(startupTime).toLocaleDateString() : 'null'}</p>
      )}
    </div>
  );
};

export default StartupDateTime;