var searchYouTube = (options, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    key: options.key,
    q: options.query,
    maxResults: options.max || 5,
    videoEmbeddable: true,
    part: 'snippet',
    type: 'video'    
  
  }, (response)=>callback(response.items));
};

export default searchYouTube;
