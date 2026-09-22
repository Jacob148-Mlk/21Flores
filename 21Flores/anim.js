const audio = document.querySelector("#song");
const lyrics = document.querySelector("#lyrics");


const lyricsData = [

    
    {
        time: 34.6,
        english: "When the lights go out",
        spanish: "Cuando las luces se apaguen"
    },

    {
        time: 35.5,
        english: "Will you take me with you",
        spanish: "¿Me llevarás contigo?"
    },
    {
        time: 39.5,
        english: "And carry all this broken bone",
        spanish: "Y cargarás todos estos huesos rotos"
    },
    {
        time: 44,
        english: "Through six years down in crowded rooms	",
        spanish: "A través de seis años en habitaciones abarrotadas"
    },
    {
        time: 49,
        english: "And highways I call home?	",
        spanish: "¿Y carreteras que llamo hogar?"
    },
    {
        time: 49.7,
        english: "It's something I can't know till now	",
        spanish: "Es algo que no pude comprender hasta ahora"
    },
    {
        time: 54.2,
        english: "Till you picked me off the ground",
        spanish: "Hasta que me levantaste del suelo"
    },
    {
        time: 58.3,
        english: "With brick in hand, your lip gloss smile	",
        spanish: " Con un ladrillo en la mano, tu sonrisa con brillo de labios"
    },
    {
        time: 61.3,
        english: "Your scraped up knees	",
        spanish: "Tus rodillas raspadas"
    },
    {
        time: 65.2,
        english: "And if you stay, I would even wait all night	",
        spanish: " Y si te quedas, esperaría incluso toda la noche"
    },
    {
        time: 72.2,
        english: "Or until my heart explodes	",
        spanish: "O hasta que mi corazón explote"
    },
    {
        time: 76.3,
        english: "How long until we find our way	",
        spanish: "¿Cuánto tiempo hasta que encontremos el camino?"
    },
    {
        time: 82.3,
        english: "In the dark and out of harm?",
        spanish: "En la oscuridad y lejos del peligro"
    },
    {
        time: 85.3,
        english: "You can run away with me ",
        spanish: "Puedes huir conmigo"
    },
    {
        time: 89,
        english: "Anytime you want",
        spanish: "Cuando tú lo desees"
    },
    {
        time: 91.3,
        english: "Terrified of what I'd be",
        spanish: "Aterrorizado por lo que podría ser"
    },
    {
        time: 95.3,
        english: "As a kid, from what I've seen	",
        spanish: "Desde niño, por todo lo que vi"
    },
    {
        time: 99.1,
        english: "Every single day, when people try	",
        spanish: "Cada día, cuando la gente intenta"
    },
    {
        time: 105.1,
        english: "And put the pieces back together	",
        spanish: "Reconstruir los pedazos"
    },
    {
        time: 106.2,
        english: "Just to smash them down",
        spanish: "Solo para volverlos a destrozar"
    },
    {
        time: 110.2,
        english: "Turn my headphones up real loud",
        spanish: "Subo el volumen de mis auriculares al máximo"
    },
    {
        time: 113.2,
        english: "I don't think I need them now	",
        spanish: "Creo que ya no los necesito"
    },
    {
        time: 117.3,
        english: "'Cause you stopped the noise	",
        spanish: "Porque tú detuviste el ruido"
    },
    {
        time: 120.2,
        english: "And if you stay, I would even wait all night	",
        spanish: "Y si te quedas, esperaría incluso toda la noche"
    },
    {
        time: 128.3,
        english: "Or until my heart explodes",
        spanish: "  O hasta que mi corazón explote"
    },
    {
        time: 131.3,
        english: "How long until we find our way",
        spanish: "  ¿Cuánto tiempo hasta que encontremos el camino?"
    },
    {
        time: 137.5,
        english: "In the dark and out of harm?",
        spanish: "En la oscuridad y lejos del peligro"
    },
    {
        time: 141.5,
        english: "You can run away with me",
        spanish: " Puedes huir conmigo"
    },
    {
        time: 144.4,
        english: "Anytime you want	",
        spanish: "Cuando tú lo desees"
    },
    {
        time: 151.6,
        english: "Well, anytime you want	",
        spanish: "Bueno, cuando tú lo desees"
    },
    {
        time: 158.2,
        english: "Well, anytime you want	",
        spanish: "Bueno, cuando tú lo desees"
    },
    {
        time: 189.6,
        english: "Don't walk away",
        spanish: "No te vayas"
    },
    {
        time: 191.4,
        english: "Don't walk away	",
        spanish: "No te vayas"
    },
    {
        time: 192.4,
        english: "Don't walk away	",
        spanish: "No te vayas"
    },
    {
        time: 193.5,
        english: "'Cause if you stay, I would even wait all night	",
        spanish: "Porque si te quedas, esperaría incluso toda la noche"
    },
    {
        time: 203.8,
        english: "Well or until my heart explodes	",
        spanish: "Bueno, o hasta que mi corazón explote"
    },
    {
        time: 204.5,
        english: "How long until we find our way",
        spanish: "¿Cuánto tiempo hasta que encontremos el camino?"
    },
    {
        time: 211.4,
        english: "In the dark and out of harm?	",
        spanish: "En la oscuridad y lejos del peligro"
    },
    {
        time: 214.7,
        english: "You can run away with me	",
        spanish: "Puedes huir conmigo"
    },
    {
        time: 218.5,
        english: "Or you can write it on your arm	",
        spanish: "O puedes escribirlo en tu brazo"
    },
    {
        time: 222.4,
        english: "You can run away with me",
        spanish: "  Puedes huir conmigo"
    },
    {
        time: 227.5,
        english: "Anytime you want",
        spanish: "Cuando tú lo desees"
    },

];



/*
====================================================
AJUSTE DE SINCRONIZACIÓN

Antes se redondeaba audio.currentTime al segundo
más cercano (Math.floor(currentTime + 0.5)), lo que
hacía que el subtítulo esperara hasta medio segundo
extra antes de cambiar, dando sensación de retraso.

Ahora se usa el tiempo exacto (con decimales) y se
suma un pequeño adelanto (LYRICS_LEAD) para que el
subtítulo aparezca justo a tiempo, sin ese rezago.
Si en algún punto lo sientes aún un poco atrasado o
adelantado, ajusta este valor.
====================================================
*/

const LYRICS_LEAD = 0.35;

function updateLyrics() {

    if (!audio || !lyrics) {
        return;
    }

    const currentTime = audio.currentTime + LYRICS_LEAD;

    const currentLine = lyricsData.find(
        line =>
            currentTime >= line.time &&
            currentTime < line.time + 6
    );


    if (currentLine) {

        lyrics.classList.remove("lyrics-hidden");

        lyrics.innerHTML = `

            <div class="lyrics-english">
                ${currentLine.english}
            </div>

            <div class="lyrics-spanish">
                ${currentLine.spanish}
            </div>

        `;

    } else {

        lyrics.classList.add("lyrics-hidden");

        lyrics.innerHTML = "";

    }

}


/*
====================================================
ACTUALIZAR
====================================================
*/

if (audio) {

    audio.addEventListener(
        "timeupdate",
        updateLyrics
    );

    audio.addEventListener(
        "seeked",
        updateLyrics
    );

}


/*
====================================================
MENSAJE FINAL
====================================================
*/

function showFinalMessage() {

    document.body.classList.add("show-final");

}

if (audio) {

    audio.addEventListener(
        "ended",
        showFinalMessage
    );

}