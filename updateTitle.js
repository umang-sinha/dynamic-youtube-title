function updateTitle() {

    var videoID = '{videoID}'; // https://youtu.be/{videoID}
    var part = 'snippet,statistics';
    var params = {'id': videoID};
  
    var response = YouTube.Videos.list(part, params);
    var video = response.items[0];
    var videoViewsCount = video.statistics.viewCount;
    var videoLikeCount = video.statistics.likeCount;
    var videoDislikeCount = video.statistics.dislikeCount;
    var videoCommentCount = video.statistics.commentCount;
    var videoTitle = 'This video has '+ videoViewsCount + ' views, ' + videoLikeCount + ' likes, ' + videoDislikeCount + ' dislikes and ' + videoCommentCount + ' comments';
    
    video.snippet.title = videoTitle;
    
    try{
      YouTube.Videos.update(video, part);
    }catch(e){
    
    }
    
  }