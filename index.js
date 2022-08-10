const cards = [
    {
        'playAfter': 2000,
        'front': 'Topic - Network Protocols',
        'back': '',
    },
    {
        'front': 'What is a - Protocol?',
        'back': `- Set of rules for an interaction between two parties.
                - Example is communication between 2 humans when they cross each other.`
    },
    {
        'front': 'What is a handshake?',
        'back': '- Special TCP interaction, when one computer contacts to another.'
    },
    {
        'front': 'What is IP?',
        'back': `- Stands for Internet Protocol. 
                - This network protocol outlines how almost all machine-to-machine communication should happen in the world. 
                - Other protocol like TCP, UDP, HTTP are built on top of IP.`
    },
    {
        'front': `What is TCP? And how it's implemented?`,
        'back': `- Network Protocol built on top of IP. 
                - Allows for ordered, reliable data delivery between machines over the public internet by creating a connection
                - Usually implemented in kernel, which exposes sockets to application, that they can use to stream data through an open connection.`
    },
    {
        'front': `What is HTTP?`,
        'back': `- HyperText Transfer Prtocol is a very common network protocol implemented on top of TCP. 
                - Clients make HTTP requests and servers respond with a response.`
    },
    {
        'front': `What is an IP Packet(Network Packet)? And what it includes?`,
        'back': `- The smallest unit used to describe data being sent over IP, aside from bytes.
                - Consists of:
                - IP Header: contains source and destination IP addresses as well as other info related to the network.
                - Payload: just a data being send over the network.`
    },
    {
        'front': 'What does PATH?',
        'back': `- Separetes out logic in server.`
    },
    {
        'playAfter': 2000,
        'front': 'Topic: Latency and Throughput',
        'back': ``
    },
    {
        'front': 'Latency',
        'back': `Time taken for certain operation to complete in a system. Most often measures in time duration: milliseconds.
                - Reading 1 MB from RAM: 0.25ms
                - Reading 1 MB from SSD: 1ms
                - Transfer 1 MB over Network: 10ms
                - Reading 1 MB from HDD: 20ms
                - Inter-Continental Round Trip: 150ms`
    },
    {
        'front': 'Throughput',
        'back': `The number of operations that a system can handle properly per time unit.
                Throughput of server can be measured in: req/sec.`
    },
    {
        'playAfter': 2000,
        'front': 'Topic: Availability',
        'back': ``
    },
    {
        'front': 'Availability',
        'back': `The odds of server or service being up at any point in time. 
                Usually measures in: %
                99% server availability = 99% operational in time(two nines)`
    },
    {
        'front': 'High Availability',
        'back': `System that have level of high availability. Typically 5 nines or more.`
    },
    {
        'front': 'Nines',
        'back': `Percentages of uptime.
                99% - 87.7 hours down/year
                99.9% - 8.8 hours down/year
                99.99% - 52.6 minutes down/year
                99.999% - 5.3 minutes down/year`
    },
    {
        'front': 'Redundancy',
        'back': `Process of replicating parts of system in an effort to make it more reliable.`
    },
    {
        'front': 'SLA',
        'back': `Service Level Agreement.
                Collection of guarantees on system given to a customer. Are made up of +1 SLOs.`
    },
    {
        'front': 'SLO',
        'back': `Service Level Objective.
                Guarantee given by a service provider. 
                Not a collection as SLA.`
    },
    {
        'front': '',
        'back': ``
    },
]


const wait = ms => new Promise(resolve => setTimeout(resolve, ms));


function playSystemDesign() {
    try {
        const synth = window.speechSynthesis;
        if (synth.speaking) {
            synth.cancel();
        }

        const defaultTimeInterval = 40000;
        wait(2000);
        for (let i = 0; i < cards.length; i++) {
            const utterFront = new SpeechSynthesisUtterance(cards[i]['front']);
            // utterFront.rate = rate.value;
            utterFront.rate = 0.8;
            synth.speak(utterFront);
            wait(cards[i]['playAfter'] || defaultTimeInterval);

            const utterBack = new SpeechSynthesisUtterance(cards[i]['back']);
            // utterBack.rate = rate.value;
            utterBack.rate = 0.8;
            synth.speak(utterBack);
            wait(cards[i]['playAfter'] || defaultTimeInterval);
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