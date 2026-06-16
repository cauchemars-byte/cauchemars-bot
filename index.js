const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,
        executablePath: "/opt/render/project/src/.puppeteer/chrome/linux-127.0.6533.88/chrome-linux64/chrome",
        args: [
            "--no-sandbox",
            "--disable-setuid-sandbox",
            "--disable-dev-shm-usage",
            "--disable-gpu",
            "--disable-software-rasterizer"
        ]
    }
});

// Empêche le crash à cause du QR code
client.on('qr', () => {
    console.log("QR reçu (Render ne peut pas l'afficher). Utilise une session déjà générée.");
});

// Log quand la session est prête
client.on('ready', () => {
    console.log("Bot WhatsApp prêt et connecté !");
});

// Exemple de réponse automatique
client.on('message', async msg => {
    console.log(`Message reçu : ${msg.body}`);

    if (msg.body.toLowerCase() === "ping") {
        await msg.reply("pong");
    }
});

// Démarrage du bot
client.initialize();
