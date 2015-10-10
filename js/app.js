import angular from 'angular';
import firebase from 'firebase';
import angularfire from 'angularfire';
import ngMaterial from 'angular-material';
import * as PostModule from './post.module';

console.log(angular.version);

angular.module('whatNow', ["firebase", "ngMaterial"])
    .factory('postSvc', PostModule.svc)
    .directive('post', PostModule.drv);
