


export interface Profilo {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  roles: Roules ;
}

export interface Roules {
  subscriber?: boolean;
  admin?: boolean;
}
