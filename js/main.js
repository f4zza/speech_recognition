window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

const recognition = new SpeechRecognition()
recognition.interimResults = true
recognition.lang = 'en-UK'

let p = document.createElement('p')
const words = document.querySelector('.words')
words.appendChild('p')

recognition.addEventListener('result', e=> {
    const transcript = Array.from(e.results)
        .map(result=> result[0])
        .map(result=> result.transcript)
        .join('')
})

const lameScript = transcript.replace(/kiss|piss|hiss|diss/gi, '😒')
p.textContent = lameScript

if(e.results[0].isFinal){
    p = document.createElement('p')
    words.appendChild('p')
}

recognition.addEventListener('end', recognition.start)

recognition.start()