import { css, SerializedStyles } from '@emotion/react';
import { AtomWrapper } from '@stacklycore/ui';
import { FC } from 'react';
import SwiperCore, {
  A11y,
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
  SwiperOptions
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperStyles from './styles';

interface AtomCarrousellType {
  width?: string;
  height?: string;
  customCSS?: SerializedStyles;
  swiperProps?: SwiperOptions;
  slides?: JSX.Element[];
  children?: JSX.Element[];
  direction?: 'horizontal' | 'vertical';
  slidesPerView?: number;
  acentColor?: string;
}

SwiperCore.use([Pagination, Scrollbar, A11y, Autoplay, EffectFade, Navigation]);
const AtomCarrousell: FC<AtomCarrousellType> = (props) => {
  const {
    height,
    width,
    customCSS,
    swiperProps,
    children,
    direction,
    slidesPerView,
    acentColor,
    slides
  } = props;
  return (
    <AtomWrapper
      css={css`
        ${SwiperStyles}
        .swiper {
          width: ${width || `100%`};
          height: ${height || `100vh`};
        }
        .swiper-slide {
          text-align: center;
          font-size: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .swiper-pagination-bullet-active {
          background-color: ${acentColor ?? `white`};
        }
        .swiper-slide img {
          width: 40%;
          height: 40%;
          object-fit: cover;
        }
        .swiper-button-prev {
          ::after {
            font-size: 8px;
            padding: 0.7rem 0.8rem;
            color: ${acentColor ?? `#ebebebeb`};
            background-color: #575859;
            border-radius: 50%;
          }
          top: 35%;
          left: 0.2%;
        }
        .swiper-button-next {
          ::after {
            font-size: 8px;
            padding: 0.7rem 0.8rem;
            color: ${acentColor ?? `#ebebebeb`};
            background-color: #575859;
            border-radius: 50%;
          }
          top: 35%;
          right: 0.2%;
        }
        ${customCSS}
      `}
    >
      <Swiper
        direction={direction || 'horizontal'}
        autoplay={{
          delay: 6000
        }}
        navigation={direction !== 'vertical'}
        loop
        pagination={{
          clickable: true
        }}
        slidesPerView={slidesPerView || 1}
        {...swiperProps}
      >
        {slides?.map((item) => (
          <SwiperSlide key={item?.key}>{item}</SwiperSlide>
        ))}
        {children?.map((item) => (
          <SwiperSlide key={item?.key}>{item}</SwiperSlide>
        ))}
      </Swiper>
    </AtomWrapper>
  );
};
export default AtomCarrousell;
