import { Injectable } from '@angular/core';
import * as socketIo from 'socket.io-client';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket: any;
  constructor() { }

  initSocket() {
    this.socket = socketIo(environment.SERVER_URL);
  }

  getSocket() {
    return this.socket;
  }
}
