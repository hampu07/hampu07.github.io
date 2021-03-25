document.addEventListener('DOMContentLoaded', () => 
{
 
    console.log('jag tog bort alla fusk //NoelNim');

    console.log('how to cheat, i consolen skriv console.log(c); sedan är du klar. var så god //NoelNim');
 

    let a = Math.floor(Math.random() * 101);
    let b = Math.floor(Math.random() * 19) + 2;
    let c = (a / b);

    function checkforrules()
    {
        if(b > a)
        {
            a = Math.floor(Math.random() * 101);
            b = Math.floor(Math.random() * 19) + 2;
            c = (a / b)
            checkforrules();
        } else if(c % 1 != 0)
        {
            a = Math.floor(Math.random() * 101);
            b = Math.floor(Math.random() * 19) + 2;
            c = (a / b)
            checkforrules();
        } else return
    }

 
    checkforrules();

    const gone1 = document.getElementById('gone1');
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const awnser = document.getElementById('awsome');
    const resultat = document.getElementById('resultat');
    const text1 = document.getElementById('text1');

    btn1.addEventListener('click', start1);


    checkforrules();


    console.log(a, b, c)

    const gone1 = document.getElementById('gone1');
    const btn1 = document.getElementById('btn1');
    const text1 = document.getElementById('text1');
    const text2 = document.getElementById('text2');

    btn1.addEventListener('click', start1)
 

    function start1()
    {
        gone1.innerHTML = "";
        text1.innerHTML = a + " <span>&#247</span> " + b + " =";
    }
 

    btn2.addEventListener('click', awnserYes);

    function awnserYes()
    {
        if(gone1.innerHTML != "")
        {
            text1.innerHTML = '<span>du m&#229ste starta quizet f&oumlre du kan svara</span>';
        } else if(awnser.value == c)
        {
            resultat.innerHTML = 'resultat: <i class="fas fa-check-circle fa-lg"></i>';
            a = Math.floor(Math.random() * 101);
            b = Math.floor(Math.random() * 19) + 2;
            c = (a / b);
            checkforrules();
            text1.innerHTML = a + " / " + b + " =";
            awnser.value = "";
        } else
        {
            resultat.innerHTML = 'resultat: <i class="fas fa-times fa-lg"></i>';
        }
    }
})

})
 
