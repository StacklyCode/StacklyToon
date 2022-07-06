import { AtomButton, AtomInput } from '@stacklycore/ui';
import AtomWrapper from '@stacklycore/ui/build/core/@atoms/AtomWrapper';
import { SearchStyles } from './styled';

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
        <span>Buscar</span>
      </AtomButton>
    </AtomWrapper>
  );
};

export default InputSearch;
