document.addEventListener('DOMContentLoaded', () => 
{
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
})
