const txtArtist = document.querySelector('#txtartist')
const txtMusic = document.querySelector('#txtmusic')
const btn = document.querySelector('#btn')

const title = document.querySelector("#title")
const lyric = document.querySelector("#lyric")
const artist = document.querySelector("#artist")

btn.addEventListener('click', () => {
    lyrics()
    async function lyrics() {
        try {
            const message = await fetch(`https://api.vagalume.com.br/search.php?art=${txtArtist.value}&mus=${txtMusic.value}&apikey={key}`)
            const data = await message.json()
            addLyric(data)
        } catch {
            warningModal()
        }
    }
})

function addLyric(data) {
    title.innerText = data.mus[0].name
    lyric.innerText = data.mus[0].text
    artist.innerText = data.art.name
}

//MODAL

const modalContainer = document.querySelector(".background-modal")
const modal = document.querySelector(".modal")
const closeButton = document.querySelector(".modal-content button")

function warningModal() {
    modalContainer.classList.add('active')
    modal.classList.add('active')

    closeButton.addEventListener('click', () => {
        modalContainer.classList.remove('active')
        modal.classList.remove('active')
    })
}


