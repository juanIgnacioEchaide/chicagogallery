import {useContext} from 'react';
import {ArtWorksContext} from '../context/ArtWorksContext';

export default function UseArtWorks() {
  const {data, status, pagination} = useContext(ArtWorksContext);

  return {data, status, pagination};
}
