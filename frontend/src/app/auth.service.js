"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const http_1 = require('@angular/http');
const router_1 = require('@angular/router');
let AuthService = class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.BASE_URL = 'http://localhost:63145/auth';
        this.NAME_KEY = 'name';
        this.TOKEN_KEY = 'token';
    }
    get name() {
        return localStorage.getItem(this.NAME_KEY);
    }
    get isAuthenticated() {
        return !!localStorage.getItem(this.TOKEN_KEY);
    }
    get tokenHeader() {
        var header = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem(this.TOKEN_KEY) });
        return new http_1.RequestOptions({ headers: header });
    }
    login(loginData) {
        this.http.post(this.BASE_URL + '/login', loginData).subscribe(res => {
            this.authenticate(res);
        });
    }
    register(user) {
        delete user.confirmPassword;
        this.http.post(this.BASE_URL + '/register', user).subscribe(res => {
            this.authenticate(res);
        });
    }
    logout() {
        localStorage.removeItem(this.NAME_KEY);
        localStorage.removeItem(this.TOKEN_KEY);
    }
    authenticate(res) {
        var authResponse = res.json();
        if (!authResponse.token)
            return;
        localStorage.setItem(this.TOKEN_KEY, authResponse.token);
        localStorage.setItem(this.NAME_KEY, authResponse.firstName);
        this.router.navigate(['/']);
    }
};
AuthService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http, router_1.Router])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map