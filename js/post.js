'use strict';


function PostDrv($log, postSvc, $timeout) {
    // @TODO change link to use controller and controllerAs syntax and drop the scope    
    let directive = {
        link: link,
        templateUrl: 'post.html'
    };
    return directive;

    function link(scope, element, attrs) {
        $log.debug("boom");
        $log.debug(scope);
        scope.do = postSvc;
        scope.do.getPosts().then(posts => {
            scope.posts = posts;
            $log.debug(posts);
        });
        scope.display = function(post) {
            scope.data = JSON.parse(post.$value);
        }
        scope.typing = function(post) {
            scope.message = "Typing:";
            scope.do.startTimer(post, scope).then(function(post) {
                scope.sendPost(post);
            });
        }
        scope.sendPost = function(post) {
            scope.do.addPost(post);
            scope.post = "";
            scope.message = `posted "${post}"`;
        }


    }
}
PostDrv.$inject = ['$log', 'postSvc', '$timeout'];

export {
    PostDrv
}
