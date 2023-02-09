export namespace FindResponse {
  export class User {
    readonly id: number;
    readonly firstName: string;
    readonly lastName: string;
    readonly birthDate: Date;
    readonly phone?: string;

    constructor(props: User) {
      this.id = props.id;
      this.firstName = props.firstName;
      this.lastName = props.lastName;
      this.birthDate = props.birthDate;
      this.phone = props.phone;
    }
  }
}
