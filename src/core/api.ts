import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';

const queryClient = new QueryClient();
const fetcher = axios.create({
  baseURL: 'https://localhost:4000',
});

export { fetcher, queryClient };
