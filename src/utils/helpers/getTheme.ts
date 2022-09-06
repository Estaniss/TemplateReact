import { get } from '~/modules';
import { ThemeType } from '~/utils/types';

const parseToNumber = (value: string): number => {
  const onlyNumbersAndDot = value
    ? value.replace(/[^\d.]|\.(?=.*\.)/g, '')
    : '';
  return Number(onlyNumbersAndDot);
};

export const getTheme =
  (themeProp: string, noUnits = false) =>
  ({ theme }: { theme: ThemeType }): string | number => {
    const themeValue = get(theme, themeProp) as string;
    return noUnits ? parseToNumber(themeValue) : themeValue;
  };
