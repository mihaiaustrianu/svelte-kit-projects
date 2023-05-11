import { error, json, type RequestHandler } from '@sveltejs/kit';
import { MongoClient, ObjectId } from 'mongodb';
import type Message from '../../../models/message';

export const POST: RequestHandler = async ({ request }) => {
	let { email, name, message } = await request.json();

	if (!email || !email.includes('@') || name.trim() === '' || !message || message.trim() === '') {
		throw error(422, 'Invalid email address!');
	}
	const newMessage = {
		email,
		name,
		message
	} as Message;

	let client;

	try {
		client = await MongoClient.connect(
			'mongodb+srv://nedec:cssmJWCd0ohB2rmb@footyfind.et59ckj.mongodb.net/?retryWrites=true&w=majority'
		);
	} catch {
		throw error(500, 'Connecting to the database failed');
	}

	const db = client.db('My-site');

	try {
		const result = await db.collection('messages').insertOne(newMessage);
		newMessage._id = result.insertedId;
	} catch {
		client.close();
		throw error(500, 'Inserting data failed');
	}

	client.close();

	return json({ message: 'Succesfully stored message' });
};
