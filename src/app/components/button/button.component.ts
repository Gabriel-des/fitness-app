import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss'],
	standalone: true,
	imports: [IonicModule]
})
export class ButtonComponent implements OnInit {

	@Input() iconName!: string;
	@Input() buttonText!: string;
	@Output() buttonClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

	constructor() { }

	ngOnInit() { }

}
