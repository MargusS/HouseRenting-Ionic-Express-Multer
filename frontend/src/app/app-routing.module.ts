import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'houses-list',
    loadChildren: () => import('./pages/houses-list/houses-list.module').then( m => m.HousesListPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'new-rent',
    loadChildren: () => import('./pages/new-rent/new-rent.module').then( m => m.NewRentPageModule)
  },
  {
    path: 'upt-rent',
    loadChildren: () => import('./pages/upt-rent/upt-rent.module').then( m => m.UptRentPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./pages/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: '',
    redirectTo: 'houses-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
