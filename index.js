const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
    console.log('QR CODE REÇU ! Scanne-le avec ton WhatsApp :');
});

client.on('ready', () => {
    console.log('Le Bot est en ligne et prêt !');
});

client.initialize();
