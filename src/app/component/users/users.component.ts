import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MatTableDataSource, MatSort } from '@angular/material';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  
  public userForm: FormGroup;
  
  loader: boolean = true;
  users: UsersEntry[];
  displayedColumns: string[] = ['id', 'name', 'email', 'mobileno', 'createdAt', 'action'];
  userDataSource: MatTableDataSource<any>;
  dialogref: any = null;
  
  @ViewChild(MatSort,{static: false}) sort: MatSort;
  constructor(
    public dialog: MatDialog,
    private userService: UsersService,
    private fb:FormBuilder
    ) { }
    
  loadUsers() {
    this.loader = true;
    this.users = [];
    this.userService.getAllUsers().subscribe((res: any) => {
      this.users = res.result;
      this.userDataSource = new MatTableDataSource(this.users);
      // this.userDataSource.sort = this.sort;
    }, (err) => {
      console.log(err)
    }, () => {
      this.loader = false;
      console.log( this.loader , this.users)

    });

  }
  createUserForm(user: any) {
    this.userForm = this.fb.group({
      name: [user.name || '', [Validators.required]],
      email: [user.email || '',[ Validators.required,  Validators.email]],
      mobileno: [user.mobileno || '', Validators.required]
    })
  }

  get userFormValue() {
    return this.userForm.controls;
  }
  openUserFormDialog(enterAnimationDuration: string, exitAnimationDuration: string, template): void {

    this.createUserForm({})
    this.dialogref = this.dialog.open(template, {
      width: '500px',
      // enterAnimationDuration,
      // exitAnimationDuration,
    });

    // this.dialogref.afterClosed().subscribe(result => {
    //   // this.resetUserPWDForm.reset();
    //   // this.resetUser = {};
    // });
  }

  onSubmit() {
    const props = this.userForm.value
    if (this.userForm.valid) {
       if (props.id) {

       } else {
        this.createUser(props)
       }
    }
  }

  createUser(data: UsersEntry) {
    try {
      this.userService
        .createUser(data)
        .subscribe((response: any) => {
         if (response.status) {
          this.dialogref.close();
          this.userForm.reset();
          this.loadUsers();
         }
        }, (err) => {
          const error = err.error ? err.error : 'Something went wrong';
        });
    } catch (e) {
      const error = e.error ? e.error : 'Something went wrong!';
    }
  }
  ngOnInit() {
    this.loadUsers()
  }

}


export interface UsersEntry {
  id: number;
  name: string;
  email: string;
  mobileno: string;
  createdAt: Date;
  updatedAt: Date;
}
