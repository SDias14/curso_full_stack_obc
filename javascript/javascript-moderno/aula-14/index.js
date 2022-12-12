import{inline} from './inline.js' //importando o export inline

import defaultInline from './inline.js' //importando o export default inline, não   precisa usar chaves, nomes sendo flexíveis

import {group} from './non-inline.js' //importando o export nomeado não inline

import exportDefault from './non-inline.js' //importando o export default não inline


inline()

defaultInline()
group()

exportDefault()