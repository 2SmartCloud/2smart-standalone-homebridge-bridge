const fs = require('fs');

try{
    var homebrdige = require('/etc/config.json');

    homebrdige.accessories.forEach((node) => {
        node.url = 'mqtt://localhost:1883';
        node.username = process.env.MQTT_USER || undefined;
        node.password = process.env.MQTT_PASS || undefined;
    });

    let data = JSON.stringify(homebrdige);
    fs.writeFileSync('config.json', data);
    console.log(JSON.stringify({ level: 'info', message: 'VoiceControlBridge.generateConfig: Config updated!' }));
} catch (err) {
    console.log(JSON.stringify({ level: 'error', message: err.message }));
    process.exit(1);
}