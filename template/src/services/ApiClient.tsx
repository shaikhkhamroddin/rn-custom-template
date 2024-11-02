import axios from 'axios';
import endpoints from './endpoints';

const TIMEOUT = 60 * 1000;

const apiClient = axios.create({
  baseURL: endpoints.BASE_URL,
});

/*
Use custom timeout as android still has a bug and
timeout is not fired
*/
apiClient.interceptors.request.use(async request => {
  const ct = new AbortController();
  const timeout = request.timeout ? request.timeout : TIMEOUT;
  setTimeout(() => ct.abort(), timeout);
  request.params = request.params || {};
  const jwtToken: string = 'abc'; // Integrate token
  request.headers.setAccept('*/*');
  request.headers.setContentType('application/json');
  if (jwtToken && jwtToken !== '') {
    request.headers.Authorization = 'Bearer ' + jwtToken;
  }

  return {
    ...request,
    signal: ct.signal,
  };
});

apiClient.interceptors.response.use(
  response => response,
  error => {
    throw error;
  },
);

export {apiClient};
