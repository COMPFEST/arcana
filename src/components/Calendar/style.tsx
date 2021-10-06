import { styled } from 'twin.macro';

export const CalendarWrapper = styled.div`
  .reactCalendar {
    width: 350px;
    max-width: 100%;
    background: white;
    line-height: 1.125em;
    pointer-events: none;
    font-size: 14px !important;
    color: #333 !important;
    border: none !important;
    font-family: 'Inter', sans-serif;
  }

  .reactCalendar > div[class='react-calendar__navigation'] {
    justify-content: center;
  }

  .reactCalendar
    > div[class='react-calendar__navigation']
    > button[class*='react-calendar__navigation__arrow'] {
    font-weight: 900;
  }

  .reactCalendar
    > div[class='react-calendar__navigation']
    > button[class*='react-calendar__navigation__prev2-button'],
  .reactCalendar
    > div[class='react-calendar__navigation']
    > button[class*='react-calendar__navigation__next2-button'] {
    display: none;
  }

  .reactCalendar
    > div[class='react-calendar__navigation']
    > button[class='react-calendar__navigation__label'] {
    min-width: 125px !important;
    font-weight: 700;
    line-height: 15px;
  }

  .reactCalendar > div:nth-child(2) > div[class='react-calendar__month-view'] {
    margin-top: -15px;
  }

  .reactCalendar > div:nth-child(2) > div[class='react-calendar__century-view'],
  .reactCalendar > div:nth-child(2) > div[class='react-calendar__year-view'],
  .reactCalendar > div:nth-child(2) > div[class='react-calendar__decade-view'] {
    margin-top: -12px;
  }

  .reactCalendar
    > div:nth-child(2)
    > div[class='react-calendar__year-view']
    > div[class='react-calendar__year-view__months']
    > button,
  .reactCalendar
    > div:nth-child(2)
    > div[class='react-calendar__century-view']
    > div[class='react-calendar__century-view__decades']
    > button,
  .reactCalendar
    > div:nth-child(2)
    > div[class='react-calendar__decade-view']
    > div[class='react-calendar__decade-view__years']
    > button {
    height: 40px !important;
    padding: 25px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* label Min */
  .reactCalendar
    > div:nth-child(2)
    > div:first-child
    > div:first-child
    > div:first-child
    > div[class='react-calendar__month-view__weekdays']
    > div:nth-child(7n) {
    color: #e9202a;
  }

  .reactCalendar
    > div:nth-child(2)
    > div:first-child
    > div:first-child
    > div:first-child
    > div[class='react-calendar__month-view__weekdays']
    > div[class='react-calendar__month-view__weekdays__weekday']
    > abbr[title='Monday'],
  .reactCalendar
    > div:nth-child(2)
    > div:first-child
    > div:first-child
    > div:first-child
    > div[class='react-calendar__month-view__weekdays']
    > div[class='react-calendar__month-view__weekdays__weekday']
    > abbr[title='Tuesday'],
  .reactCalendar
    > div:nth-child(2)
    > div:first-child
    > div:first-child
    > div:first-child
    > div[class='react-calendar__month-view__weekdays']
    > div[class='react-calendar__month-view__weekdays__weekday']
    > abbr[title='Wednesday'],
  .reactCalendar
    > div:nth-child(2)
    > div:first-child
    > div:first-child
    > div:first-child
    > div[class='react-calendar__month-view__weekdays']
    > div[class='react-calendar__month-view__weekdays__weekday']
    > abbr[title='Thursday'],
  .reactCalendar
    > div:nth-child(2)
    > div:first-child
    > div:first-child
    > div:first-child
    > div[class='react-calendar__month-view__weekdays']
    > div[class='react-calendar__month-view__weekdays__weekday']
    > abbr[title='Friday'],
  .reactCalendar
    > div:nth-child(2)
    > div:first-child
    > div:first-child
    > div:first-child
    > div[class='react-calendar__month-view__weekdays']
    > div[class='react-calendar__month-view__weekdays__weekday']
    > abbr[title='Saturday'],
  .reactCalendar
    > div:nth-child(2)
    > div:first-child
    > div:first-child
    > div:first-child
    > div[class='react-calendar__month-view__weekdays']
    > div[class='react-calendar__month-view__weekdays__weekday']
    > abbr[title='Sunday'] {
    visibility: hidden;
    position: relative;
  }

  .reactCalendar
    > div:nth-child(2)
    > div:first-child
    > div:first-child
    > div:first-child
    > div[class='react-calendar__month-view__weekdays']
    > div[class='react-calendar__month-view__weekdays__weekday']
    > abbr[title='Monday']:after {
    visibility: visible;
    position: absolute;
    top: 0;
    left: 0;
    content: 'Sen';
  }
  .reactCalendar
    > div:nth-child(2)
    > div:first-child
    > div:first-child
    > div:first-child
    > div[class='react-calendar__month-view__weekdays']
    > div[class='react-calendar__month-view__weekdays__weekday']
    > abbr[title='Tuesday']:after {
    visibility: visible;
    position: absolute;
    top: 0;
    left: 0;
    content: 'Sel';
  }
  .reactCalendar
    > div:nth-child(2)
    > div:first-child
    > div:first-child
    > div:first-child
    > div[class='react-calendar__month-view__weekdays']
    > div[class='react-calendar__month-view__weekdays__weekday']
    > abbr[title='Wednesday']:after {
    visibility: visible;
    position: absolute;
    top: 0;
    left: 0;
    content: 'Rab';
  }
  .reactCalendar
    > div:nth-child(2)
    > div:first-child
    > div:first-child
    > div:first-child
    > div[class='react-calendar__month-view__weekdays']
    > div[class='react-calendar__month-view__weekdays__weekday']
    > abbr[title='Thursday']:after {
    visibility: visible;
    position: absolute;
    top: 0;
    left: 0;
    content: 'Kam';
  }
  .reactCalendar
    > div:nth-child(2)
    > div:first-child
    > div:first-child
    > div:first-child
    > div[class='react-calendar__month-view__weekdays']
    > div[class='react-calendar__month-view__weekdays__weekday']
    > abbr[title='Friday']:after {
    visibility: visible;
    position: absolute;
    top: 0;
    left: 0;
    content: 'Jum';
  }
  .reactCalendar
    > div:nth-child(2)
    > div:first-child
    > div:first-child
    > div:first-child
    > div[class='react-calendar__month-view__weekdays']
    > div[class='react-calendar__month-view__weekdays__weekday']
    > abbr[title='Saturday']:after {
    visibility: visible;
    position: absolute;
    top: 0;
    left: 0;
    content: 'Sab';
  }
  .reactCalendar
    > div:nth-child(2)
    > div:first-child
    > div:first-child
    > div:first-child
    > div[class='react-calendar__month-view__weekdays']
    > div[class='react-calendar__month-view__weekdays__weekday']
    > abbr[title='Sunday']:after {
    visibility: visible;
    position: absolute;
    top: 0;
    left: 0;
    content: 'Min';
  }

  .reactCalendar
    > div:nth-child(2)
    > div:first-child
    > div:first-child
    > div:first-child
    > div[class='react-calendar__month-view__weekdays']
    > div
    > abbr {
    border: none !important;
    text-decoration: none !important;
    font-weight: 800;
  }

  .reactCalendar
    > div:nth-child(2)
    > div:first-child
    > div:first-child
    > div:first-child
    > div[class='react-calendar__month-view__days']
    > button[class*='react-calendar__tile'] {
    color: black;
    width: 35px;
    height: 35px;
    text-align: center;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: red; */
  }

  .reactCalendar
    > div:nth-child(2)
    > div:first-child
    > div:first-child
    > div:first-child
    > div[class='react-calendar__month-view__days']
    > button[class*='react-calendar__tile']:nth-child(7n) {
    color: #e9202a;
  }

  .reactCalendar
    > div:nth-child(2)
    > div:first-child
    > div:first-child
    > div:first-child
    > div[class='react-calendar__month-view__days']
    > button[class*='react-calendar__tile']:enabled:hover,
  .reactCalendar
    > div:nth-child(2)
    > div:first-child
    > div:first-child
    > div:first-child
    > div[class='react-calendar__month-view__days']
    > button[class*='react-calendar__tile']:enabled:focus {
    background-color: #d4d4d4;
    border-radius: 50%;
  }

  .reactCalendar
    > div:nth-child(2)
    > div:first-child
    > div:first-child
    > div:first-child
    > div[class='react-calendar__month-view__days']
    > button[class*='react-calendar__tile--now'] {
    background: #e6e6e6 !important;
    border-radius: 50%;
  }

  .reactCalendar
    > div:nth-child(2)
    > div:first-child
    > div:first-child
    > div:first-child
    > div[class='react-calendar__month-view__days']
    > button[class*='react-calendar__tile--active']:enabled:hover,
  .reactCalendar
    > div:nth-child(2)
    > div:first-child
    > div:first-child
    > div:first-child
    > div[class='react-calendar__month-view__days']
    > button[class*='react-calendar__tile--active']:enabled:focus {
    background: #d4d4d4;
    border-radius: 50%;
  }

  .reactCalendar
    > div:nth-child(2)
    > div:first-child
    > div:first-child
    > div:first-child
    > div[class='react-calendar__month-view__days']
    > button[class*='react-calendar__tile--now']:enabled:hover,
  .reactCalendar
    > div:nth-child(2)
    > div:first-child
    > div:first-child
    > div:first-child
    > div[class='react-calendar__month-view__days']
    > button[class*='react-calendar__tile--now']:enabled:focus {
    background: #c2c1c8;
  }

  .reactCalendar
    > div:nth-child(2)
    > div:first-child
    > div:first-child
    > div:first-child
    > div[class='react-calendar__month-view__days']
    > button[class*='react-calendar__tile--active'] {
    background: white;
    border-radius: 50%;
  }

  .reactCalendar > div[class='react-calendar__navigation'],
  .reactCalendar > div:nth-child(2) > div[class='react-calendar__century-view'],
  .reactCalendar > div:nth-child(2) > div[class='react-calendar__decade-view'],
  .reactCalendar > div:nth-child(2) > div[class='react-calendar__year-view'],
  .reactCalendar
    > div:nth-child(2)
    > div:first-child
    > div:first-child
    > div:first-child
    > div[class='react-calendar__month-view__days']
    > button[class*='react-calendar__tile']
    > abbr {
    pointer-events: all !important;
  }

  .reactCalendar
    > div:nth-child(2)
    > div:first-child
    > div:first-child
    > button[class*='react-calendar__tile--hasActive'] {
    background: #e6e6e6;
  }

  .reactCalendar
    > div:nth-child(2)
    > div:first-child
    > div:first-child
    > button[class*='react-calendar__tile--now'] {
    background: #c2c1c8;
  }

  .reactCalendar
    > div:nth-child(2)
    > div:first-child
    > div:first-child
    > div:first-child
    > div[class='react-calendar__month-view__days']
    > button[class*='react-calendar__tile']
    > abbr[class*='event_cf'] {
    background: linear-gradient(
      44.65deg,
      #ed1c7d 1.8%,
      #cd33d5 50.9%,
      #5824fe 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
