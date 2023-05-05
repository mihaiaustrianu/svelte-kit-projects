import { error, json, type RequestHandler } from '@sveltejs/kit';
import { connectDatabase, getAllDocumetns, insertDocument } from '../../../../helpers/db-util';
import { ObjectId } from 'mongodb';

export const POST: RequestHandler = async ({ request, params }) => {
	const eventID = params.eventID;

	let client;
	try {
		client = await connectDatabase();
	} catch {
		throw error(500, 'Connecting to the database failed');
	}

	const comment = await request.json();

	const { email, name, text } = comment;

	if (!email.includes('@') || !name || name.trim() === '' || !text || text.trim() === '') {
		client.close();
		throw error(422, 'Input is not valid"');
	}
	const newComment = {
		email,
		name,
		text,
		eventID,
		_id: new ObjectId()
	};
	let result;

	try {
		result = await insertDocument(client, 'comments', newComment);

		newComment._id = result.insertedId;

		return json({ message: 'Comment added succesfully', comment: newComment });
	} catch {
		throw error(500, 'Inserting comment failed');
	} finally {
		client.close();
	}
};

export const GET: RequestHandler = async ({ request, params }) => {
	const eventID = params.eventID;
	let client;
	try {
		client = await connectDatabase();
	} catch {
		throw error(500, 'Connecting to the database failed');
	}
	try {
		const documents = await getAllDocumetns(client, 'comments', { _id: -1 }, { eventID: eventID });
		return json({ comments: documents });
	} catch {
		throw error(500, 'Getting comments failed');
	} finally {
		client.close();
	}
};
