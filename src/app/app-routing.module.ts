import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/cashier', pathMatch: 'full' },
  {
    path: 'cashier',
    loadChildren: () =>
      import('./cashier/cashier.module').then((m) => m.CashierModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'agen',
    loadChildren: () => import('./agen/agen.module').then((m) => m.AgenModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
