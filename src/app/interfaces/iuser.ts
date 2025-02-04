import { UserLevels } from "../Enums/UserLevels";

export interface Iuser {
    name: string;
    lastName: string;
    fullName: string;
    level: UserLevels;
    trainings: Array<String>;
}
