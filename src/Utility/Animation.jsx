export const FadeUp = (Delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: Delay,
        duration: 1,
      },
    },
  };
};



export const FadeLeft = (Delay) => {
  return {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: Delay,
        duration: 1,
      },
    },
  };
};



export const FadeRight = (Delay) => {
  return {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: Delay,
        duration: 1,
      },
    },
  };
};
