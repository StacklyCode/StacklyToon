import { css } from '@emotion/react';
import { AtomButton, AtomIcon, AtomInput } from '@stacklycore/ui';
import AtomWrapper from '@stacklycore/ui/build/core/@atoms/AtomWrapper';
import { atom, useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { SearchIcon, SearchStyles } from './styled';

const AnimationDisabled = {
  whileHover: { scale: 1, transition: { duration: 0 } },
  whileTap: { scale: 1 }
};

const searchAtom = atom('');
const InputSearch = () => {
  const router = useRouter();
  const [search, setSearch] = useAtom(searchAtom);
  return (
    <AtomWrapper as="div" css={SearchStyles}>
      <AtomInput
        astheme="primary"
        label={{
          className: 'label-search'
        }}
        input={{
          value: search,
          css: css`
            color: #2d2d2d;
            ::placeholder {
              color: #b1b1b1;
            }
          `,
          placeholder: 'Buscar una caricatura',
          className: 'input-search',
          onChange: (e) => setSearch(e.target.value),
          onKeyDown: (e) => {
            if (e.key === 'Enter') {
              router.push(`/search/${search}`);
              setSearch('');
            }
          }
        }}
      />
      <AtomButton {...AnimationDisabled} className="search-button">
        <AtomIcon
          icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/STCO-0001/search-normal.svg"
          css={SearchIcon}
          onClick={() => {
            router.push(`/search/${search}`);
            setSearch('');
          }}
        />
      </AtomButton>
    </AtomWrapper>
  );
};

export default InputSearch;
