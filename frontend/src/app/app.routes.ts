import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio-component/portfolio-component';

export const routes: Routes = [
  { path: '', component: PortfolioComponent },
  { path: '**', redirectTo: '' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})