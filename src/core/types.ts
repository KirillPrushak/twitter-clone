export type Tweet = {
  id: string;
  name: string;
  postedOn: Date;
  text: string;
  useName: string;
  reactions: {
    comment: number;
    like: number;
    retweet: number;
  };
};
