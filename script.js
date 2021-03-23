//THIS DOCUMENT WAS WRITTEN AND MADE BY NOELNIM NAD HAMPU07. IT IS UNDER COPYRIGHT AND YOU ARE NOT ALLOWED TO SHARE, DISTRIBUTE OR USE THIS CODE IN ANYWAY SHAPE OR FORM (C) 2021

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
})