import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";

interface IProps {
  action: (page: number) => void;
  totalPages: number;
}

const DEFAULT_NEXT_PAGE = 2;

export default function useNextPage({ action, totalPages }: IProps) {
  const dispatch = useDispatch();
  const [page, setPage] = useState(DEFAULT_NEXT_PAGE);
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
