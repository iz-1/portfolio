$(function(){
    $('section').on('mouseup', function(event){
        let bgImageStr = $(this).css('background-image').split(', ');
        bgImageStr = [bgImageStr[1], bgImageStr[0]];
        let showhide = $(this).hasClass('lightbox') ? 'visible' : 'hidden';
        $(this).css('background-image', bgImageStr.join(', '));
        $(this).find('header').css('visibility', showhide);
        $(this).find('div').css('visibility', showhide);
        $(this).toggleClass('lightbox');
    });
})