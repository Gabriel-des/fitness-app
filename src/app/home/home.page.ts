import { Component } from '@angular/core';
import { ICarouselImageItem } from '../interfaces/icarousel-image-item';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
	standalone: false,
})
export class HomePage {

	public trainingImages: ICarouselImageItem[] = [
		{
			url: "https://i.ibb.co/fdLYPsMb/DALL-E-2025-02-04-16-27-54-A-dark-themed-gym-scene-featuring-a-strong-athlete-preparing-for-a-workou.webp"
		},
		{
			url: "https://i.ibb.co/fdLYPsMb/DALL-E-2025-02-04-16-27-54-A-dark-themed-gym-scene-featuring-a-strong-athlete-preparing-for-a-workou.webp"
		},
		{
			url: "https://i.ibb.co/fdLYPsMb/DALL-E-2025-02-04-16-27-54-A-dark-themed-gym-scene-featuring-a-strong-athlete-preparing-for-a-workou.webp"
		},
	]

	constructor() { }

}
