import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ExpenseComponent } from './component/expense/expense.component';
import { UsersComponent } from './component/users/users.component';



const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user', component: UsersComponent },
  { path: 'expense', component: ExpenseComponent },
  { path: 'about', component: AboutComponent },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component:  DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
