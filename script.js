// script.js

// Function to be executed after the delay
function showContent() {
    // Show the content div by setting its display property to 'flex'
    document.getElementById('content').style.display = 'flex';
}
function showContent2() {
    // Show the content div by setting its display property to 'flex'
    document.getElementsById('animated-text2').style.display = 'none';
}

// Function to switch video with a delay
function switchVideo() {
    var video = document.getElementById('video-background');
    var initialSource = document.getElementById('initial-source');
    var initialSourceWebm = document.getElementById('initial-source-webm');

    // Check if the first video has been played
    if (initialSource.getAttribute('src') === 'assets/your-video.mp4') {
        // Update the source to the reversed version
        initialSource.setAttribute('src', 'assets/cars_reversed.mp4');
        initialSourceWebm.setAttribute('src', 'assets/cars_reversed.webm');
    } else if (initialSource.getAttribute('src') === 'assets/cars_reversed.mp4') {
        // Switch back to the forward version after a delay
        setTimeout(function () {
            initialSource.setAttribute('src', 'assets/cars.mp4');
            initialSourceWebm.setAttribute('src', 'assets/cars.webm');
            // Load and play the updated video
            video.load();
            video.play();
        }, 1000); // Delay of 2 seconds
        return;
    } else if (initialSource.getAttribute('src') === 'assets/cars.mp4') {
        // Switch back to the reversed version after a delay
        setTimeout(function () {
            initialSource.setAttribute('src', 'assets/cars_reversed.mp4');
            initialSourceWebm.setAttribute('src', 'assets/cars_reversed.webm');
            // Load and play the updated video
            video.load();
            video.play();
        }, 1000); // Delay of 2 seconds
        return;
    }

    // Load and play the updated video
    video.load();
    video.play();
}



// Initial setup to delay the display of the content div by 2 seconds
setTimeout(showContent, 3500);
setTimeout(showContent2, 55000);

document.addEventListener('DOMContentLoaded', function () {
    const text = document.querySelector('.animated-text');
    const textContent = text.textContent;
    text.textContent = '';
  
    for (let i = 0; i < textContent.length; i++) {
      const letter = document.createElement('span');
      letter.textContent = textContent[i];
      letter.style.animationDelay = `${i * 0.1}s`;
      text.appendChild(letter);
    }
  });
