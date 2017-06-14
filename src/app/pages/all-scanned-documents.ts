
import { Component ,OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'all-scanned-documents',
  templateUrl: '../pages/all-scanned-documents.html',
  styleUrls: ['../../styles/pages/all-scanned-documents.scss']
})

export class AlldocumentsComponent implements OnInit {

  constructor() {
  }
   ngOnInit() {
    $('#datatable-example-2').DataTable();
  }
}
