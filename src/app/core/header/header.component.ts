import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styles: ['.dropdown-menu > li {cursor: pointer;}']
})

export class HeaderComponent  {
    constructor(private authService: AuthService) { }

    onSignout() {
        this.authService.logout();
    }

    isAuthenticated() {
        return this.authService.isAuthenticated();
    }
}
