import React, {useCallback, useEffect, useState} from 'react';
import {ReactNode, createContext} from 'react';
import {getAllArtWorksList} from '../services/artworks';
import {ArtWorkItem, ArtWorksContenxtValue, Pagination} from '../models/entity';

const artWorksDefaultContext: ArtWorksContenxtValue = {
  pagination: {
    total: 0,
    limit: 0,
    offset: 0,
    total_pages: 0,
    current_page: 0,
    next_url: '',
  },
  data: [] as ArtWorkItem[],
  status: {
    loading: false,
    error: '',
  },
};

export const ArtWorksContext = createContext<ArtWorksContenxtValue>(
  artWorksDefaultContext,
);

export const ArtWorksProvider = ({children}: {children: ReactNode}) => {
  const [artWorks, setArtWorks] = useState<ArtWorkItem[]>([]);
  const [pagination, setPagination] = useState<Pagination | undefined>();
  const [status, setStatus] = useState<{loading: boolean; error: string}>({
    loading: false,
    error: '',
  });

  const errorHandler = useCallback(
    (error: any) => {
      if (error.response) {
        setStatus({
          loading: false,
          error: `Server Error: ${error.response.status}`,
        });
      } else if (error.request) {
        setStatus({
          loading: false,
          error: 'Network Error: No response received',
        });
      } else {
        setStatus({loading: false, error: 'Request failed to initiate'});
      }
      console.log(status.error);
    },
    [status.error],
  );

  const fetchAllArtWorks = useCallback(async () => {
    setStatus({...status, loading: true, error: ''});
    try {
      const response = await getAllArtWorksList();
      setArtWorks(response.data.data);
      setPagination(response.data.pagination);
      setStatus({...status, loading: false, error: ''});
    } catch (error) {
      errorHandler(error);
    } finally {
      setStatus({...status, loading: false, error: ''});
    }
  }, [errorHandler, status]);

  useEffect(() => {
    fetchAllArtWorks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const contextValue: ArtWorksContenxtValue = {
    pagination: pagination || artWorksDefaultContext.pagination,
    data: artWorks || artWorksDefaultContext.data,
    status,
  };

  return (
    <ArtWorksContext.Provider value={contextValue}>
      {children}
    </ArtWorksContext.Provider>
  );
};
