import { Component } from '@angular/core';
import { NavbarComponent as BaseComponent } from '../../../../app/navbar/navbar.component';
import { slide, slideMobileNav } from '../../../../app/shared/animations/slide';
import { environment } from 'src/environments/environment';

/**
 * Component representing the public navbar
 */
@Component({
  selector: 'ds-navbar',
  styleUrls: ['./navbar.component.scss'],
  templateUrl: './navbar.component.html',
  animations: [slideMobileNav, slide]
})
export class NavbarComponent extends BaseComponent {
  communityEndpoint = environment.communityEndpoint;
  isDropdownNavegarOpen = false;
  isDropdownODepositaOpen = false;


  openDropdownNavegar() {
    this.isDropdownNavegarOpen = true;
  }

  closeDropdownNavegar() {
    this.isDropdownNavegarOpen = false;
  }


  openDropdownODeposita() {
    this.isDropdownODepositaOpen = true;
  }

  closeDropdownODeposita() {
    this.isDropdownODepositaOpen = false;
  }

}
