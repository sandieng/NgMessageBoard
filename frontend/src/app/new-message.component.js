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
const web_service_1 = require('./web.service');
const auth_service_1 = require('./auth.service');
let NewMessageComponent = class NewMessageComponent {
    constructor(webService, auth) {
        this.webService = webService;
        this.auth = auth;
        this.message = {
            owner: this.auth.name,
            text: ""
        };
    }
    post() {
        this.webService.postMessage(this.message);
    }
};
NewMessageComponent = __decorate([
    core_1.Component({
        selector: 'new-message',
        template: `
        <md-card class="card">
            <md-card-content>
                <md-input-container>
                    <textarea [(ngModel)]="message.text" mdInput placeholder="Message"></textarea>
                </md-input-container>
                <md-card-actions>
                    <button (click)="post()" md-button color="primary">POST</button>
                </md-card-actions>
            </md-card-content>
        </md-card>
    `
    }), 
    __metadata('design:paramtypes', [web_service_1.WebService, auth_service_1.AuthService])
], NewMessageComponent);
exports.NewMessageComponent = NewMessageComponent;
//# sourceMappingURL=new-message.component.js.map