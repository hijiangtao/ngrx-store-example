import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

let HelloService = class HelloService {
    constructor() {
    }
};
HelloService.ɵprov = ɵɵdefineInjectable({ factory: function HelloService_Factory() { return new HelloService(); }, token: HelloService, providedIn: "root" });
HelloService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], HelloService);

let HelloComponent = class HelloComponent {
    constructor() { }
    ngOnInit() {
        this.text = 'hello works!';
    }
};
HelloComponent = __decorate([
    Component({
        selector: 'lib-hello',
        template: "<p>\n    {{ text }}\n</p>"
    })
], HelloComponent);

let HelloModule = class HelloModule {
};
HelloModule = __decorate([
    NgModule({
        declarations: [HelloComponent],
        imports: [],
        exports: [HelloComponent]
    })
], HelloModule);

/*
 * Public API Surface of hello
 */

/**
 * Generated bundle index. Do not edit.
 */

export { HelloComponent, HelloModule, HelloService };
//# sourceMappingURL=fudao-hello.js.map
