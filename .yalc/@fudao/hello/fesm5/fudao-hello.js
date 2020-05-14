import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

var HelloService = /** @class */ (function () {
    function HelloService() {
    }
    HelloService.ɵprov = ɵɵdefineInjectable({ factory: function HelloService_Factory() { return new HelloService(); }, token: HelloService, providedIn: "root" });
    HelloService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], HelloService);
    return HelloService;
}());

var HelloComponent = /** @class */ (function () {
    function HelloComponent() {
    }
    HelloComponent.prototype.ngOnInit = function () {
        this.text = 'hello works!';
    };
    HelloComponent = __decorate([
        Component({
            selector: 'lib-hello',
            template: "<p>\n    {{ text }}\n</p>"
        })
    ], HelloComponent);
    return HelloComponent;
}());

var HelloModule = /** @class */ (function () {
    function HelloModule() {
    }
    HelloModule = __decorate([
        NgModule({
            declarations: [HelloComponent],
            imports: [],
            exports: [HelloComponent]
        })
    ], HelloModule);
    return HelloModule;
}());

/*
 * Public API Surface of hello
 */

/**
 * Generated bundle index. Do not edit.
 */

export { HelloComponent, HelloModule, HelloService };
//# sourceMappingURL=fudao-hello.js.map
