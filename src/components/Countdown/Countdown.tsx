import React, { useState, useEffect, useRef } from 'react';
import { animate } from 'framer-motion';
import tw from 'twin.macro';

export type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const getDigits = (endDate: Date): TimeLeft => {
  const delta = Math.floor((endDate.getTime() - Date.now()) / 1000);
  const days = Math.floor(delta / 86400);
  const hourDivisor = delta % 86400;

  const hours = Math.floor(hourDivisor / 3600);
  const minuteDivisor = hourDivisor % 3600;

  const minutes = Math.floor(minuteDivisor / 60);
  const seconds = minuteDivisor % 60;

  return {
    days,
    hours,
    minutes,
    seconds,
  };
};

const Digit: React.FC<{
  digit: number;
  title: string;
  initDuration?: number;
  animated?: boolean;
}> = ({ digit, title, initDuration, animated }) => {
  const nodeRef = useRef<HTMLParagraphElement>(null);
  const [initial, setInitial] = useState(0);

  useEffect(() => {
    const node = nodeRef.current;
    const controls = animate(initial, digit, {
      duration: animated && digit != 59 ? initDuration : 0,
      ease: 'easeInOut',
      onUpdate(value: number) {
        if (node) node.textContent = Math.floor(value).toLocaleString('id-ID');
      },
    });

    setInitial(digit);
    return () => controls.stop();
  }, [digit]);

  return (
    <div tw="mx-4 font-extrabold text-center bg-gray-100 p-4 rounded-lg">
      <p tw="text-4xl" ref={nodeRef} />
      <p>{title}</p>
    </div>
  );
};

export interface CountdownProps {
  endDate: Date;
  initDuration?: number;
  animated?: boolean;
  title: string;
  digits: {
    seconds: boolean;
    minutes: boolean;
    hours: boolean;
    days: boolean;
  };
}

const Countdown: React.FC<CountdownProps> = ({
  endDate,
  initDuration,
  animated,
  title,
  digits = { seconds: true, minutes: true, hours: true },
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setTimeLeft(getDigits(endDate));
    const timer = setInterval(() => {
      const k = getDigits(endDate);
      if (k.seconds < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft(k);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div tw="flex flex-col justify-center items-center select-none">
      <h2 tw="uppercase font-semibold text-center mb-2 font-bold -mr-2 tracking-superwide">
        {title}
      </h2>
      <div tw="flex justify-center items-center">
        {digits.days && (
          <Digit
            digit={timeLeft.days}
            initDuration={initDuration}
            title="Hari"
            animated={animated}
          />
        )}
        {digits.hours && (
          <Digit
            digit={timeLeft.hours}
            initDuration={initDuration}
            title="Jam"
            animated={animated}
          />
        )}
        {digits.minutes && (
          <Digit
            digit={timeLeft.minutes}
            initDuration={initDuration}
            title="Menit"
            animated={animated}
          />
        )}
        {digits.seconds && (
          <Digit
            digit={timeLeft.seconds}
            initDuration={initDuration}
            title="Detik"
            animated={animated}
          />
        )}
      </div>
    </div>
  );
};

export default Countdown;
