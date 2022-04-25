function validate() {
    const user = document.getElementById('username').value
    const pass = document.getElementById('password').value

    if (user == 'admin' && pass == '1234') {
        alert('login successful')
    } else {
        alert('incorrect creds')
    }
}