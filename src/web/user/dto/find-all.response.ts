export namespace FindAllResponse {
  export class User {
    readonly firstName: string;
    readonly lastName: string;
    readonly phone?: string;

    constructor(props: User) {
      this.firstName = props.firstName;
      this.lastName = props.lastName;
      this.phone = props.phone;
    }
  }
}
