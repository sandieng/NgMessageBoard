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
let NavComponent = class NavComponent {
    constructor(auth) {
        this.auth = auth;
    }
};
NavComponent = __decorate([
    core_1.Component({
        selector: 'nav',
        template: `
        <md-toolbar color="primary">
            <button md-button routerLink="/" >Message Board</button>
            <button md-button routerLink="/messages" >Messages</button>
            <span style="flex: 1 1 auto"></span>
            <button *ngIf="!auth.isAuthenticated"md-button routerLink="/login" >Login</button>
            <button *ngIf="!auth.isAuthenticated"md-button routerLink="/register" >Register</button>
            <button *ngIf="auth.isAuthenticated" md-button routerLink="/user" >Welcome {{auth.name}}</button>                                    
            <button *ngIf="auth.isAuthenticated" md-button (click)="auth.logout()" >Logout</button>                                                
        </md-toolbar>
    `
    }), 
    __metadata('design:paramtypes', [auth_service_1.AuthService])
], NavComponent);
exports.NavComponent = NavComponent;
//# sourceMappingURL=nav.component.js.map