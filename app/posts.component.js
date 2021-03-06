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
var post_service_1 = require('./post.service');
var PostsComponent = (function () {
    function PostsComponent(router, postService) {
        this.router = router;
        this.postService = postService;
    }
    PostsComponent.prototype.getPosts = function () {
        var _this = this;
        this.postService.getPosts().then(function (posts) { return _this.posts = posts; });
    };
    PostsComponent.prototype.getTopPosts = function () {
        var _this = this;
        this.postService.getTopPosts().then(function (posts) { return _this.posts = posts; });
    };
    PostsComponent.prototype.ngOnInit = function () {
        this.getPosts();
    };
    PostsComponent.prototype.onSelect = function (post) {
        this.router.navigate(['/detail', post.id]);
    };
    PostsComponent = __decorate([
        core_1.Component({
            selector: 'blog-posts',
            templateUrl: 'app/posts.component.html',
            styleUrls: ['app/posts.component.css'],
            providers: [post_service_1.PostService],
        }), 
        __metadata('design:paramtypes', [router_1.Router, post_service_1.PostService])
    ], PostsComponent);
    return PostsComponent;
}());
exports.PostsComponent = PostsComponent;
//# sourceMappingURL=posts.component.js.map