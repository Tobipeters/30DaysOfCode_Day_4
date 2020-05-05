
const quoteGenerator = () => {
    let body = document.getElementById('body');
    let quote = document.getElementById('quote');
    let selectedQuote = '';
    let randomQuote = Math.floor(Math.random() * 20);

    switch (randomQuote) {
        //Love Quote
        case 0:
            selectedQuote = 'Love isn’t about finding the perfect person. Love is about finding an imperfect person and seeing perfection.';
            break;
        case 1:
            selectedQuote = 'The biggest coward is a man who awakens a woman’s love with no intention of loving her';
            // console.log(selectedQuote);
            break;
        case 2:
            selectedQuote = 'The way you started loving her is the way she should always be loved.';
            // console.log(selectedQuote);
            break;
        case 3:
            selectedQuote = 'Loving you is like breathing. How can I stop?';
            // console.log(selectedQuote);
            break;
        case 4:
            selectedQuote = 'If I had a flower for every time I thought of you, I could walk in my garden forever.';
            // console.log(selectedQuote);
            break;
        case 5:
            selectedQuote = 'For once in my life, I don’t have to try to be happy. When I’m with you, it just happens.';
            // console.log(selectedQuote);
            break;
        case 6:
            selectedQuote = 'I love you because I know no matter what happens, you’ll always love me back.';
            // console.log(selectedQuote);
            break;
        case 7:
            selectedQuote = 'In a sea of people, my eyes will always be searching for you.';
            // console.log(selectedQuote);
            break;
        case 8:
            selectedQuote = 'I wish I could turn back the clock. I’d find you sooner and love you longer.';
            // console.log(selectedQuote);
            break;
        case 9:
            selectedQuote = 'You may hold my hand for a while, but you hold my heart forever.'
            break;
        case 10:
            selectedQuote = 'Come live in my heart and pay no rent.'
            break;
        //inspirational Career Quote 11 - 15
        case 11:
            selectedQuote = 'Find out what you like doing best and get someone to pay you for doing it.'
            break;
        case 12:
            selectedQuote = 'Success is how high you bounce when you hit bottom.'
            break;
        case 13:
            selectedQuote = 'Anyone who has never made a mistake has never tried anything new.'
            break;
        case 14:
            selectedQuote = 'If opportunity doesn’t knock, build a door.';
            break;
        case 15:
            selectedQuote = 'The only way to do great work is to love what you do. If you haven\'t found it yet, keep looking. Don\'t settle.'
            break;
        // Christain Inspirational Quote 16 -20
        case 16:
            selectedQuote = 'If God is your partner, make your plans BIG!'
            break;
        case 17:
            selectedQuote = 'The greater your knowledge of the goodness and grace of God on your life, the more likely you are to praise Him in the storm'
            break;
        case 18:
            selectedQuote = 'Choose faith instead of fear and life will become a lot more fun.'
            break;
        case 19:
            selectedQuote = 'There is no one who is insignificant in the purpose of God'
            break;
        case 20:
            selectedQuote = 'Your potential is the sum of all the possibilities God has for your life.'
            break;

    }
    document.getElementById('quote').innerHTML = `${selectedQuote}`;
    console.log(selectedQuote);
    console.log(randomQuote)

    if (randomQuote <= 5) {
        quote.style.backgroundColor = "rgb(245, 107, 194)"; 
        body.style.backgroundColor = 'rgba(245, 107, 194, 0.18)';
    }
    else if (randomQuote <= 10){
        quote.style.backgroundColor = "#b270e2"; 
        body.style.backgroundColor = 'rgba(178, 112, 226, 0.23)';
    }
    else if (randomQuote <= 13){
        quote.style.backgroundColor = "rgba(169, 165, 11, 0.85)";
        body.style.backgroundColor = 'rgba(169, 165, 11, 0.21)';
    }
    else if (randomQuote <= 15){
        quote.style.backgroundColor = "#3b76c1bd";
        body.style.backgroundColor = 'rgba(59, 118, 193, 0.25)';
    }
    else if (randomQuote <=20) {
        quote.style.backgroundColor = "#da7272"; 
        body.style.backgroundColor = 'rgba(218, 114, 114, 0.23)';
    }
}
quoteGenerator();
setInterval(quoteGenerator, 30000);

//#9ec3df blue blend
//#fcb1d0; pink blend
//#da7272; brown blend
//#b270e2; purple blend
//#c5c236d9; other blend
//#3b76c1bd; blue blend