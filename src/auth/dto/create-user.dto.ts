export class CreateUserDto {
  email: string;
  password: string;
  rol?: string; // opcional, por defecto será 'usuario'
}
