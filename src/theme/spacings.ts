import { px2rem } from '~/utils';
import { Spacings } from '~/utils/types';

export default {
  noneSpacing: '0',
  xSmallSpacing: px2rem(2),
  smallSpacing: px2rem(4),
  mediumSpacing: px2rem(8),
  largeSpacing: px2rem(16),
  xLargeSpacing: px2rem(24),
  xxLargeSpacing: px2rem(32),
  xxxLargeSpacing: px2rem(48),
  screenWidth: window.innerWidth,
  screenHeight: window.innerHeight,
} as Spacings;
