import { Component, Input } from '@angular/core';
import { navItems } from '../../_nav';

import { ApiService } from '../../../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  
  constructor(private router: Router, private apiService : ApiService, private activatedRoute : ActivatedRoute) {
  
    if(!this.apiService.isLogin()){
      this.router.navigate(["/dashboard/login"]);
    }

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized')
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });
  }
}
