import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

//Custom Components
import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { ApplicationState } from './../../../store/application-state';
import { LOGOUT_REQUEST_ACTION, LogoutRequestAction } from './../../../store/actions/actions';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {


  @Input() position: string = 'normal';

  user: any;

  // userMenu = [{ title: 'Profile' }, { title: 'Log out' }];
  userMenu = [{ title: 'Log out', menuClick: 'logoutMenu()' }];

  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private userService: UserService,
    private analyticsService: AnalyticsService,
    private store:Store<ApplicationState>,
    private router: Router
  ) {
  }//end:constructor

  ngOnInit() {
    this.userService.getUsers()
      .subscribe((users: any) => this.user = users.manager);
  }//end:ngOnInit

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }

  logoutMenu(event){
    console.log('Logging out',event);
    this.store.dispatch({type:LOGOUT_REQUEST_ACTION});
    this.router.navigateByUrl('/auth');
  }//end:logoutMenu
}//end:class-HeaderComponent
