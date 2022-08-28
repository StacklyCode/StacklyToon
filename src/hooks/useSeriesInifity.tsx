import { OperationVariables, useQuery } from '@apollo/client';
import { LISTSERIES } from '@Src/apollo/query/listSeries';
import { useViewportScroll } from 'framer-motion';
import { IQueryFilter } from 'graphql';

import { useEffect, useMemo, useState } from 'react';

const useSeriesInifity = (props?: OperationVariables) => {
  const [items, setItems] = useState(24);
  const { data, loading } = useQuery<IQueryFilter<'listSeries'>>(
    LISTSERIES,
    props
  );
  const seriesFiltered = useMemo(
    () => data?.listSeries?.filter((_, index) => index < items),
    [data, items]
  );

  const { scrollYProgress } = useViewportScroll();

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      if (latest > 0.8 && (data?.listSeries?.length ?? 0) > 0) {
        setItems((prev) => Math.min(data?.listSeries?.length ?? 0, prev + 24));
      }
    });
  }, [data?.listSeries?.length]);
  return {
    data: seriesFiltered,
    loading
  };
};

export default useSeriesInifity;
