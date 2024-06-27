import mqtt from "mqtt";
import { port } from "./ports.mjs";

function connect() {
    const client = mqtt.connect(`mqtt://localhost:${port}`);
    client.on("connect", () => {
        console.log("Connected to MQTT broker");
        let i = 0;
        setInterval(() => {
            client.publish("topic/one", `Hello from MQTT client ${i} times`, {qos: 1});
            i += 1;
        }, 1000 * 3);
    });
    client.on("message", (topic, message) => {
        console.log(`${topic} Received message: ${message.toString()}`);
    });
}

connect();