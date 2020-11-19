$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: false,
        margin: 0,
        nav: true,
        mouseDrag: false,
        touchDrag: true,
        // items: 1
        responsive  : {
            0: {
                items: 2
            },
            600: {
                // mouseDrag: false
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const fill = document.querySelector('.fill');
    const empties = document.querySelectorAll('.empty');
    // Shopping cart START
    const shoppingCart = document.querySelector('.shopping-cart');
    shoppingCart.addEventListener('drop', plusItem);
    shoppingCart.addEventListener('dragover', dragOver);
    function plusItem() {
        console.log(`item was added to the cart`)
    }
    // Shopping cart END


    // Fill Listeners
    fill.addEventListener('dragstart', dragStart);
    fill.addEventListener('dragend', dragEnd);

    // Loop through empties and call drag events
    for(const empty of empties) {
        empty.addEventListener('dragover', dragOver);
        empty.addEventListener('dragenter', dragEnter);
        empty.addEventListener('dragleave', dragLeave);
        empty.addEventListener('drop', dragDrop);
    }

    // Drag Functions
    function dragStart() {
        this.className += ' hold';
        // setTimeout(() => {
        //     this.className = 'invisible';
        // }, 0); 
    }

    function dragEnd() {
        console.log(this)
        this.className = 'fill';
    }

    function dragOver(e) {
        e.preventDefault();
        console.log('over')
    }

    function dragEnter(e) {
        console.log('enter')
        e.preventDefault();
        this.className += ' hovered';
    }

    function dragLeave() {
        console.log('leave')
        this.className = 'empty';
    }

    function dragDrop() {
        console.log('drop', this)
        this.className = 'empty';
        this.append(fill);
    }
})