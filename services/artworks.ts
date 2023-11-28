import {AxiosResponse} from 'axios';
import {AllArtWorksResponse} from '../models/entity';
import {axiosClient} from '.';

export const getAllArtWorksList = async (): Promise<
  AxiosResponse<AllArtWorksResponse>
> => {
  const data: AxiosResponse<AllArtWorksResponse> = await axiosClient.get(
    '/artworks',
  );
  console.log('getAllArtWorksList', data);
  return data;
};

export const getArtWorksByPage = async (
  page: number,
  limit: number,
): Promise<AxiosResponse<AllArtWorksResponse>> => {
  const data: AxiosResponse<AllArtWorksResponse> = await axiosClient.get(
    `artworks?page=${page}&limit=${limit}`,
  );
  console.log('getArtWorksByPage', data);
  return data;
};
