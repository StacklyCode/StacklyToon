import { AtomButton, AtomIcon, AtomInput } from '@stacklycore/ui';
import AtomWrapper from '@stacklycore/ui/build/core/@atoms/AtomWrapper';
import { SearchIcon, SearchStyles } from './styled';

const AnimationDisabled = {
  whileHover: { scale: 1, transition: { duration: 0 } },
  whileTap: { scale: 1 }
};
const InputSearch = () => {
  return (
    <AtomWrapper as="div" css={SearchStyles}>
      <AtomInput
        astheme="primary"
        label={{
          className: 'label-search'
        }}
        input={{
          placeholder: 'Buscar una caricatura',
          className: 'input-search'
        }}
      />
      <AtomButton {...AnimationDisabled} className="search-button">
        <AtomIcon
          icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/STCO-0001/search-normal.svg"
          css={SearchIcon}
        />
      </AtomButton>
    </AtomWrapper>
  );
};

export default InputSearch;
