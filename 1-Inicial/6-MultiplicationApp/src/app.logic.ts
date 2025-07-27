import fs from 'fs'


let ouputMessage = ''
const base = 5
const headerMessage = `
==================================
            TABLA de ${base}
==================================
`
for(let i=1; i<=10; i++){
    ouputMessage += `${base} x ${i} = ${base * i}\n`
}

ouputMessage = headerMessage + ouputMessage

console.log(ouputMessage)

//Crear un directorio en raiz
fs.mkdirSync(`./outputs`, {recursive:true})

// grabar en un archivo en la carpeta creada.
fs.writeFileSync(`outputs/tabla-${base}.txt`,ouputMessage)
console.log('File created!')