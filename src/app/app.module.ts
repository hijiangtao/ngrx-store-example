import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { actionReducerMap } from './reducers';
import { MyCounterComponent } from './my-counter/my-counter.component';

@NgModule({
    declarations: [
        AppComponent,

        /**
         * 组件
         */
        MyCounterComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,

        /**
         * 在 app.module.ts 中注册全局状态
         * 多个状态属性，可以在这里引入不同的 reducer 初始化
         */
        StoreModule.forRoot(actionReducerMap),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
