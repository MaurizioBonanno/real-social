import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Profilo } from 'src/app/interfaces/profilo';

@Component({
  selector: 'app-edit-user-component',
  templateUrl: './edit-user-component.component.html',
  styleUrls: ['./edit-user-component.component.css']
})
export class EditUserComponentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditUserComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Profilo) { }

  ngOnInit() {
  }

}
