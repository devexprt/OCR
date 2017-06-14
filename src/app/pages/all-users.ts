
import { Component ,OnInit} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


declare var $: any;

@Component({
  selector: 'All users',
  templateUrl: '../pages/all-users.html',
  styleUrls: ['../../styles/pages/all-users.scss'],
})

export class AusersComponent implements OnInit {

  constructor() {
  }
   ngOnInit() {
    $('#datatable-example-2').DataTable();
  }
}
