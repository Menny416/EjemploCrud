import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from '../../Service/service.service'
import { AreaModel } from 'src/app/models/area';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  gridData: any[] = [];
  areas:AreaModel[];
  constructor(private grid:ServiceService,
             private route:Router) { }

  ngOnInit() {
    // this.service.getAreas()
    // .subscribe(data=>{
    //   this.areas = data;
    // })
    this.grid.getAreas().subscribe((res: any) => {
      this.gridData = res.data;
      console.log(this.gridData);
    }, null, () => {
     // this.tools.convertirDataTable('#tblListadoAreas');
    });
  }
}
