import * as mongoDB from 'mongodb';

export async function connectDatabase() {
	const client = await mongoDB.MongoClient.connect(
		'mongodb+srv://nedec:hntE2wprVhWeFnMT@footyfind.et59ckj.mongodb.net/events?retryWrites=true&w=majority'
	);
	return client;
}

export async function insertDocument(
	client: mongoDB.MongoClient,
	collection: string,
	document: mongoDB.Document
) {
	const db: mongoDB.Db = client.db();

	const result = await db.collection(collection).insertOne(document);

	return result;
}

export async function getAllDocumetns(
	client: mongoDB.MongoClient,
	collection: string,
	sort: any,
	filter = {}
) {
	const db = client.db();

	const documents = await db.collection(collection).find(filter).sort(sort).toArray();
	return documents;
}
