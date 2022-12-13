export interface HttpRequest {
  username: string;
  role: string;
  email: string;
  password: string;
}

export interface HttpResponse {
  token: string;
}
