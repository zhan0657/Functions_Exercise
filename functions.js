/*
Bi Zhang
June 17, 2020
*/

// This function returns a random number between (and including both) minimum and maximum
function getRandomInteger (minimum, maximum) {
  minimum = Math.ceil(minimum) // minimum is inclusive
  maximum = Math.floor(maximum + 1) // maximum is exclusive so we add one
  return Math.floor(Math.random() * (maximum - minimum)) + minimum
}

// Povided Arrays
const nouns = ['dragons', 'toasters', 'nuns', 'kings', 'queens', 'princes', 'princesses', 'servants', 'monks', 'knights']

const verbs = ['bit', 'cooked', 'laughed at', 'danced with', 'broke', 'bought', 'cursed', 'hit', 'ate', 'killed']

const adverbs = ['menacingly', 'intentionally', 'peacefully', 'gratefully', 'occasionally', 'mercifully', 'constantly', 'eventually', 'directly', 'badly']

const adjectives = ['wild', 'fantastic', 'delicious', 'cold', 'evil', 'greedy', 'romantic', 'dishonest', 'careless', 'brutal']

const proNouns = ['they', 'we', 'you', 'he', 'she', 'I', 'it']

const openings = ['Once upon a time', 'I watched', 'Yesterday', 'Last summer', 'This morning', 'Last century', 'last Christmas', 'Do you believe that', 'I bet you never saw', 'I heard that']

const closings = ['with extra cheese', 'with COVID-19', 'in the sky', 'on TV', 'in your bedroom', 'with fried chicken', 'in the classroom', 'on the roof', 'with a spoon', 'on facebook']


function createRandomSentence (){
  const randomSentence = openings[ getRandomInteger(0, openings.length - 1)] + ' ' + 
  proNouns[ getRandomInteger(0, proNouns.length - 1)] + ' ' +
  verbs[ getRandomInteger(0, verbs.length - 1)] + ' ' +
  adjectives[ getRandomInteger(0, adjectives.length - 1)] + ' ' +
  nouns[ getRandomInteger(0, nouns.length - 1)] + ' ' +
  adverbs[ getRandomInteger(0, adverbs.length - 1)] + ' ' +
  closings[ getRandomInteger(0, closings.length - 1)] + '.' 

  return randomSentence
}

function outputSentence(sentence){
  console.log(sentence)
}

const numbeOfSentence = 10
for(let i = 0; i < 10; i++){
  outputSentence(createRandomSentence())
}