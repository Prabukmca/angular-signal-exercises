import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'box',
        pathMatch: 'full'
    },
    {
        path: 'box',
        loadComponent: () => import('./components/chat-box/chat-box.component').then(m => m.ChatBoxComponent),
        title: 'Chat Box'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
