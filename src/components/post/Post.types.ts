export interface PostProps {
  children?: React.ReactNode;
  avatar: any;
  username: string;
  date: string;
  time: string;
  description: string;
  image?: any;
  commentsNumber: number;
  retweetsNumber: number;
  savedNumber: number;
}
