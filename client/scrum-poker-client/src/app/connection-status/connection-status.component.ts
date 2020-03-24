import { SocketService } from './../shared/services/socket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connection-status',
  templateUrl: './connection-status.component.html',
  styleUrls: ['./connection-status.component.scss']
})
export class ConnectionStatusComponent implements OnInit {

  constructor(private socketService: SocketService) { }

  ngOnInit() {

  }

}
