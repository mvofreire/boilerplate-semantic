import HomeConfig from "./home/home.config";
import RegisterConfig from "./register/register.config";
import LoginConfig from "./login/login.config";

const pagesRoutes = [HomeConfig, RegisterConfig, LoginConfig];

export const publicPages = pagesRoutes.filter(page => !page.auth);
export const privatePages = pagesRoutes.filter(page => !!page.auth);
