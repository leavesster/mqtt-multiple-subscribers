import Aedes from "aedes";
import { createServer } from "node:net";

function listen(port) {
  const aedes = new Aedes();
  const server = createServer(aedes.handle);
  server.listen(port, () => {
    console.log("MQTT broker listening on port ", port);
  });
  aedes.on("clientError", (client, err) => {
    console.log("clientError", client.id, err.message);
  });
  aedes.on("client", client => {
    console.log("client connected", client.id);
  });
  aedes.on("clientDisconnect", client => {
    console.log("client disconnected", client.id);
  });
  aedes.on("subscribe", (subscriptions, client) => {
    console.log("subscribe from client", subscriptions, client.id);
  });

  // aedes.subscribe(
  //   "#",
  //   (packet, callback) => {
  //     if (!packet.topic.startsWith("$SYS")) {
  //       console.log(
  //         "date:",
  //         new Date().toLocaleString(),
  //         "topic:",
  //         packet.topic,
  //         "cmd:",
  //         packet.cmd,
  //         "payload:",
  //         packet.payload.toString()
  //       );
  //     }
  //     callback();
  //   },
  //   () => {
  //     console.log("Subscribed to all topics");
  //   }
  // );

  // let i = 0;
  // setInterval(() => {
  //   aedes.publish({
  //     topic: "topic/one",
  //     payload: (`Hello from MQTT broker ${i} times!`),
  //     qos: 1,
  //   });
  //   i++;
  // }, 1000 * 3);
  return () =>
    new Promise((resolve, reject) =>
      server.close(err => (err ? resolve() : reject(err)))
    );
}

export { listen };
