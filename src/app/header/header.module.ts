import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { TopHeaderAreaComponent } from './top-header-area/top-header-area.component';
import { TopNavigationMenuComponent } from './top-navigation-menu/top-navigation-menu.component';


@NgModule({
  declarations: [HeaderComponent, TopHeaderAreaComponent, TopNavigationMenuComponent],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeaderModule { }
