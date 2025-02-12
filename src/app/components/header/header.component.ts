import { Component } from '@angular/core';
import {DefaultLayoutAlignDirective, DefaultLayoutDirective, DefaultLayoutGapDirective} from "@ngbracket/ngx-layout";
import {TimeOnSiteComponent} from './components/time-on-site/time-on-site.component';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    DefaultLayoutAlignDirective,
    DefaultLayoutDirective,
    DefaultLayoutGapDirective,
    TimeOnSiteComponent,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
