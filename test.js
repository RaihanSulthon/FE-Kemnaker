import { authApi } from "@/api/auth.api";

const test = {
    "email": "test@example.com",
    "password": "password"
}

const loginres = await authApi.login(test)
console.log(loginres)