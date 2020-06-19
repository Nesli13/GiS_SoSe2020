import * as Http from "http";

export namespace A08Server {
  console.log("Starting server");

  //Den Port erlangen
  let port: number = Number(process.env.PORT);
  //Wenn es den Port nicht gibt, gebe port=8100 aus --> localhost:8100
  if (!port)
    port = 8100;

  //Das HTTP-Modul kann einen HTTP-Server erstellen, der auf Server-Ports lauscht und eine Antwort an den Client zurückgibt.
  //die Methode createServer(), verwenden wir um einen HTTP-Server zu erstellen.
  //Die Funktion, die an die Methode Http.createServer() übergeben wird, wird ausgeführt, wenn jemand versucht, auf den Computer auf Post 8100 zuzugreifen
  let server: Http.Server = Http.createServer();

  //handleRequest wird ausgeführt, wenn eine neue Anfrage über den Post aufkommt
  server.addListener("request", handleRequest);
  //handleListen wird ausgeführt, wenn der Server komplett neu gestartet wird
  server.addListener("listening", handleListen);
  //Startet den HTTP-Server, der auf Verbindungen wartet.
  server.listen(port);

  //Beschreibung von Listener
  function handleListen(): void {
    //wird nur einmal ausgegeben beim öffnen der Seite
    console.log("Listening");
  }

  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    console.log("I hear voices!");

    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");

    //Response-Antwort, Request-Anfrage
    _response.write(_request.url);

    //Diese Methode signalisiert dem Server, dass alle Antwortkopfzeilen und -körper gesendet wurden;
    //dieser Server sollte diese Nachricht als vollständig betrachten. Die Methode, response.end(), MUSS bei jeder Antwort aufgerufen werden.
    _response.end();
  }
}

//https://nodejs.org/api/http.html
