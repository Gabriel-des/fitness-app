import { Component, OnInit } from '@angular/core';
import { ICarouselImageItem } from '../../interfaces/icarousel-image-item';
import { UserService } from 'src/services/user/user.service';
import { Iuser } from 'src/interfaces/iuser';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../components/header/header.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { SliderComponent } from '../components/slider/slider.component';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
	standalone: true,
	imports: [
		CommonModule,
		IonicModule,
		HeaderComponent,
		ProfileComponent,
		SliderComponent
	],
	providers: [AngularFirestore]
})
export class HomePage implements OnInit {

	user$!: Iuser[];
	public user!: Iuser;

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

	constructor(
		private userService: UserService
	) { 
		this.userService.getUserByCustomId('1').forEach(user => {
			this.user$ = user;
		});
	}

	async ngOnInit() {
	}

}
