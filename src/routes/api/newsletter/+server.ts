import { error, json, type RequestHandler } from '@sveltejs/kit';
import { connectDatabase, insertDocument } from '../../../helpers/db-util';

export const POST: RequestHandler = async ({ request }) => {
	const user = await request.json();

	const userEmail = user.email;

	if (!userEmail || !userEmail.includes('@')) {
		throw error(422, 'Invalid email address!');
	}
	let client;

	try {
		client = await connectDatabase();
	} catch {
		throw error(500, 'Connecting to the database failed');
	}

	try {
		await insertDocument(client, 'newsletter', { email: userEmail });
		client.close();
	} catch {
		throw error(500, 'Inserting data failed');
	}

	return json({ message: 'Signed Up' });
};
