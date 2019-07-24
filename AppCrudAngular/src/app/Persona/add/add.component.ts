import { Component, OnInit } from '@angular/core';
import {AreaModel} from '../../models/area';
import {ServiceService} from '../../Service/service.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  area: AreaModel = new AreaModel();
  constructor() { }

  ngOnInit() {
  }

}
