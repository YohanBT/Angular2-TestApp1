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
var core_1 = require('@angular/core');
var post_1 = require('./post');
var PostDetailComponent = (function () {
    function PostDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', post_1.Post)
    ], PostDetailComponent.prototype, "post", void 0);
    PostDetailComponent = __decorate([
        core_1.Component({
            selector: 'post-detail',
            template: "\n    <div *ngIf=\"post\">\n      <h2>{{post.title}} details!</h2>\n      <div><label>id: </label>{{post.id}}</div>\n      <div>\n        <p>{{post.content}}</p>\n        Rating:{{post.rating}} \n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], PostDetailComponent);
    return PostDetailComponent;
}());
exports.PostDetailComponent = PostDetailComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=hero-detail.component.js.map