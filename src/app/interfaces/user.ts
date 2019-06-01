export interface User {
  id: number;
  nome?: string;
  password?: string;
  email: string;
  tel?: string;
  agenzia?: string;
  rete?: string;
  roles?: Roles;
}

export interface Roles {
   subscriber?: boolean;
   admin?: boolean;
}
