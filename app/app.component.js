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
var post_service_1 = require('./post.service');
var AppComponent = (function () {
    function AppComponent(postService) {
        this.postService = postService;
        this.title = 'My Blog';
    }
    AppComponent.prototype.getPosts = function () {
        var _this = this;
        this.postService.getPosts().then(function (posts) { return _this.posts = posts; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getPosts();
    };
    AppComponent.prototype.onSelect = function (post) { this.selectedPost = post; };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n    <h2>Post List</h2>\n    <ul class=\"posts\">\n      <li *ngFor=\"let post of posts\"\n        [class.selected]=\"post === selectedPost\"\n        (click)=\"onSelect(post)\">\n        <span class=\"badge\">{{post.id}}</span> {{post.title}}\n      </li>\n    </ul>\n    <post-detail [post]=\"selectedPost\"></post-detail>\n  ",
            styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .posts {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .posts li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .posts li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .posts li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .posts .text {\n      position: relative;\n      top: -3px;\n    }\n    .posts .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  "],
            providers: [post_service_1.PostService],
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map