

export interface IPost {
  email: string;
  password: string;
  phoneNumber: string;
  birthDate?: Date;
  verifiedEmail: boolean;
  active: boolean;
  role: Role;
}
