// Function that gets # from 0 -> num - 1

const generateRandomNumber = (num) => {
    return Math.floor(Math.random() * num)
}

const motivationalQuote = {
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    motivationQuote:["My message is to train hard, don't be a hard cunt, enjoy life and don't take yourself too seriously. - Zyzz", "There are normal people. There are try hards. There are hard cunts. Then there are sick cunts. Sick cunts are the best, friendly, sexy, aesthetic, party hard and live it up without being staunch and get along with everyone. - Zyzz", "Everyone has a little bit of Zyzz in them. -Zyzz", "Stop giving a fuck what girls think and say whatever the fuck you want to say and do whatever you want to do. - Zyzz", "Learn as if you will live forever, live like you will die tomorrow. — Mahatma Gandhi", "Success is not final; failure is not fatal: It is the courage to continue that counts. — Winston S. Churchill", "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you. — Steve Jobs"],
    dailyGoals:['exersise for 1 hour', 'meditate for 15-30 minutes', 'read for 30 minutes to 1 hour before you go to bed', 'get off your phone early tonight', "take a 'me' day", 'learn something new', 'write out your goals for the day and check them off as you finish them or for the year'],
    songs:['Greek Gods - Tevvez', 'Spectre - Tevvez', 'Throne - Tevvez', 'Outerspace - BEAUZ,Dallas', 'HALO - Sub Zero Project', 'Brave Lover (Xense Bootleg) - Arty ft. Conrad', 'Legend - Tevvez']
    }

// Store the 'motivation' in array 
let personalMotivation = []
//Interate over the object
for (let prop in motivationalQuote) {
    let optionIndex = generateRandomNumber(motivationalQuote[prop].length)

// used object properties to customize message that is added to personalMotivation 
switch(prop) {
    case 'dayOfWeek':
        personalMotivation.push(`It is "${motivationalQuote[prop][optionIndex]}". `)
        break
    case 'motivationQuote': 
        personalMotivation.push(`Your motivational quote is "${motivationalQuote[prop][optionIndex]}".`)
        break
    case 'dailyGoals': 
        personalMotivation.push(`Today your daily goals are "${motivationalQuote[prop][optionIndex]}".`)
        break
    case 'songs':
        personalMotivation.push(`Here is a song to start the day"${motivationalQuote[prop][optionIndex]}".`)
        break 
    default:
        personalMotivation.push('Please enter more information.')
        }

    }

    function formatMotivation(motivation) {


    const formatted = personalMotivation.join('\n')
    console.log(formatted)
    }

    formatMotivation(personalMotivation);
