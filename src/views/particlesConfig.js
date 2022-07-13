export const particlesOption = {
  fullScreen: false,
  fpsLimit: 60,
  interactivity: {
    detectsOn: "canvas",
    events: {
      onClick: { enable: true, mode: "attract" },
      onHover: {
        enable: false,
        mode: "attract",
        parallax: { enable: false, force: 60, smooth: 10 },
      },
      resize: true,
    },
    modes: {
      push: { quantity: 4 },
      attract: { distance: 200, duration: 0.4, factor: 5 },
    },
  },
  particles: {
    color: { value: "#fbd7b4" },
    links: {
      color: "#fbd7b4",
      distance: 150,
      enable: true,
      opacity: 0.4,
      width: 1,
    },
    move: {
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
      bounce: false,
      direction: "none",
      enable: true,
      outMode: "out",
      random: false,
      speed: 2,
      straight: false,
    },
    number: { density: { enable: true, area: 800 }, value: 80 },
    opacity: {
      animation: { enable: false, speed: 1, sync: false },
      value: 0.5,
    },
    shape: {
      character: {
        fill: false,
        font: "Verdana",
        style: "",
        value: "*",
        weight: "400",
      },
      image: {
        height: 100,
        replaceColor: true,
        src: "images/github.svg",
        width: 100,
      },
      polygon: { sides: 5 },
      stroke: { color: "000000", width: 0 },
      type: "circle",
    },
    size: {
      animation: {
        enable: false,
        speed: 40,
        sync: false,
        startValue: "random",
      },
      value: 5,
    },
  },
  detectRetina: true,
};
