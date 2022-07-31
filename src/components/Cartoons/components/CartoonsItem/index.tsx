import { AtomImage, AtomText, AtomWrapper } from '@stacklycore/ui';
import { FC } from 'react';
import { ICartoonItem } from './types';
const CartoonsItem: FC<ICartoonItem> = ({ image, name, studio, delay }) => {
  return (
    <AtomWrapper
      className="cartoon-item"
      animate={{}}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: delay * 0.01, duration: 0.1 }}
    >
      <AtomImage src={image} className="cartoon-item-image" />
      <AtomWrapper>
        <AtomText as="p" className="cartoon-item-studio">
          {studio}
        </AtomText>
        <AtomText as="h2" className="cartoon-item-text">
          {name}
        </AtomText>
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default CartoonsItem;
