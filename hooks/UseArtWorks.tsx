import {useContext} from 'react';
import {ArtWorksContext} from '../context/ArtWorksContext';

export default function UseArtWorks() {
  const {data, status, pagination, fetchArtWorksByPage} =
    useContext(ArtWorksContext);

  return {data, status, pagination, fetchArtWorksByPage};
}
