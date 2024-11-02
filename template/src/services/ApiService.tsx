import {apiClient} from './ApiClient';
import {User} from './models/User';
import endpoints from './endpoints';

export interface IApiService {
  getUser(id: string): Promise<User>;
}

export const ApiService: IApiService = {
  getUser: (id = '') => {
    let url = endpoints.GET_USER + id!;
    return apiClient.get(url).then(response => {
      return response.data;
    });
  },
};
