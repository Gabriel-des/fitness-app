import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, Input } from '@angular/core';
import { ICarouselImageItem } from 'src/app/interfaces/icarousel-image-item';
import { register } from 'swiper/element/bundle';

register();

@Component({
	selector: 'app-slider',
	templateUrl: './slider.component.html',
	styleUrls: ['./slider.component.scss'],
	standalone: true,
	imports: [CommonModule],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SliderComponent implements OnInit {

	@Input() images!: ICarouselImageItem[];

	constructor() { }

	ngOnInit() { }
}
