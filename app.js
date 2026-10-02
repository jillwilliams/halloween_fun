const clickButtonEl = document.getElementById("click_me")


const audio = new Audio("halloween_music.mp3")

clickButtonEl.addEventListener("click", () => {
    audio.play()
})

