export function getAuthForm() {
    return `
 <form class="mui-form" id="auth-form">
    <div class="mui-textfield mui-textfield--float-label">
        <input type="email" id="email" required>
        <label for="email">Email</label>
    </div>
    <div class="mui-textfield mui-textfield--float-label">
        <input type="password" id="password" required>
        <label for="password">Password</label>
    </div>
    <button
            type="submit"
            class="mui-btn mui-btn--raised mui-btn--primary"
    >
        Sign in
    </button>
 </form>
    `
}

export function authWithEmailAndPassword(email, password) {
    const apiKey = "AIzaSyAOcTD3pE191IHhRnpYWco3-FQnSZEQJVQ"
    return fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAOcTD3pE191IHhRnpYWco3-FQnSZEQJVQ' , {
        method: 'POST',
        body: JSON.stringify({
            email, password,
            returnSecureToken: true
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => data.idToken)
}