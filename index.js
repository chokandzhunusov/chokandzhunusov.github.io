const wait = ms => new Promise(resolve => setTimeout(resolve, ms));


async function myFunction() {
    const rate = document.querySelector('#rate');
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
}
