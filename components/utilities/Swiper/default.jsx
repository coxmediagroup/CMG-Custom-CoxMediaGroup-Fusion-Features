import SwiperConstructor from 'swiper';

const Swiper = (props) => {
  const {
    identifier, slidesPerView, slidesPerGroup, spaceBetween, autoplay, loop, pagination, navigation, delay,
  } = props;

  console.log('autoplay: ', autoplay);

  const swiperOptions = {
    slidesPerView,
    slidesPerGroup,
    spaceBetween,
    loop,
  };

  if (autoplay) {
    swiperOptions.autoplay = {
      delay: delay * 1000,
      disableOnInteraction: true,
    };
  }

  if (pagination) {
    swiperOptions.pagination = {
      el: `${identifier} .swiper-pagination`,
      clickable: true,
      renderBullet(index, className) {
        return `<span class="${className}"></span>`;
      },
    };
  }

  if (navigation) {
    swiperOptions.navigation = {
      nextEl: `${identifier} .swiper-button-next`,
      prevEl: `${identifier} .swiper-button-prev`,
    };
  }

  // eslint-disable-next-line no-unused-vars
  const swiper = new SwiperConstructor(`${identifier} .swiper-container`, swiperOptions);

  return (null);
};

export default Swiper;
