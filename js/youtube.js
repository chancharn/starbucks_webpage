// Youtube IFrame API를 비동기로 로드합니다.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// onYouTubePlayerAPIReady 함수 이름은,
// Youtube IFrame Player API에서 사용하는 이름이기 때문에,
// 다르게 지정하면 동작하지 않습니다!
// 그리고 함수는 전역(Global) 등록해야 합니다!
function onYouTubePlayerAPIReady() {
  // <div id="player"></div>, id값이라고 # 넣으면 안됨
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', // 최초 재생할 유튜브 영상 ID
    // 영상 재생을 위한 여러가지 변수를 모아 놓은 옵션
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록
    },
    // playerVars에서는 mute기능을 따로 제공하고 있지 않기 때문에
    events: {
      // 영상이 준비되었을 때, 아래 메소드가 실행됨
      onReady: function (event) {
        // target는 재생되고 있는 영상 자체를 의미
        event.target.mute() // 음소거!
      }
    }
  })
}
