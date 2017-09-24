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
const auth_service_1 = require('./auth.service');
let LoginComponent = class LoginComponent {
    constructor(auth) {
        this.auth = auth;
        this.loginData = {
            email: '',
            password: ''
        };
    }
    login() {
        this.auth.login(this.loginData);
    }
};
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        template: `
        <md-card>
            <md-input-container>
                <input mdInput [(ngModel)]="loginData.email" placeholder="Email" type="email">
            </md-input-container>
            <md-input-container>
                <input mdInput [(ngModel)]="loginData.password" placeholder="Password" type="password">
            </md-input-container>
            <button md-raised-button color="primary" (click)="login()">Login</button>
        </md-card>
    `
    }), 
    __metadata('design:paramtypes', [auth_service_1.AuthService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map