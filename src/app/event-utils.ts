import { EventInput } from '@fullcalendar/core';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: TODAY_STR,
  },
  {
    id: createEventId(),
    title: 'Changes in Dashboard',
    start: TODAY_STR,
  },
  {
    id: createEventId(),
    title: 'Last Event:- Work on navbar',
    start: TODAY_STR,
  }, {
    id: createEventId(),
    title: 'All-day event',
    start: TODAY_STR,
  },
  {
    id: createEventId(),
    title: 'Changes in Dashboard',
    start: TODAY_STR,
  },
  {
    id: createEventId(),
    title: 'Last Event:- Work on navbar',
    start: TODAY_STR,
  },
];

export function createEventId() {
  return String(eventGuid++);
}
