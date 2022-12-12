//export inline é um export que está na mesma linha do código que está sendo exportado. Precisa ser usado com o nome exato.

export function inline() {
    console.log('Export nomeado inline')
}


//export default inline é um export que está na mesma linha do código que está sendo exportado. Não precisa ser usado com o nome exato. So permite um export default por arquivo.
export default function defaultInline() {
    console.log('Export default inline')
}