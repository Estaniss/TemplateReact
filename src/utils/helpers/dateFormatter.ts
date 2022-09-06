import { DateManager } from '~/modules';

const ISO_DATE = 'YYYY-MM-DDTHH:mm:ss';
const SCREEN_DATE = 'DD/MM/YYYY';
const SHORT_DATE = 'DD/MM/YYYY';
const LONG_DATE = 'D [de] MMMM';
const HOUR_MINUTE = 'HH:mm';

export const formatToScreenDate = (date: string): string =>
  DateManager.fromFormat(date, ISO_DATE).toFormat(SCREEN_DATE);

export const formatScreenDateToISO = (date: string): string =>
  DateManager.fromFormat(date, SHORT_DATE).toFormat(ISO_DATE);

export const formatShortDate = (date: Date): string =>
  DateManager.fromJSDate(date).toFormat(SHORT_DATE);

export const formatLongDate = (date: Date): string =>
  DateManager.fromJSDate(date).toFormat(LONG_DATE);

export const formatHourMinuteDate = (date: Date): string =>
  DateManager.fromJSDate(date).toFormat(HOUR_MINUTE);
