import axios, {AxiosResponse} from 'axios';
import {AllArtWorksResponse} from '../models/entity';

export const getAllArtWorksList = async (): Promise<
  AxiosResponse<AllArtWorksResponse>
> => {
  const data: AxiosResponse<AllArtWorksResponse> = await axios.get('/artworks');
  return data;
};
