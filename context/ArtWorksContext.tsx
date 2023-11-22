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
    loading: true,
    error: '',
  });

  const errorHandler = useCallback((error: any) => {
    let errorMessage = '';
    if (error.response) {
      errorMessage = `Server Error: ${error.response.status}`;
    } else if (error.request) {
      errorMessage = 'Network Error: No response received';
    } else {
      errorMessage = 'Request failed to initiate';
    }
    setStatus({loading: false, error: errorMessage});
    console.error(errorMessage);
  }, []);

  const fetchAllArtWorks = useCallback(async () => {
    try {
      const response = await getAllArtWorksList();
      setArtWorks(response.data.data);
      setPagination(response.data.pagination);
      setStatus({loading: false, error: ''});
    } catch (error) {
      errorHandler(error);
    }
  }, [errorHandler]);

  useEffect(() => {
    fetchAllArtWorks();
  }, [fetchAllArtWorks]);

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
