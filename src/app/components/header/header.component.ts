import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LateralMenuComponent } from '../lateral-menu/lateral-menu.component';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	standalone: true,
	imports: [
		IonicModule,
		LateralMenuComponent
	]
})
export class HeaderComponent implements OnInit {

	constructor() { }

	ngOnInit() { }

}
