var glide = new Glide("#intro", {
  type: "carousel",
  perView: 1,
  gap: 40,
  autoplay: 2000,
  hoverpause: false,
  animationDuration: 800,
  pagination: {
    el: ".glide__bullet",
  },
  arrows: {
    prev: ".slider-prev",
    next: ".slider-next",
  },
});
glide.mount();

var glide2 = new Glide("#intro2", {
  type: "carousel",
  hoverpause: false,
  perView: 2.5,
  animationDuration: 800,
  gap: 10,
  autoplay: 2000,
  pagination: {
    el: ".glide__bullet",
  },
  breakpoints: {
    767: {
      perView: 1,
    },
    1199: {
      perView: 2,
    },
    1600: {
      perView: 2,
    },
  },
  arrows: {
    prev: ".slider-prev",
    next: ".slider-next",
  },
});
glide2.mount();


new Glide('.glide4', {
  type: 'carousel',
  startAt: 0,
  perView: 3,
  focusAt: 'center',
  gap: 0,
  autoplay: 1000,
  hoverpause: true,
  animationDuration: 800,
  rewind: true,
  direction: 'ttb', // additional option to control the direction
  breakpoints: {
    768: {
      perView: 1
    }
  }
}).mount();




