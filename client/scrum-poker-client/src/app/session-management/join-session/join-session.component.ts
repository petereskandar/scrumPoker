import { Joiner } from './../../shared/models/joiner.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-join-session',
  templateUrl: './join-session.component.html',
  styleUrls: ['./join-session.component.scss']
})
export class JoinSessionComponent implements OnInit {

  joiner = new Joiner();

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.joiner.sessionId = this.activatedRoute.snapshot.params['id'];
  }

  setJoinerName(joinForm: NgForm) {
    if (joinForm.valid) {
      this.joiner.name = joinForm.form.value.joinerName;
      this.joiner.email = joinForm.form.value.joinerEmail;
    }
  }

}
