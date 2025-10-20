import { Routes } from '@angular/router';
import { MainComponent } from './main-component/main-component';
import { TestComponent } from './test-component/test-component';

export const routes: Routes = [
    {path:"main", component : MainComponent},
    {path:"test", component : TestComponent}
];
