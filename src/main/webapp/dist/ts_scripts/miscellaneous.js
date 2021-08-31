const invalidatetoken = (exp) => {
    const now = Date.now().valueOf() / 1000;
    if (typeof exp !== 'undefined' && exp < now) {
        localStorage.removeItem("token");
        localStorage.removeItem('userid');
        window.location.href = "../adminlogin";
        throw new Error(`token expired`);
    }
    return;
};
const redirectiftokenisnull = (token) => {
    if (token === null) {
        window.location.href = "../adminlogin";
    }
};
export { invalidatetoken, redirectiftokenisnull };
