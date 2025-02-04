import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { UserLevels } from 'src/app/Enums/UserLevels';
import { Iuser } from 'src/app/interfaces/iuser';
import { ButtonComponent } from '../button/button.component';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss'],
	standalone: true,
	imports: [
		IonicModule,
		NgClass,
		ButtonComponent
	]
})
export class ProfileComponent implements OnInit {
	@Input() user!: Iuser;

	constructor() { }

	ngOnInit() {
		this.user = {
			name: "John",
			lastName: "Doe",
			fullName: "John Doe",
			level: UserLevels.GREY,
			trainings: []
		}
	}

	public goTo(url: string): void {
		console.log("Not implemented yet")
	}

}
