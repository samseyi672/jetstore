import { submitform } from "./ajaxfunctioncall";
import { loginurl } from "../url";
export class login {
    constructor() {
        this.username = "";
        this.password = "";
    }
    loginaction(form, token) {
        if (form) {
            console.log('creating form ....');
            this.username = form.get("username");
            this.password = form.get("password");
            console.log("username ", this.username, "password ", this.password);
            submitform(`${loginurl}/api/login`, { username: this.username, password: this.password }, token, 'text', 'post');
        }
        console.log('login completed');
    }
}
