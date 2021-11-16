// import NeoVis from "neovis.js";

const neo4j = require('neo4j-driver');
const { url, db_username, db_password, database } = process.env;
const driver = neo4j.driver(url, neo4j.auth.basic(db_username, db_password));
const session = driver.session({ database });

export function fetchFromDataBase(query) {
    const result = session.run(query);
    return result;
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
        labels: {
            // ICEVALUE: {
            //   image: "https://my.dirtt.com/_img/header/logo_DIRTT.png",
            //   caption: "_id",
            //   size: "id",
            //   community: "community",
            //   title_properties: ["name", "_id", "class"],
              
            //   font: {
            //     color: "red",
            //     size: "10"
            //   },
            //   label: "node.labels[1]"
            // },
        },
        // relationships: {
        //     AnodizedType: {
        //         caption: true,
        //         display: false
        //       },
        //       CHILD: {
        //         caption: true,
        //         thickness: "weight",
        //         community: "partition"
        //       },
        //       ENTITY: {
        //         caption: true
        //       },
        //       description: {
        //         caption: true
        //       },
        //       editedByEditor: {
        //         caption: true
        //       },
        //       amps: {
        //         caption: false
        //     }
        // },
        initial_cypher: query,
    }
    // const result = new NeoVis(config);
    return config;
}