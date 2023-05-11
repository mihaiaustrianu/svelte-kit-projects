import type { ObjectId } from 'mongodb';
export default class Message {
	constructor(
		public email: string,
		public name: string,
		public message: string,
		public _id?: ObjectId
	) {}
}
