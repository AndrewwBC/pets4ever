export interface Comment {
  comment: string;
  userId: string;
  username: string;
  profileImageUrl: string;
}

export interface PostProps {
  creationDate: string;
  description: string;
  imageUrl: string;
  username: string;
  postId: string;
  userId: string;
  profileImgUrl: string;
  comments: Comment[];
}

export interface PostArrayProps {
  posts?: PostProps[];
}
