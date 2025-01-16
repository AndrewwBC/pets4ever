export interface SignInResponse {
  token: string;
  userId: string;
  raca: string;
  email: string;
  username: string;
  fullname: string;
  userProfileImgUrl: string;
}

export interface SignUpProps {
  fullname: string;
  username: string;
  email: string;
  password: string;
}
