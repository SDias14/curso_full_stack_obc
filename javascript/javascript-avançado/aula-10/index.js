const core = require('core-js');

const regen = require('regenerator-runtime/runtime');



const neoServicefunction = require('./neo_service');



async function loadNeo(){
    let neo = []
    let neoJson = await getNeo();
    neoJson.forEach(neo => {
        const minDiameter = neo["estimated_diameter"]["kilometers"]["estimated_diameter_min"];
        const maxDiameter = neo["estimated_diameter"]["kilometers"]["estimated_diameter_max"];
        const averageDiameter = (minDiameter + maxDiameter) / 2;
        const newNeo = new Neo(neo["id"], neo["name"], averageDiameter, neo["is_sentry_object"]);

        neo.push(newNeo);

    });
 console.log(neo);
}

loadNeo();

