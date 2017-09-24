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
let UserComponent = class UserComponent {
    constructor(webService) {
        this.webService = webService;
        this.model = {
            firstName: '',
            lastName: ''
        };
    }
    ngOnInit() {
        this.webService.getUser().subscribe(res => {
            this.model.firstName = res.firstName;
            this.model.lastName = res.lastName;
        });
    }
    saveUser(userData) {
        this.webService.saveUser(userData).subscribe();
    }
};
UserComponent = __decorate([
    core_1.Component({
        selector: 'user',
        template: `
        <md-card class="card">
            <md-input-container>
                <input mdInput [(ngModel)]="model.firstName" placeholder="First Name">
            </md-input-container>
            <md-input-container>
                <input mdInput [(ngModel)]="model.lastName" placeholder="Last Name">
            </md-input-container>
            <button md-raised-button color="primary" (click)="saveUser(model)">Save Changes</button>
        </md-card>
    `
    }), 
    __metadata('design:paramtypes', [web_service_1.WebService])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map