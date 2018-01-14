/**
* @Module HaveANiceDay
* @author Valeriya Tokareva <tkrv.valery@gmail.com>
* @version 0.1.0
**/

const joke = require('one-liner-joke');
const weather = require('weather-js');
const readline = require('readline');
const question = "Hello! ｡◕‿◕｡\nWhat a lovely day! Let's check weather!\nPlease type in your city and country:\n";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(question, (answer) => {
  if (answer && answer !== ' '){
    const city = answer.charAt(0).toUpperCase() + answer.slice(1);
    let randomJoke = joke.getRandomJoke();
    console.log(`Excelent! We are checking the weather in ${city} now.\n(∩｀-´)⊃━☆ﾟ.*･｡ﾟ`);

    weather.find({search: city, degreeType: 'C'}, function(err, result) {
      if(err) console.log(err);
     
      // console.log(JSON.stringify(result, null, 2));
      console.log(`There is ${result[0].current.temperature} in ${city}. Feels like ${result[0].current.feelslike}.
Mostly ${result[0].current.skytext.toLowerCase()}. Tomorrow will be ${result[0].forecast[0].low} - ${result[0].forecast[0].high}.
Joke of the day: 
${randomJoke.body}
Have a nice day!`);
    });
  } else {
    console.log('Sorry, but you have not typed in your city name.');
  }
  rl.close();
});

