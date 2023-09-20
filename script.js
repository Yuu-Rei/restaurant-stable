// Show payment icon when scrolled to menu
$(document).ready(function () {

    var $paymentIcon = $('.payment-icon');
    var iconHidden = false;

    // Custom ease-out function
    jQuery.easing.easeOutSlide = function (x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    };

    $(window).on('scroll load', function () {
        if ($(window).scrollTop() > 680 && iconHidden) {
            // Show the payment icon
            $paymentIcon.css('right', '-100%').show().animate({ right: '0%' }, {
                duration: 500,
                easing: 'easeOutSlide'
            });
            iconHidden = false;
        }
        else if ($(window).scrollTop() <= 680 && !iconHidden) {
            // Hide the payment icon
            $paymentIcon.animate({ right: '-100%' }, {
                duration: 500,
                easing: 'easeOutSlide',
                complete: function () {
                    $(this).hide();
                }
            });
            iconHidden = true;
        }
    });

});

// Function to increment the input value
function incrementValue(event) {
    var buttonClicked = event.target;
    var input = buttonClicked.parentElement.querySelector('.input-field');
    var inputValue = input.value;
    var newValue = parseInt(inputValue) + 1;
    input.value = newValue;
}

// Function to decrement the input value
function decrementValue(event) {
    var buttonClicked = event.target;
    var input = buttonClicked.parentElement.querySelector('.input-field');
    var inputValue = input.value;
    var newValue = parseInt(inputValue) - 1;
    input.value = newValue;

    // Prevent negative values when decrementing
    if (newValue < 0) {
        input.value = 0;
        alert('Order amount cannot be lesser than 0')
    }
}

// Add event listeners to increment and decrement buttons
document.addEventListener('DOMContentLoaded', function () {
    var incrementButtons = document.getElementsByClassName('inc');
    var decrementButtons = document.getElementsByClassName('dec');

    for (var i = 0; i < incrementButtons.length; i++) {
        incrementButtons[i].addEventListener('click', incrementValue);
    }

    for (var i = 0; i < decrementButtons.length; i++) {
        decrementButtons[i].addEventListener('click', decrementValue);
    }
});
