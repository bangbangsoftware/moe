'use strict';

class PostSvc {

    constructor($http, $log, $timeout, $q, $firebaseArray) {
        this.$http = $http;
        this.$log = $log;
        this.$timeout = $timeout;
        this.postAfter = 1000;
        this.timer;
        this.$q = $q;
        this.needToSetup = true;
        this.posts = $firebaseArray(new Firebase("https://amber-inferno-4458.firebaseio.com/"));
    }

    stopTimer() {
        this.$timeout.cancel(this.timer);
    }

    remove(post) {
        this.$log.debug("removing");
        this.$log.debug(post);
        this.posts.$remove(post);
    }

    addPost(newText) {
        var post = {
            text: newText,
            postedAt: new Date()
        };
        this.$log.debug(post);
        this.posts.$add(JSON.stringify(post));
    }

    startTimer(post, scope) {
        if (this.needToSetup) {
            scope.$on("$destroy", this.stopTimer());
            this.needToSetup = false;
        }

        var deferred = this.$q.defer();
        this.stopTimer();
        this.timer = this.$timeout(function() {
            deferred.resolve(post);
        }, this.postAfter);

        return deferred.promise;
    }

    getPosts() {
        this.$log.debug("get them posts....");
        return this.posts;
    }

    static factory($http, $log, $timeout, $q, $firebaseArray) {
        return new PostSvc($http, $log, $timeout, $q, $firebaseArray);
    }
};

PostSvc.factory.$inject = ['$http', '$log', '$timeout', '$q', '$firebaseArray'];

export {
    PostSvc
}
