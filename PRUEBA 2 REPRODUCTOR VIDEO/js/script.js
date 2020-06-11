var i= 0;
$(document).ready(function()
{
    let videos = ['InstantCrush','Levitando'];
    let video = document.getElementById('video'); // Obtiene contenido etiqueta video (JS puro)
    //let video = $("#video")[0];
    $('#nextVideo').click(function()
    {
        let ruta;
        if(i == (videos.length-1)) // i == 1
        {
            i = 0;
        }
        else
        {
            i++;
        }
        ruta = "video/"+videos[i]+".mp4"; //Se cambia la ruta dinamicamente (SOLO EL NOMBRE DEL ARCHIVO)
        $('#rutaVideo').attr('src',ruta); //Cambia el texto del atributo src
        video.load(); //Carga el video
    });
    $('#play').click(function()
    {
        video.play();
    });
    $('#pause').click(function()
    {
        video.pause();
    });
    $('#replay').click(function()
    {
        video.currentTime=0;
    });
    $('#rewindTen').click(function()
    {
        video.currentTime-=10;
    });
    $('#forwardTen').click(function()
    {
        video.currentTime+=10;
    });
    $('#volumeDown').click(function()
    {
        if(video.volume >= 0.1) // Rango de audio =
        {
            video.volume-=0.1;
        }
    });
    $('#volumeUp').click(function()
    {
        if(video.volume <= 0.9) // Rango de audio =
        {
            video.volume+=0.1;
        }
    });
    $('#volumeOff').click(function()
    {
        video.volume=0;
    });
    $('#volumeOff').click(function()
    {
        video.volume=0;
    });
});
