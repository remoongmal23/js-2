var myDate = [
    {
        name: '-- Oscar Wilde',
        phrase: '"Be yourself; everyone else is already taken."'
    },

    {
        name: '-- Albert Einstein',
        phrase: '"Two things are infinite: the universe and human stupidity; and I,m not sure about the universe."'
    },


    {   name: '-- Frank Zappa',
        phrase: '"So many books, so little time."'
    },


    {
        name: '--Marcus Tullius Cicero',
        phrase: '"A room without books is like a body without a soul."'
    },

    {
        name: '--Mae West',
        phrase: '"You only live once, but if you do it right, once is enough."'
    },

    {
        name: '--Mahatma Gandhi',
        phrase: '"Be the change that you wish to see in the world"'
    },
];


function display() {
    var Index = Number.parseInt(Math.random() * myDate.length);
    document.getElementById("phrase").innerHTML = myDate[Index].phrase;
    document.getElementById("name").innerHTML = myDate[Index].name;
}

