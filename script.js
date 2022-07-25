const submit = document.getElementById ("submit-btn")

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

let ayText = ""
let beforeText = ""

function translateByWord (text) {
    let i = 0
    let word = ""

    if (vowels.includes (text[0])) {
        word = beforeText + ayText

        word = text + "yay"
    }
    else {
        for (; i < text.length && !(vowels.includes (text[i])); i++) {
            ayText += text[i]
        }
    
        for (;i < text.length; i++) {
            beforeText += text[i]
        }
    
        ayText += "ay"
    
        word = beforeText + ayText
    
        ayText = ""
        beforeText = ""
    }

    return word
}

submit.addEventListener ("click", () => {
    const inputText = document.getElementById ("input-text").value
    const outputText = document.getElementById ("output-text")

    let currentText = ""
    let finalText = ""

    for (let i = 0; i < inputText.length; i++) {
        if (inputText[i] === " ") {
            finalText += translateByWord (currentText) + " "
            
            currentText = ""
        }
        else currentText += inputText[i]
    }

    outputText.value = finalText
    finalText = ""
    currentText = ""
}) 
 