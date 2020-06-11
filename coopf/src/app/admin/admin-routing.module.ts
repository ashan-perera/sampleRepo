import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
    {
      path: '',
      component: AdminComponent,
      children: [
        {
          path: 'items',
          loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)
        }
      ]  
    }
    ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }