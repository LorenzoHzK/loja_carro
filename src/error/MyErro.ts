export default class MyErro extends Error {
  constructor(message: string) {
    super(message);
    this.name = "MyErro";
  }
}
