import { get } from '~/modules';
import { ThemeType } from '~/utils/types';

export const up =
  (breakpoint: string, vertical = false) =>
  ({ theme }: { theme: ThemeType }): string => {
    const themeBreakpoint = get(theme, breakpoint) as string;
    return `@media (min-${
      vertical ? 'height' : 'width'
    }: calc(${themeBreakpoint} + 0.02px))`;
  };

export const down =
  (breakpoint: string, vertical = false) =>
  ({ theme }: { theme: ThemeType }): string => {
    const themeBreakpoint = get(theme, breakpoint) as string;
    return `@media (max-${vertical ? 'height' : 'width'}: ${themeBreakpoint})`;
  };

export const between =
  (breakpointMin: string, breakpointMax: string, vertical = false) =>
  ({ theme }: { theme: ThemeType }): string => {
    const themeBreakpointMin = get(theme, breakpointMin) as string;
    const themeBreakpointMax = get(theme, breakpointMax) as string;
    return `@media (max-${
      vertical ? 'height' : 'width'
    }: ${themeBreakpointMax}) and (min-${
      vertical ? 'height' : 'width'
    }: calc(${themeBreakpointMin} + 0.02px))`;
  };
