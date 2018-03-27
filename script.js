document.addEventListener('DOMContentLoaded', function() {
    var heading = document.getElementById('hello'); // kopanje po DOM-u

    document.querySelector('#red').onclick = function() {
        heading.style.color = 'red';
    }
    document.querySelector('#blue').onclick = function() {
        heading.style.color = 'blue';
    }
    document.querySelector('#green').onclick = function() {
        heading.style.color = 'green';
    }
});
