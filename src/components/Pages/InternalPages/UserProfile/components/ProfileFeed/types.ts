interface Comment {
  comment: string;
  userId: string;
  userProfileImageUrl: string;
}

interface Post {
  creationDate: string;
  description: string;
  imageUrl: string;
  name: string;
  postId: string;
  userId: string;
  userProfileImageUrl: string;
  comments: Comment[];
}

export interface ProfileFeedProps {
  posts?: Post[];
}
