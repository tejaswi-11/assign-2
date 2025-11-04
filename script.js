$(document).ready(function() {
    $("#registrationForm").submit(function(e) {
        let valid = true;
        $('input, select').each(function() {
            if ($(this).val() === '') {
                $(this).css('border', '2px solid red');
                valid = false;
            } else {
                $(this).css('border', '1px solid #ccc');
            }
        });

        if (!valid) {
            e.preventDefault();
            alert("Please fill all fields before submitting.");
        }
    });
});
