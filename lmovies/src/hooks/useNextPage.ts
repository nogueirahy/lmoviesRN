
import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

export default function useNextPage(action, totalPages) {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [canLoadMore, setCanLoadMore] = useState(true);
  const isEndPage = page === totalPages;

  useEffect(() => {
    if (isEndPage) {
      setCanLoadMore(false);
    }
  }, [page, canLoadMore]);

  return useCallback(() => {
    if (canLoadMore) {
      dispatch(action(page));
      setPage(page + 1);
    }
  }, [page]);
}
