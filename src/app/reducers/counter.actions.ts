/**
 * Actions是信息的载体，它发送数据到reducer，然后reducer更新store。Actions是store能接受数据的唯一方式。
 */

import { createAction } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
