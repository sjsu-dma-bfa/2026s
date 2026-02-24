

//ensure that our js only after the HTML content is loaded 
document.addEventListener("DOMContentLoaded", function () {

    var glow = document.querySelector('.glow-img');
    // for desktop 
    glow.addEventListener("mouseover", event => startRain(event));
    //for phone 
    glow.addEventListener("touchstart", event => startRain(event));
    function startRain() {
        const canvas = document.getElementById('matrix');
        const context = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const symbols = '♀♂⚧⚣⚤⚢♁☹☺☻ツシ⍥⍨☠ꆜ⍣♥♡⇩☊☋☁ϟ♩♪♫♬♭♮♯ø♤♠♧♣♡♥♢♦☎☏✉☟✧✦❃✤✿❀ੈ✩‧₊ฅ^._.^ฅ˚・❥・ˏˋ°•*⁀➷｡𖦹°‧ִ ࣪𖤐°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･˙ ͜ʟ˙◀▲▶▼©®℗✎✐↓✓✗☑☒❣✆❂꧁꧂ꕥ'; 
        const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const nums = '0123456789';

        const alphabet = symbols + latin + nums;

        const fontSize = 16;
        const columns = canvas.width / fontSize;

        const rainDrops = [];

        for (let x = 0; x < columns; x++) {
            rainDrops[x] = 1;
        }

        const draw = () => {
            context.fillStyle = 'rgba(13, 1, 32, 0.23)';
            context.fillRect(0, 0, canvas.width, canvas.height);

            context.fillStyle = 'rgba(0, 255, 0, 1)';
            context.font = fontSize + 'px monospace';

            for (let i = 0; i < rainDrops.length; i++) {
                const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

                if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    rainDrops[i] = 0;
                }
                rainDrops[i]++;
            }
        };

        setInterval(draw, 80);
    }
})

