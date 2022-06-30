//importando el modulo
const http = require("http");
//creo el puerto en el que el servidor va a escuchar
const PORT = 3000;
/*
  (req,res) =>{

  }
*/
//creo el servidor
const servidor = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<img src='https://www.icreativa.com.ec/images/logoicreativa.png' >");
});

//ejecuto el servidor para escuchar en el puerto
servidor.listen(PORT, () => {
  console.log("Servidor listo en localhost:3000");
});
