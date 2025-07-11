alert("linked");
const allCookies = document.cookie;
console.log("All accessible cookies:", allCookies);

// To parse a specific cookie, you'd typically split the string:
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i=0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

const mySessionId = getCookie("sessionId"); // Assuming your session cookie is named "sessionId"
console.log("My session ID (if accessible):", mySessionId);