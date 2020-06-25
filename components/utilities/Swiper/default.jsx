import SwiperConstructor from 'swiper';

const Swiper = (props) => {
  const {
    identifier, spaceBetween, loop, pagination, navigation, delay,
  } = props;

  console.log('swiper from utilities after change and with identifier: ', loop);

  const swiperOptions = {
    spaceBetween,
    autoplay: {
      delay: delay * 1000,
      disableOnInteraction: true,
    },
    loop,
  };

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
      nextEl: `${identifier} a.swiper-button-next`,
      prevEl: `${identifier}  a.swiper-button-prev`,
    };
  }

  // eslint-disable-next-line no-unused-vars
  const swiper = new SwiperConstructor(`${identifier} .swiper-container`, swiperOptions);

  return (null);
};

export default Swiper;
