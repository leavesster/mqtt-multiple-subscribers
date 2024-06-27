import mqtt from "mqtt";
import { port } from "./ports.mjs";

function connect() {
    const client = mqtt.connect(`mqtt://localhost:${port}`);
    client.on("connect", () => {
        console.log("Connected to MQTT broker");
        client.subscribe("topic/one", {qos: 1});
    });
    client.on("message", (topic, message) => {
        console.log(`${topic} Received message: ${message.toString()}`);
    });
}

connect();