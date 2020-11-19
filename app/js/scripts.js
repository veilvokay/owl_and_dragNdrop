$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1
    });

    // =================
    // DRAGGABLE
    // =================
    const el = $('.item');

    let isResizing = false;
    // console.log(el)

    // el.mousedown(mousedown);
    el.on('mousedown', mousedown);

    function mousedown(e) {
        console.log(`me`)
        // $(window).mousemove(mousemove);
        $(window).on('mousemove', mousemove);
        // $(window).mouseup(mouseup);
        $(window).on('mouseup', mouseup);

        let prevX = e.clientX; // 2
        let prevY = e.clientY; // 2

        function mousemove(e) {
            if(!isResizing) {
                let newX = prevX - e.clientX; // 2 - 3 = -1
                let newY = prevY - e.clientY; // 2 - 2 = 0

                const rect = el[0].getBoundingClientRect();

                el[0].style.left = rect.left - newX + 'px'; // 200 - -1 = 201
                el[0].style.top = rect.top - newY + 'px';

                prevX = e.clientX;
                prevY = e.clientY;
            }
        }

        function mouseup() {
            $(window).off('mousemove', mousemove);
            $(window).off('mouseup', mouseup);
        }
    }

    // =================
    // RESIZABLE
    // =================
    const resizers = $('.resizer');
    let currentResizer;

    for(let resizer of resizers) {
        $(resizer).on('mousedown', mousedown);
        // resizer.addEventListener('mousedown', mousedown);
        function mousedown (e) {
            currentResizer = e.target;
            isResizing = true;

            let prevX = e.clientX; // 2
            let prevY = e.clientY; // 2

            $(window).on('mousemove', mousemove);
            $(window).on('mouseup', mouseup);

            function mousemove(e) {
                const rect = el[0].getBoundingClientRect();

                if(currentResizer.classList.contains('se')) {
                    el[0].style.width = rect.width - (prevX - e.clientX) + 'px';
                    el[0].style.height = rect.height - (prevY - e.clientY) + 'px';
                } else if(currentResizer.classList.contains('sw')) {
                    el[0].style.width = rect.width + (prevX - e.clientX) + 'px';
                    el[0].style.height = rect.height - (prevY - e.clientY) + 'px';
                    el[0].style.left = rect.left - (prevX - e.clientX) + 'px';
                } else if(currentResizer.classList.contains('ne')) {
                    el[0].style.width = rect.width - (prevX - e.clientX) + 'px';
                    el[0].style.height = rect.height + (prevY - e.clientY) + 'px';
                    el[0].style.top = rect.top - (prevY - e.clientY) + 'px'
                } else {
                    el[0].style.width = rect.width + (prevX - e.clientX) + 'px';
                    el[0].style.height = rect.height + (prevY - e.clientY) + 'px';
                    el[0].style.top = rect.top - (prevY - e.clientY) + 'px';
                    el[0].style.left = rect.left - (prevX - e.clientX) + 'px';
                }

                prevX = e.clientX;
                prevY = e.clientY;
            }

            function mouseup() {
                $(window).off('mousemove', mousemove);
                $(window).off('mouseup', mouseup);
                isResizing = false;
            }
        }
    }
});


