<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById('main-audio');
    const playBtn = document.getElementById('play-pause');
    const pBar = document.getElementById('pbar');
    const vBar = document.getElementById('vbar');
    const likeBtn = document.getElementById('like-btn'); // Naya Heart Button

    // 1. Tera 12 Gaano ka Data
    const songs = [
        { name: "Hanuman Chalisa", artist: "Gulshan Kumar", src: "./assets/music.mp3", img: "./assets/card1img.jpeg" },
        { name: "Song 2", artist: "Artist 2", src: "./assets/song2.mp3", img: "./assets/card2img.jpeg" },
        { name: "Song 3", artist: "Rohit_Sangwan", src: "./assets/song3.mp3", img: "./assets/card3img.jpeg" },
        { name: "Song 4", artist: "Artist 4", src: "./assets/song4.mp3", img: "./assets/card4img.jpeg" },
        { name: "Song 5", artist: "Artist 5", src: "./assets/song5.mp3", img: "./assets/card5img.jpeg" },
        { name: "Song 6", artist: "Artist 6", src: "./assets/song2.mp3", img: "./assets/card6img.jpeg" },
        { name: "Song 7", artist: "Artist 7", src: "./assets/song3.mp3", img: "./assets/card2img.jpeg" },
        { name: "Song 8", artist: "Artist 8", src: "./assets/song4.mp3", img: "./assets/card1img.jpeg" },
        { name: "Song 9", artist: "Artist 9", src: "./assets/song5.mp3", img: "./assets/card4img.jpeg" },
        { name: "Song 10", artist: "Artist 10", src: "./assets/song2.mp3", img: "./assets/card1img.jpeg" },
        { name: "Song 11", artist: "Artist 11", src: "./assets/song3.mp3", img: "./assets/card5img.jpeg" },
        { name: "Song 12", artist: "Artist 12", src: "./assets/song4.mp3", img: "./assets/card3img.jpeg" }
    ];

    let currentIdx = 0;

    // 2. Like/Unlike Toggle Logic (Dill wala feature)
    if (likeBtn) {
        likeBtn.onclick = () => {
            if (likeBtn.classList.contains('fa-regular')) {
                // Like karna (Solid fill aur green color)
                likeBtn.classList.replace('fa-regular', 'fa-solid');
                likeBtn.style.color = "#1db954"; 
            } else {
                // Unlike karna (Outline aur white color)
                likeBtn.classList.replace('fa-solid', 'fa-regular');
                likeBtn.style.color = "#ffffff";
            }
            // Chota sa dhakka effect (animation)
            likeBtn.style.transform = "scale(1.3)";
            setTimeout(() => likeBtn.style.transform = "scale(1)", 150);
        };
    }

    // 3. Loop jo 12 cards banayega (Play icon ke saath)
    function loadCards() {
        // Rows ko clear karna zaroori hai
        document.getElementById('recent-row').innerHTML = "";
        document.getElementById('trending-row').innerHTML = "";
        document.getElementById('more-row').innerHTML = "";

        songs.forEach((song, i) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div class="play-icon"><i class="fa-solid fa-play"></i></div>
                <img src="${song.img}">
                <p style="font-weight:700; margin-top:10px; margin-bottom:5px;">${song.name}</p>
                <p style="font-size:12px; opacity:0.7;">${song.artist}</p>
            `;
            
            card.onclick = () => loadSong(i);

            if (i < 4) document.getElementById('recent-row').appendChild(card);
            else if (i < 8) document.getElementById('trending-row').appendChild(card);
            else document.getElementById('more-row').appendChild(card);
        });
    }

    // 4. Gaana Load karne ka function (Layout fix ke liye selectors sahi kiye hain)
    function loadSong(idx) {
        currentIdx = idx;
        audio.src = songs[idx].src;
        
        // Music Bar Update (Photo, Name, Artist)
        document.querySelector('.music-pic').src = songs[idx].img;
        document.querySelector('.first').innerText = songs[idx].name;
        document.querySelector('.second').innerText = songs[idx].artist;
        
        // Har baar naya song load ho to dil reset ho jaye (optional)
        likeBtn.classList.replace('fa-solid', 'fa-regular');
        likeBtn.style.color = "#ffffff";

        audio.play();
        playBtn.classList.replace('fa-circle-play', 'fa-circle-pause');
    }

    // 5. Player Controls
    playBtn.onclick = () => {
        if (audio.paused) {
            audio.play();
            playBtn.classList.replace('fa-circle-play', 'fa-circle-pause');
        } else {
            audio.pause();
            playBtn.classList.replace('fa-circle-pause', 'fa-circle-play');
        }
    };

    document.getElementById('next').onclick = () => loadSong((currentIdx + 1) % songs.length);
    document.getElementById('prev').onclick = () => loadSong((currentIdx - 1 + songs.length) % songs.length);

    // 6. Volume & Progress Bar
    vBar.oninput = () => audio.volume = vBar.value / 100;
    
    audio.ontimeupdate = () => {
        pBar.value = (audio.currentTime / audio.duration) * 100 || 0;
        let mins = Math.floor(audio.currentTime / 60);
        let secs = Math.floor(audio.currentTime % 60);
        document.getElementById('curr-time').innerText = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    pBar.oninput = () => audio.currentTime = (pBar.value / 100) * audio.duration;

    loadCards();
=======
document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById('main-audio');
    const playBtn = document.getElementById('play-pause');
    const pBar = document.getElementById('pbar');
    const vBar = document.getElementById('vbar');
    const likeBtn = document.getElementById('like-btn'); // Naya Heart Button

    // 1. Tera 12 Gaano ka Data
    const songs = [
        { name: "Hanuman Chalisa", artist: "Gulshan Kumar", src: "./assets/music.mp3", img: "./assets/card1img.jpeg" },
        { name: "Song 2", artist: "Artist 2", src: "./assets/song2.mp3", img: "./assets/card2img.jpeg" },
        { name: "Song 3", artist: "Rohit_Sangwan", src: "./assets/song3.mp3", img: "./assets/card3img.jpeg" },
        { name: "Song 4", artist: "Artist 4", src: "./assets/song4.mp3", img: "./assets/card4img.jpeg" },
        { name: "Song 5", artist: "Artist 5", src: "./assets/song5.mp3", img: "./assets/card5img.jpeg" },
        { name: "Song 6", artist: "Artist 6", src: "./assets/song2.mp3", img: "./assets/card6img.jpeg" },
        { name: "Song 7", artist: "Artist 7", src: "./assets/song3.mp3", img: "./assets/card2img.jpeg" },
        { name: "Song 8", artist: "Artist 8", src: "./assets/song4.mp3", img: "./assets/card1img.jpeg" },
        { name: "Song 9", artist: "Artist 9", src: "./assets/song5.mp3", img: "./assets/card4img.jpeg" },
        { name: "Song 10", artist: "Artist 10", src: "./assets/song2.mp3", img: "./assets/card1img.jpeg" },
        { name: "Song 11", artist: "Artist 11", src: "./assets/song3.mp3", img: "./assets/card5img.jpeg" },
        { name: "Song 12", artist: "Artist 12", src: "./assets/song4.mp3", img: "./assets/card3img.jpeg" }
    ];

    let currentIdx = 0;

    // 2. Like/Unlike Toggle Logic (Dill wala feature)
    if (likeBtn) {
        likeBtn.onclick = () => {
            if (likeBtn.classList.contains('fa-regular')) {
                // Like karna (Solid fill aur green color)
                likeBtn.classList.replace('fa-regular', 'fa-solid');
                likeBtn.style.color = "#1db954"; 
            } else {
                // Unlike karna (Outline aur white color)
                likeBtn.classList.replace('fa-solid', 'fa-regular');
                likeBtn.style.color = "#ffffff";
            }
            // Chota sa dhakka effect (animation)
            likeBtn.style.transform = "scale(1.3)";
            setTimeout(() => likeBtn.style.transform = "scale(1)", 150);
        };
    }

    // 3. Loop jo 12 cards banayega (Play icon ke saath)
    function loadCards() {
        // Rows ko clear karna zaroori hai
        document.getElementById('recent-row').innerHTML = "";
        document.getElementById('trending-row').innerHTML = "";
        document.getElementById('more-row').innerHTML = "";

        songs.forEach((song, i) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div class="play-icon"><i class="fa-solid fa-play"></i></div>
                <img src="${song.img}">
                <p style="font-weight:700; margin-top:10px; margin-bottom:5px;">${song.name}</p>
                <p style="font-size:12px; opacity:0.7;">${song.artist}</p>
            `;
            
            card.onclick = () => loadSong(i);

            if (i < 4) document.getElementById('recent-row').appendChild(card);
            else if (i < 8) document.getElementById('trending-row').appendChild(card);
            else document.getElementById('more-row').appendChild(card);
        });
    }

    // 4. Gaana Load karne ka function (Layout fix ke liye selectors sahi kiye hain)
    function loadSong(idx) {
        currentIdx = idx;
        audio.src = songs[idx].src;
        
        // Music Bar Update (Photo, Name, Artist)
        document.querySelector('.music-pic').src = songs[idx].img;
        document.querySelector('.first').innerText = songs[idx].name;
        document.querySelector('.second').innerText = songs[idx].artist;
        
        // Har baar naya song load ho to dil reset ho jaye (optional)
        likeBtn.classList.replace('fa-solid', 'fa-regular');
        likeBtn.style.color = "#ffffff";

        audio.play();
        playBtn.classList.replace('fa-circle-play', 'fa-circle-pause');
    }

    // 5. Player Controls
    playBtn.onclick = () => {
        if (audio.paused) {
            audio.play();
            playBtn.classList.replace('fa-circle-play', 'fa-circle-pause');
        } else {
            audio.pause();
            playBtn.classList.replace('fa-circle-pause', 'fa-circle-play');
        }
    };

    document.getElementById('next').onclick = () => loadSong((currentIdx + 1) % songs.length);
    document.getElementById('prev').onclick = () => loadSong((currentIdx - 1 + songs.length) % songs.length);

    // 6. Volume & Progress Bar
    vBar.oninput = () => audio.volume = vBar.value / 100;
    
    audio.ontimeupdate = () => {
        pBar.value = (audio.currentTime / audio.duration) * 100 || 0;
        let mins = Math.floor(audio.currentTime / 60);
        let secs = Math.floor(audio.currentTime % 60);
        document.getElementById('curr-time').innerText = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    pBar.oninput = () => audio.currentTime = (pBar.value / 100) * audio.duration;

    loadCards();
>>>>>>> 0566cf383763483922490a6c7f4af56733d40be8
});