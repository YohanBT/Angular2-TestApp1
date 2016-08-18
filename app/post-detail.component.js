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
var router_1 = require('@angular/router');
var post_1 = require('./post');
var post_service_1 = require('./post.service');
var PostDetailComponent = (function () {
    function PostDetailComponent(postService, route) {
        this.postService = postService;
        this.route = route;
    }
    PostDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.postService.getPost(id)
                .then(function (post) { return _this.post = post; });
        });
    };
    PostDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', post_1.Post)
    ], PostDetailComponent.prototype, "post", void 0);
    PostDetailComponent = __decorate([
        core_1.Component({
            selector: 'post-detail',
            templateUrl: 'app/post-detail.component.html',
            styleUrls: ['app/post-detail.component.css'],
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService, router_1.ActivatedRoute])
    ], PostDetailComponent);
    return PostDetailComponent;
}());
exports.PostDetailComponent = PostDetailComponent;
//# sourceMappingURL=post-detail.component.js.map