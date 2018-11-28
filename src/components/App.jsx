import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from '../components/VideoList.js';
import VideoPlayer from '../components/VideoPlayer.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import Search from '../components/Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      videoList: exampleVideoData,
      value: ''
    };
  }
  
  onClickHandler(selectedVideo) {
    this.setState({
      currentVideo: selectedVideo
    });
  }
  
  onTypeHandler(text) {
    this.props.searchYouTube({key: YOUTUBE_API_KEY, query: text, max: 5}, (videos)=>{
      this.setState({
        videoList: videos,
        currentVideo: videos[0] 
      });
    });
  }
  
  componentDidMount() {
    this.props.searchYouTube({key: YOUTUBE_API_KEY, query: 'elephant', max: 5}, (videos)=>{
      this.setState({
        videoList: videos,
        currentVideo: videos[0] 
      }); 
    });
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search value={this.state.value} onChange={this.onTypeHandler.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList onClick={this.onClickHandler.bind(this)} videos={this.state.videoList}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

