import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LibraryComponent } from './components/library/library.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes : Routes =[
  { path : 'library', component: LibraryComponent},
  { path : 'home', component: AppComponent},
  { path : 'profile', component: ProfileComponent}    
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LibraryComponent,ProfileComponent]