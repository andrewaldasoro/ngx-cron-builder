export type WeekDay =
  | 'Sunday'
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday';

export type Months =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export default class Utils {
  static WEEKDAYS: WeekDay[] = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  static MONTHS: Months[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  static minmaxOnInput(event: any) {
    const max = parseInt(event.target.max);
    const min = parseInt(event.target.min);
    const value = parseInt(event.target.value);

    if (isNaN(value)) {
      event.target.value = null;
      return;
    }
    if (value > max) {
      event.target.value = max;
      return;
    }
    if (value < min) {
      event.target.value = min;
      return;
    }

    event.target.value = value;
  }

  static timeOnInput(event: any) {
    const max = parseInt(event.target.max);
    const min = parseInt(event.target.min);
    const value = parseInt(event.target.value);

    if (isNaN(value)) {
      event.target.value = addZeroIsOneDigit(min);
      return;
    }
    if (value > max) {
      event.target.value = addZeroIsOneDigit(max);
      return;
    }
    if (value < min) {
      event.target.value = addZeroIsOneDigit(min);
      return;
    }

    event.target.value = addZeroIsOneDigit(value);

    function addZeroIsOneDigit(v: number) {
      return v.toString().padStart(2, '0');
    }
  }

  static greaterThanOne(value: string) {
    return parseInt(value) > 1;
  }

  static getSelectedDays(selected?: WeekDay[]) {
    if (selected) {
      if (selected?.length === 2) {
        if (selected.includes('Sunday') && selected.includes('Saturday')) {
          return 'Weekends';
        }
      }

      if (selected?.length === 5) {
        if (
          selected.includes('Monday') &&
          selected.includes('Tuesday') &&
          selected.includes('Wednesday') &&
          selected.includes('Thursday') &&
          selected.includes('Friday')
        ) {
          return 'Workdays';
        }
      }

      if (selected?.length === 7) {
        return 'Everyday';
      }

      if (selected?.length > 3) {
        return selected.map((day) => day[0]);
      }

      if (selected?.length > 1) {
        return selected.map((day) => day.substring(0, 3));
      }
    }

    return selected;
  }
}
