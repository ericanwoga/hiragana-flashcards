import dictionary from '../data/hiragana.json'

function generateQuiz(numberOfQuestions){
    let questionArray = []; //array of japanese characters
    let numberArray = []; //array of random numbers

    //we want x number of random characters loaded
    for (let i = 0; i < numberOfQuestions; i++){
        function randomNumber(max){
            return Math.floor(Math.random() * max);
        } 

        //get a random number 
        let randomNum = randomNumber(104);

        //check to see if it's NOT in the array already
        while (numberArray.includes(randomNum)) {
            //choose a new random number
            randomNum = randomNumber(104);
        }

        //add number to the array
        numberArray.push(randomNum);
    }

    questionArray = numberArray.map(num => dictionary.hiraganaDictionary[num])
    console.log("Question array is:", questionArray); //tester
    return questionArray;
    //setQuizQuestions(questionArray); 
    //setData({...data,questionList: questionArray}); //Send questions to parent

}

export default generateQuiz;