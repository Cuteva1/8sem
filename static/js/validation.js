<script>
    document.addEventListener('DOMContentLoaded', () => {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', (event) => {
                const inputs = form.querySelectorAll('input, select');
                let valid = true;
                inputs.forEach(input => {
                    if (!input.value) {
                        valid = false;
                        input.classList.add('border-red-500');
                    } else {
                        input.classList.remove('border-red-500');
                    }
                });
                if (!valid) {
                    event.preventDefault();
                }
            });
        });
    });
</script>



// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.getElementById('signup-form');

//     form.addEventListener('submit', function(event) {
//         const password = document.getElementById('password').value;
//         const confirmPassword = document.getElementById('confirm_password').value;

//         // Validate password match
//         if (password !== confirmPassword) {
//             event.preventDefault();
//             alert("Passwords do not match!");
//         }
//     });
// });
