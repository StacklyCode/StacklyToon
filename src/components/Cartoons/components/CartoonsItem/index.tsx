import { AtomImage, AtomLink, AtomText, AtomWrapper } from '@stacklycore/ui';
import { FC } from 'react';
import { cartoonsItem, RandomNumberBetween } from '../../styles';
import { ICartoonItem } from './types';
const CartoonsItem: FC<ICartoonItem> = (props) => {
  const { delay, item } = props;
  const { id, image, title, studio } = item;
  return (
    <AtomLink link={`/${studio?.id}/${id}`}>
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
            {studio?.name}
          </AtomText>
          <AtomText as="h2" className="cartoon-item-text">
            {title}
          </AtomText>
        </AtomWrapper>
      </AtomWrapper>
    </AtomLink>
  );
};

export default CartoonsItem;
