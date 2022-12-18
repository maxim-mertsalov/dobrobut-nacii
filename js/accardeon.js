const accs = document.querySelectorAll(".acc");

accs.forEach(function(acc, index) {
    // const accHeight = acc.childNodes[3].offsetHeight; //offsetHeight //+ 128// + 125
    // console.log(accHeight, acc.childNodes)
    // acc.setAttribute("style", `max-height: ${accHeight}px`);

    acc.addEventListener('click', function(e) {
        e.preventDefault();
    
        this.classList.add('active');
    
        accs.forEach(function(acc2, index2) {
            if ( index !== index2 ) {
                acc2.classList.remove('active');
            }
        });
    });
});