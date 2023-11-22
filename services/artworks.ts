import {AxiosResponse} from 'axios';
import {AllArtWorksResponse} from '../models/entity';
import {axiosClient} from '.';

export const getAllArtWorksList = async (): Promise<
  AxiosResponse<AllArtWorksResponse>
> => {
  const data: AxiosResponse<AllArtWorksResponse> = await axiosClient.get(
    '/artworks',
  );
  return data;
};

export const getArtWorkById = async (
  id: number,
): Promise<AxiosResponse<AllArtWorksResponse>> => {
  const data: AxiosResponse<AllArtWorksResponse> = await axiosClient.get(
    `artworks/${id}`,
  );
  return data;
};
