(function() {
    'use-strict';
    
    angular.module("cddb4client").factory("albumService", ["$resource", AlbumService]);    
           
    function AlbumService($resource){
        return $resource("http://10.150.4.198:8081/cddb/rest/:id", { id: "@id"},
            {
                'update': { method: 'put'}
            }, 
            {stripTrailingSlashes: false});
    };
    
    angular.module("cddb4client").factory("trackService", ["$resource", TrackService]);    
           
    function TrackService($resource){
        return $resource("http://10.150.4.198:8081/cddb/rest/:albumid/tracks/:trackid",
            {
                albumid: "@albumid",
                trackid: "@trackid"
            },
            {
                'update': { method: 'put'}
            }, 
            {stripTrailingSlashes: false});
    };
})();