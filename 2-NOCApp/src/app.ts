
import { Server } from "./presentation/server";

//Utilizamos en una funcion anonima autoinvocada para ejecutar el servidor
(async () => {
  await main();
})();

async function main() {
    Server.start();
}