import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./presentation/view/pages/home/home.module').then(m => m.HomeModule)
  },
];
