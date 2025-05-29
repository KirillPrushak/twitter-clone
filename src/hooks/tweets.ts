import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { fetcher } from '../core/api';
import { Tweet } from '../core/types';

function useTweets(): UseQueryResult<Array<Tweet>, unknown> {
  return useQuery({
    queryKey: ['tweets'],
    queryFn: () =>
      fetcher
        .get('https://api.twitter.com/2/tweets', {
          headers: {
            authorization: '',
          },
        })
        .then((response) => response.data),
  });
}

export default useTweets;
