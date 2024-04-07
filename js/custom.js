var glide = new Glide("#intro", {
  type: "carousel",
  perView: 1,
  gap: 40,
  autoplay: 2000,
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
  perView: 2.5,
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
