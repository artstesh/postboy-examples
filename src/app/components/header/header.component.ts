import {Component} from '@angular/core';
import {FlexModule} from "@ngbracket/ngx-layout";
import {TimeOnSiteComponent} from './components/time-on-site/time-on-site.component';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    TimeOnSiteComponent,
    RouterLink,
    RouterLinkActive,
    FlexModule
  ],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
