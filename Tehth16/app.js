var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;

//-------------------------------------------------------------------------

//A
/*
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Anna ensimmäinen luku: ', (luku1) => {
  rl.question('Anna toinen luku: ', (luku2) => {
    
    luku1 = parseFloat(luku1);
    luku2 = parseFloat(luku2);

    if (isNaN(luku1) || isNaN(luku2)) {
        console.log("Syötä voimassa olevat numerot.");
    } else {
        const suurempiLuku = luku1 > luku2 ? luku1 : luku2;
        console.log("Suurempi luku on: " + suurempiLuku);
    }

    rl.close();
  });
});
*/

//--------------------------------------------------------------------------

//B
//Seuraava toimii "nettisivulla"

/*
function onPalindromi(sana) {

  sana = sana.replace(/\s/g, '').toLowerCase();

  const kaannettySana = sana.split('').reverse().join('');
  
  return sana === kaannettySana;
}

const annettuSana = prompt("Anna sana:");

if (onPalindromi(annettuSana)) {
  console.log(`${annettuSana} on palindromi.`);
} else {
  console.log(`${annettuSana} ei ole palindromi.`);
}
*/
//--------------------------------------------------------------------------

//B

const readline = require('readline');

const rlCreateI = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function onPalindromi(sana){
  sana = sana.replace(/\s/g, '').toLowerCase();

  const reversedsana = sana.split('').reverse().join('');

  if(sana===reversedsana){
    return true;
  }
  else{
    return false;
  }
}

rlCreateI.question('anna sana ',(sana) => {
  if(onPalindromi(sana)){
    console.log(`${sana} on palindromi`);
  }
  else{
    console.log(`${sana} ei ole palindromi`);
  }
  rlCreateI.close();
});
