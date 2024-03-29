const guidelineBaseWidth = 360;
const guidelineBaseHeight = 640;

export const scale = (size: number): number =>
  (window.innerWidth / guidelineBaseWidth) * size;

export const verticalScale = (size: number): number =>
  (window.innerHeight / guidelineBaseHeight) * size;

export const moderateScale = (size: number, factor = 0.5): number =>
  size + (scale(size) - size) * factor;

export const px2rem = (pixels: number, baseline = 16): string => {
  return `${pixels / baseline}rem`;
};

export const px2vw = (size: number, width = 1440): string =>
  `${(size / width) * 100}vw`;
