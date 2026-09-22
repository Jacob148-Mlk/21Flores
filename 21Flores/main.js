document.addEventListener("DOMContentLoaded", () => {

    document.body.classList.remove("container");

    const audio = document.querySelector("#song");
    const status = document.querySelector("#play-status");
    const listenMessage = document.querySelector("#listen-message");

    const flowers = [
        document.querySelector(".flower--1"),
        document.querySelector(".flower--2"),
        document.querySelector(".flower--3")
    ];

    if (!audio) {
        return;
    }


    /*
    ==================================================
    REPRODUCCIÓN AUTOMÁTICA

    Los navegadores a veces bloquean el autoplay con
    sonido si el usuario no ha interactuado antes con
    la página. Por eso primero se intenta reproducir
    directamente y, si el navegador lo bloquea, se
    reproduce en cuanto el usuario toque/haga clic en
    cualquier parte de la página (una sola vez).
    ==================================================
    */

    function tryAutoplay() {

        const playPromise = audio.play();

        if (playPromise !== undefined) {

            playPromise.catch(() => {

                const startOnInteraction = () => {

                    audio.play();

                    document.removeEventListener("click", startOnInteraction);
                    document.removeEventListener("touchstart", startOnInteraction);
                    document.removeEventListener("keydown", startOnInteraction);

                };

                document.addEventListener("click", startOnInteraction, { once: true });
                document.addEventListener("touchstart", startOnInteraction, { once: true });
                document.addEventListener("keydown", startOnInteraction, { once: true });

            });

        }

    }

    tryAutoplay();


    /*
    ==================================================
    TIEMPOS DE APARICIÓN DE LAS FLORES

    Puedes cambiarlos cuando tengas la canción
    exactamente como quieres.

    ==================================================
    */

    const flowerTimes = [
        5,
        20,
        38
    ];

    function updateScene() {

        const currentTime = audio.currentTime;

        /*
        -----------------------------
        FLORES
        -----------------------------
        */

        flowers.forEach((flower, index) => {

            if (!flower) {
                return;
            }

            if (currentTime >= flowerTimes[index]) {

                flower.classList.add("song-bloom");

            } else {

                flower.classList.remove("song-bloom");

            }

        });


        /*
        -----------------------------
        ESTADO DEL REPRODUCTOR
        -----------------------------
        */

        if (!audio.paused) {

            status.textContent = "PLAYING";

        } else {

            status.textContent = "PAUSED";

        }


        /*
        -----------------------------
        MENSAJE "ESCUCHA HASTA EL FINAL"
        -----------------------------
        */

        if (currentTime > 15) {

            listenMessage.classList.add("hide-listen");

        } else {

            listenMessage.classList.remove("hide-listen");

        }

    }


    audio.addEventListener("timeupdate", updateScene);

    audio.addEventListener("play", updateScene);

    audio.addEventListener("pause", updateScene);

    audio.addEventListener("seeked", updateScene);


    /*
    ================================================
    CUANDO TERMINA LA CANCIÓN
    ================================================
    */

    audio.addEventListener("ended", () => {

        status.textContent = "END";

        document.body.classList.add("song-finished");

    });


    /*
    ================================================
    INICIO
    ================================================
    */

    updateScene();

});