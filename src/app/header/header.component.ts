import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styles: ['.dropdown-menu > li {cursor: pointer;}']
})

export class HeaderComponent  {
    constructor() { }
}
