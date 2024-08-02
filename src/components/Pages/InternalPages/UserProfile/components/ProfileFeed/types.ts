interface Comment {
  comment: string;
  userId: string;
  userProfileImageUrl: string;
}

export interface PostProps {
  creationDate: string;
  description: string;
  imageUrl: string;
  name: string;
  postId: string;
  userId: string;
  userProfileImageUrl: string;
  comments: Comment[];
}

export interface PostArrayProps {
  posts?: PostProps[];
}
