import {
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    eachDayOfInterval,
  } from "date-fns";
  
  export function getCalendarMonth(month: Date): Date[] {
    const monthStart = startOfMonth(month);
    const monthEnd = endOfMonth(month);
  
    const calendarStart = startOfWeek(monthStart, { weekStartsOn: 0 }); // Sunday
    const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 0 });
  
    return eachDayOfInterval({
      start: calendarStart,
      end: calendarEnd,
    });
  }
  