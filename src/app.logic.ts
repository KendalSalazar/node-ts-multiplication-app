import fs from "fs";
import { yarg } from "./config/plugins/yargs.plugin";

console.log(yarg);

let mensaje: string = '';
const base = yarg.b;
const limit = yarg.l;
const showTable = yarg.s;

mensaje = mensaje.concat(`================ \n Multiplication Table of ${base} \n ================\n`);

for (let i = 1; i <= limit; i++) {
    mensaje = mensaje.concat(`${base} x ${i} = ${base*i} \n`);
}

if (showTable) console.log(mensaje);

fs.writeFileSync(`table-${base}.txt`, mensaje);

