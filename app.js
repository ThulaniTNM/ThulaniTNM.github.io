$(function(){
    let $links = $('a[a class *="nav-link"]');

    $links.on('click',function(){

        // remove css background from any element to make sure that only one element that is clicked will have a different background
        $links.removeClass('active');
         
        // iterate ,make sure that any links that doesnt have btn-info has it ,because a linked that was once pressed removes btn-info
        $links.each(function(){
            if (!this.classList.contains('nav-link')){
                this.classList.add('nav-link');
            }
        });


        $(this).addClass('active');
    });
});