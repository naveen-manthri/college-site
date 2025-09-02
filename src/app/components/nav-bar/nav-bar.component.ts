import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { Subscription, filter } from "rxjs";
import { AppConstants } from "src/app/constants/app-constants";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"],
})
export class NavBarComponent implements OnInit {
  constructor(public router: Router) {}
  mobile = AppConstants.Mobile;
  mobile2 = AppConstants.Mobile2;
  email = AppConstants.Email;
  activeMenu: string | null = null;
  togglingSubmenu = false;

  toggleSubmenu(menu: string) {
    this.togglingSubmenu = true;
    this.activeMenu = this.activeMenu === menu ? null : menu;
  }

  private routerSubscription!: Subscription;

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        if (!this.togglingSubmenu) {
          this.closePopover();
        }
        this.togglingSubmenu = false;
      });
  }
  showPopover = false;

  ngOnDestroy(): void {
    this.routerSubscription?.unsubscribe();
  }

  togglePopover() {
    this.showPopover = !this.showPopover;
  }

  closePopover() {
    this.showPopover = false;
  }
}
