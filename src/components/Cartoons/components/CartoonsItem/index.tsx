import { AtomImage, AtomText, AtomWrapper } from '@stacklycore/ui';
import { FC } from 'react';
import { ICartoonItem } from './types';
const CartoonsItem: FC<ICartoonItem> = ({ image, name, studio }) => {
  return (
    <AtomWrapper className="cartoon-item">
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
