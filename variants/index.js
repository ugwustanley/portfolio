export const navVariant = (delay) => {
  return {
    hidden: {
      background: null,
    },
    exit: {
      background: null,
      transition: {
        duration: 0.3,
        delay: 0,
        ease: "easeInOut",
      },
    },
    visible: {
      background: "#0a192f",
      //'#0a192f' '#e29d07',
      transition: {
        duration: 0.3,
        delay: delay + 0.3,
        ease: "easeInOut",
      },
    },
  };
};

export const partVariant = (delay) => {
  return {
    hidden: {
      y: "-100vh",
    },
    exit: {
      y: "-100vh",
      transition: {
        duration: 0.3,
        delay: delay + 0.6,
        ease: "easeInOut",
      },
    },
    visible: {
      y: 0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

export const navLinkVariant = (delay) => {
  return {
    hidden: {
      x: "-30",
      opacity: 0,
    },
    exit: {
      x: -30,
      opacity: 0,
      transition: {
        duration: 0.3,
        delay: delay - 0.6,
        ease: "easeInOut",
      },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

export const navSocialVariant = (delay) => {
  return {
    hidden: {
      y: 50,
      opacity: 0,
      //   skewY: -5,
    },
    exit: {
      y: 50,
      opacity: 0,
      skewY: -5,
      transition: {
        duration: 0.6,
        delay: 0.7,
        ease: "easeInOut",
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      // skewY:0,
      transition: {
        duration: 0.6,
        delay: delay + 0.3,
        ease: "easeInOut",
      },
    },
  };
};

export const helloVariant = () => {
  return {
    hidden: {
      rotate: 0,
    },
    visible: {
      rotate: [25, 0, 25, 0, 0, 0, 0],
      transition: {
        duration: 1,
        delay: 0,
        ease: "easeOut",
        yoyo: Infinity,
      },
    },
  };
}
export const projectVariant = () => {
  return {
    hidden: {
      y: 150,
      opacity: 0.5,
    },

    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 0.1,
        ease: "easeOut",
      },
    },
  };
};

export const imageVariant = () => {
  return {
    hidden: {
      scale: 1.3,
    },

    visible: {
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.8,
        ease: "easeOut",
      },
    },
  };
};



export const loaderVariant = () => {
  return {
    hidden: { 
         pathLength: 0,
         strokeWidth: 1,
         fill:'#0a192f',
 },

    visible: {
      pathLength: 1,
      fill:['#0a192f', '#0a192f' ,  "#e6f1ff"],
      strokeWidth: 1,
      transition: {
        duration: 5,
        ease: "easeOut",
      },
    },
  };
};


