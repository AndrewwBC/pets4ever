export interface SignInResponse {
  token: string;
  userId: string;
  email: string;
  username: string;
  userProfileImgUrl: string;
}

export interface SignUpProps {
  registerData: {
    name: string;
    email: string;
    senha: string;
  };
}
