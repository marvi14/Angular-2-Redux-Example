export class User {
	id: number;
	email: string;
	profile_picture: string;
	constructor(id: number, email: string, profile_picture: string) {
		this.id = id;
		this.email = email;
		this.profile_picture = profile_picture;
	}
}