document.addEventListener('DOMContentLoaded', () => 
{
    console.log('MILK');

    let gayColors = 
    [
        '#fa5c5c',
        '#faa65c',
        '#fae85c',
        '#74fa5c',
        '#5cd2fa',
        '#5f5cfa',
        '#ae5cfa',
        '#fa5ced'
    ]

    let randomGayColor = gayColors[Math.floor(Math.random() * gayColors.length)]

    document.body.style.background = randomGayColor;

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

    const gone1 = document.getElementById('gone');
    const btn1 = document.getElementById('btn1');
    const text1 = document.getElementById('text1');
    const text2 = document.getElementById('text2');

    btn1.addEventListener('click', start1)

    function start1()
    {
        gone1.innerHTML = " ";
        text1.innerHTML = a + "<br/>" + b + "<br/>" + "______"
    }
})
