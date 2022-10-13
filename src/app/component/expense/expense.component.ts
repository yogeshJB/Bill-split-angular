import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatSort, MatTableDataSource } from '@angular/material';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {

  public eForm: FormGroup;
  
  loader: boolean = true;
  users: any[];
  // displayedColumns: string[] = [];
  userDataSource: MatTableDataSource<any>;
  dialogref: any = null;
  types: string[] = ['EQUAL', 'EXACT', 'PERCENT']
  @ViewChild(MatSort,{static: false}) sort: MatSort;
  constructor(
    public dialog: MatDialog,
    private userService: UsersService,
    private fb:FormBuilder
    ) { }

    loadExpenses() {

    }
  ngOnInit() {
    this.loadExpenses();
    this.loadUserList()
  }

  loadUserList() {
    this.userService.getList().subscribe((res: any) => {
      this.users = res.result;
    })
  }
  openTransactionModal(template, data: any) {

    this.createForm(data)
    this.dialogref = this.dialog.open(template, {
      width: '500px',
      // enterAnimationDuration,
      // exitAnimationDuration,
    });
  }

  createForm(defaultFormData: any) {
    this.eForm = this.fb.group({
      id: [defaultFormData.id || ''],
      description: [defaultFormData.description || '', [Validators.required]],
      amount: [defaultFormData.amount || '', [Validators.required]],
      type: [defaultFormData.type || '', [Validators.required]],
      users: [null, [Validators.required]],
      paidBy: ['', Validators.required]
    })
  }

  payerChange(event)  {
    this.eForm.patchValue({'users': null})
  }
}
