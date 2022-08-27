import { AtomImage, AtomText, AtomWrapper } from '@stacklycore/ui';
import Link from 'next/link';
import { FC } from 'react';
import { cartoonsItem, RandomNumberBetween } from '../../styles';
import { ICartoonItem } from './types';
const CartoonsItem: FC<ICartoonItem> = ({ image, name, studio, delay, id }) => {
  return (
    <Link href={`/${id}`} passHref style={{ cursor: 'pointer' }}>
      <AtomWrapper
        css={cartoonsItem(RandomNumberBetween(-8, 8))}
        animate={{}}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: delay * 0.001, duration: 0.1 }}
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
    </Link>
  );
};

export default CartoonsItem;
