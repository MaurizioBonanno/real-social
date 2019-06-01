import { User, Roles } from './../interfaces/user';
export class UserClass implements User {

  id: number;
   nome: string;
  password: string;
  email: string;
  tel: string;
  agenzia: string;
  rete: string;
  roles: Roles;

      constructor(){

        this.id = 0;
        this.nome = '';
        this.password ='';
        this.email = '';
        this.tel = '';
        this.agenzia = '';
        this.rete = '';
        this.roles=null;
      }

};
