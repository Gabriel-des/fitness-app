import { UserLevels } from "../Enums/UserLevels";

export interface Iuser {
	id: string;
	name: string;
	lastName: string;
	fullName: string;
	level: UserLevels;
	trainings: Array<String>;
}
