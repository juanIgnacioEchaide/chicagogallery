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

  const fetchAllArtWorks = useCallback(async () => {
    setStatus({loading: true, error: ''});
    try {
      const response = await getAllArtWorksList();
      setArtWorks(response.data.data); // Set the artworks array
      setPagination(response.data.pagination); // Set the pagination object
      setStatus({loading: false, error: ''});
    } catch (error) {
      console.error('Error fetching artworks:', error);
      setStatus({loading: false, error: 'Error fetching artworks'});
    }
  }, []);

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
