
const neo4j = require('neo4j-driver');
const { url, db_username, db_password, database } = process.env;
const driver = neo4j.driver(url, neo4j.auth.basic(db_username, db_password));

export async function fetchFromDataBase(query) {
	
	return new Promise((resolve, reject, next) => {
		const session = driver.session({ database });
		session.run(query)
			.then(result => {
				resolve(result)
			})
			.catch((error) => {
				reject(error)
			})
			.then(() => session.close()
		)
	})
}

export function fetchNeoVisObjFromDataBase(query) {
	var config = {
		container_id: "viz",
		server_url: url,
		server_user: db_username,
		server_password: db_password,
		arrows: true,
		hierarchical_layout: true,
		hierarchical_sort_method: "directed",
		initial_cypher: query,
	}
	return config;
}