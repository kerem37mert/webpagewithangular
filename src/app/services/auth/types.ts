export interface LoginRequestDTO {
  identifier: string;
  password: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export interface LoginResponseDTO {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  user: User;
}

export interface RegisterRequestDTO {
  email: string;
  userName: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface RegisterResponseDTO {
  // sometimes
}
