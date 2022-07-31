import { useQuery } from '@apollo/client';
import { IGlobal, IQueryFilter } from 'graphql';
import { DocumentNode } from 'graphql/language/ast';

const useQueryFilter = (QUERY: DocumentNode, FILTER: keyof IGlobal) => {
  const USEQUERY = useQuery<IQueryFilter<typeof FILTER>>(QUERY);
  return USEQUERY;
};

export default useQueryFilter;
