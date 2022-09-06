import { get } from '~/modules';
import { ThemeType } from '~/utils/types';

type Param = ({ theme }: { theme: ThemeType }) => string | number;

export const isDarkTheme =
  (truthy: Param, falsy: Param | null = null) =>
  ({ theme }: { theme: ThemeType }): Param | null => {
    const themeType = get(theme, 'type');
    return themeType === 'dark' ? truthy : falsy;
  };
