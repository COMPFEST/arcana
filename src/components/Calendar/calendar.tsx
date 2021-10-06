import React, { useState, MouseEvent } from 'react';
import Calendar from 'react-calendar';
import { CalendarWrapper } from './style';
import 'react-calendar/dist/Calendar.css';
import tw from 'twin.macro';
import {
  compareDateEquals,
  dateToStringEN,
  dateToStringID,
} from './utils/funcs';
import { useMousePosition } from './utils/hooks';

export interface Data {
  id: number;
  name: string;
  event_start: string;
}

export interface MyCalendarProps {
  data: Data[];
}

const CalendarComponent: React.FC<MyCalendarProps> = ({ data = [] }) => {
  const [value, setValue] = useState(new Date());
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const [dataPopUp, setDataPopUp] = useState<any>([]);
  const { x, y } = useMousePosition();
  const dataDateString = data.map((d) =>
    dateToStringEN(new Date(d.event_start))
  );
  const onMouseEnter = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    const dateEN = (e.target as HTMLDivElement).getAttribute('aria-label');

    if (!dateEN) return;

    try {
      const realDate = new Date(dateEN);

      const filteredEvents = data.filter((d) =>
        compareDateEquals(new Date(d.event_start), realDate)
      );

      setDataPopUp([...filteredEvents]);

      realDate && setShowPopUp(true);
    } catch (err) {
      throw new Error('Tanggal tidak sesuai format');
    }
  };

  const onChange = (nextValue: Date): void => {
    setValue(nextValue);
  };

  dataDateString.forEach((dateEN) => {
    const el = document.querySelectorAll(`[aria-label="${dateEN}"]`);
    el.forEach((v) => (v.className = 'event_cf'));
  });

  return (
    <CalendarWrapper
      tw="font-sans pointer-events-none font-bold px-3 lg:px-2 xl:px-7 relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={() => setShowPopUp(false)}
    >
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <Calendar
        onChange={onChange}
        value={value}
        locale="en"
        className="reactCalendar"
      />
      {showPopUp && dataPopUp.length > 0 && (
        <div
          css={[
            tw`absolute bg-white shadow-lg p-2.5 rounded-lg font-sans text-xs`,
            { top: y, left: x },
          ]}
        >
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore */}
          {dataPopUp.map((d) => (
            <div tw="mb-4" key={d.name}>
              <h2 tw="font-bold leading-4 mb-1">
                {dateToStringID(new Date(d.event_start))}
              </h2>
              <p tw="font-normal leading-5">{d.name}</p>
            </div>
          ))}
        </div>
      )}
    </CalendarWrapper>
  );
};

export default CalendarComponent;
