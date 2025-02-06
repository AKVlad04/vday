document.querySelector('.yes-button').addEventListener('click', function() {
    // Trigger a larger confetti animation
    function createConfetti() {
        confetti({
            particleCount: 300, // Increase number of confetti pieces
            spread: 100,        // Increase spread
            scalar: 1.5,        // Make the confetti bigger
            origin: { x: 0.5, y: 0.5 } // Center confetti
        });
    }

    // Start the confetti animation loop
    setInterval(createConfetti, 1000); // Create confetti every second

    // Hide main content and show GIF container
    document.querySelector('h1').style.display = 'none';
    document.querySelector('.buttons-container').style.display = 'none';
    const gifContainer = document.getElementById('gif-container');
    gifContainer.style.display = 'flex';
    gifContainer.style.opacity = 1; // Fade in the container

    // Change GIF every 2 seconds with smooth transition
    function changeGif() {
        const gif = document.getElementById('gif');
        gif.style.opacity = 0; // Start fading out current GIF

        setTimeout(() => {
            // Change GIF source
            gif.src = gifs[currentGif];
            gif.style.opacity = 1; // Fade in the new GIF

            currentGif = (currentGif + 1) % gifs.length; // Loop through the GIFs
        }, 500); // 500ms delay to allow fading out effect

        // Change GIF every 2 seconds
        setTimeout(changeGif, 2000); // 2000ms = 2 seconds
    }

    // Start the GIF loop
    changeGif();
});
