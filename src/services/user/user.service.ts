// user.service.ts
import { Injectable } from '@angular/core';
import { Firestore, collection, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { collectionData } from 'rxfire/firestore';
import { Iuser } from 'src/interfaces/iuser';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor(private firestore: Firestore) { }

	getUserByCustomId(customId: string): Observable<Iuser[]> {
		const usersRef = collection(this.firestore, 'users');

		// Consulta documentos onde o campo "id" é igual a "1"
		const q = query(usersRef, where('id', '==', customId));

		return collectionData(q, { idField: 'id' }) as Observable<Iuser[]>;
	}
}