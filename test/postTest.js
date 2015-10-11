import angular from 'angular';
import 'angular-mocks';
import * as PostModule from '../js/post.module';


describe('Post', function() {

    var fakeLog = {
        debug: function(mess) {
            console.log(`DEBUG: ${mess}`);
        },
        error: function(mess) {
            console.log(`ERROR: ${mess}`);
        },
        info: function(mess) {
            console.log(`INFO: ${mess}`);
        }
    }

    var fakeHTTP;
    var scope;
    var returned;
    var timeout;
    var queue
    var $httpBackend;

    beforeEach(module('whatNow'));

    beforeEach(inject(function($rootScope, $q, $timeout) {
        timeout = $timeout;
        scope = $rootScope.$new();
        queue = $q;
        fakeHTTP = {
            get: function(url) {
                var deferred = $q.defer();
                console.log(`http GET for ${url}`);
                returned = {
                    data: "Stuff worked!"
                };
                deferred.resolve(returned);
                return deferred.promise;
            },
            post: function(url, data) {
                var deferred = $q.defer();
                console.log(`http POST for ${url} with....`);
                console.log(data);
                returned = {
                    data: "Stuff worked!"
                };
                deferred.resolve(returned);
                return deferred.promise;
            }

        };
        jasmine.clock().install();
    }));

    afterEach(function() {
        jasmine.clock().uninstall();
    });

    it('should auto-post after a minute of not typing', function() {
 
        scope.message = '';    
        var svc = PostModule.svc(fakeHTTP, fakeLog, timeout, queue);
        svc.getPosts().then(function(data) {
            console.log("data returned is.. ");
            console.log(data);
            scope.message ="loaded";
        });
        scope.$apply();
        expect(scope.message).toBe("loaded");

        scope.post = "bango!";
        svc.startTimer(scope.post, scope).then(function(post) {
            scope.post = "";
            scope.message = `posted "${post}"`;
        });
        scope.$apply();
        expect(scope.message).toBe("loaded");

        jasmine.clock().tick(101);
        timeout.flush();
        scope.$apply();
        expect(scope.message).toBe("posted \"bango!\"");
    });

    // @TODO
    it('should add to last post if last post was within the last minute', function() {
        expect(false).toBe(false);

    });

    // @TODO
    it('should be able to tag with short cut keys', function() {
        expect(false).toBe(false);

    });


})
