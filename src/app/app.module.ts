import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './component/users/users.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AboutComponent } from './component/about/about.component';
import { ExpenseComponent } from './component/expense/expense.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatSelectModule, MatSortModule, MatTableModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SidebarComponent,
    DashboardComponent,
    AboutComponent,
    ExpenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,

    
    
        
    
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
