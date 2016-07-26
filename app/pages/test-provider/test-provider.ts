import { Injectable } from '@angular/core';

@Injectable()
export class TestProvider {

  public message: any = "KK de la VaK";

  constructor() {

  }

  setMessage(message) {
    this.message = message;
  }
}
