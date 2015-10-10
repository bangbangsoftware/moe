'use strict';
 
import { PostSvc } from './post.svc'
import { PostDrv } from './post'
 
let svc = PostSvc.factory;
let drv = PostDrv;

export { svc };
export { drv };
