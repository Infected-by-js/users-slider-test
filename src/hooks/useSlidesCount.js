export const useSlidesCount = () => {
  if (window.innerWidth <= 578) {
    return 1;
  } else if (window.innerWidth > 578 && window.innerWidth < 1024) {
    return 2;
  } else if (window.innerWidth >= 1024 && window.innerWidth < 1440) {
    return 3;
  } else {
    return 4;
  }
};
