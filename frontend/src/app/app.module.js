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
const router_1 = require('@angular/router');
const platform_browser_1 = require('@angular/platform-browser');
const material_1 = require('@angular/material');
const messages_component_1 = require('./messages-component');
const app_component_1 = require('./app.component');
const web_service_1 = require('./web.service');
const new_message_component_1 = require('./new-message.component');
const forms_1 = require('@angular/forms');
const nav_component_1 = require('./nav.component');
const home_component_1 = require('./home.component');
const register_component_1 = require('./register.component');
const auth_service_1 = require('./auth.service');
const login_component_1 = require('./login.component');
const user_component_1 = require('./user.component');
var routes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'messages',
        component: messages_component_1.MessagesComponent
    },
    {
        path: 'messages/:name',
        component: messages_component_1.MessagesComponent
    },
    {
        path: 'register',
        component: register_component_1.RegisterComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'user',
        component: user_component_1.UserComponent
    }];
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, material_1.MaterialModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, router_1.RouterModule.forRoot(routes)],
        declarations: [app_component_1.AppComponent, messages_component_1.MessagesComponent, new_message_component_1.NewMessageComponent, nav_component_1.NavComponent, home_component_1.HomeComponent, register_component_1.RegisterComponent, login_component_1.LoginComponent, user_component_1.UserComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [web_service_1.WebService, auth_service_1.AuthService]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map