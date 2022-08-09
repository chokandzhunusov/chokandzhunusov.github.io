const wait = ms => new Promise(resolve => setTimeout(resolve, ms));


async function playSystemDesign() {
    try {
        const synth = window.speechSynthesis;
        if (synth.speaking) {
            synth.cancel();
        }

        const defaultTimeInterval = 40000;
        await wait(2000);
        for (let i = 0; i < cards.length; i++) {
            const utterFront = new SpeechSynthesisUtterance(cards[i]['front']);
            // utterFront.rate = rate.value;
            utterFront.rate = 0.8;
            synth.speak(utterFront);
            await wait(cards[i]['playAfter'] || defaultTimeInterval);

            const utterBack = new SpeechSynthesisUtterance(cards[i]['back']);
            // utterBack.rate = rate.value;
            utterBack.rate = 0.8;
            synth.speak(utterBack);
            await wait(cards[i]['playAfter'] || defaultTimeInterval);
        }
    } catch (e) {
        alert(e)
    }
}


async function playQuestions() {
    const rate = document.querySelector('#rate');
    const synth = window.speechSynthesis;
    if (synth.speaking) {
        synth.cancel();
    }

    const defaultTimeInterval = 90000;
    await wait(2000);
    for (let i = 0; i < questions.length; i++) {
        const utterFront = new SpeechSynthesisUtterance(questions[i]['front']);
        // utterFront.rate = rate.value;
        utterFront.rate = 0.8;
        synth.speak(utterFront);
        await wait(questions[i]['playAfter'] || defaultTimeInterval);

        const utterBack = new SpeechSynthesisUtterance(questions[i]['back']);
        // utterBack.rate = rate.value;
        utterBack.rate = 0.8;
        synth.speak(utterBack);
        await wait(questions[i]['playAfter'] || defaultTimeInterval);
    }
}

async function test() {
    alert('Works');
}