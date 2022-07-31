import { Channel } from './type';

export const channelsInfo: Channel = {
  Disney: {
    name: 'Disney',
    image:
      'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/STCO-0001/studios/disney.svg'
  },
  FoxKids: {
    name: 'FoxKids',
    image:
      'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/STCO-0001/studios/foxkids.svg'
  },
  Marvel: {
    name: 'Marvel',
    image:
      'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/STCO-0001/studios/marvel.svg'
  },
  Nickelodeon: {
    name: 'Nickelodeon',
    image:
      'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/STCO-0001/studios/nickelodeon.svg'
  },
  HannaBarbera: {
    name: 'HannaBarbera',
    image:
      'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/STCO-0001/studios/hanna-barbera.svg'
  },
  CartoonNetwork: {
    name: 'CartoonNetwork',
    image:
      'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/STCO-0001/studios/cartoon.svg'
  },
  WarnerChannel: {
    name: 'WarnerChannel',
    image:
      'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/STCO-0001/studios/others.svg'
  },
  Otros: {
    name: 'Otros',
    image:
      'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/STCO-0001/studios/others.svg'
  }
};
export const SwipperProps = {
  spaceBetween: 24,
  breakpoints: {
    1024: {
      slidesPerView: 5
    },
    768: {
      slidesPerView: 4
    },
    640: {
      slidesPerView: 3
    },
    320: {
      slidesPerView: 2
    }
  }
};
