
const jSON = {
    "name": "aula-16",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
      "lodash": "^4.17.21"
    }
  }

  console.log(jSON)

  // transformando o objeto em string

    const jSONString = JSON.stringify(jSON)

    console.log(jSONString)

    // transformando a string em objeto

    const jSONObj = JSON.parse(jSONString)

    console.log(jSONObj)


