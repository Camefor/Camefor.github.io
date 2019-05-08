const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: "Superficial Love",
        artist: 'Karim Mika / Gabs',
        url: 'https://music.163.com/song/media/outer/url?id=1316563030.mp3',
        cover: 'http://p2.music.126.net/tIMbwYpCuScFEdnEb6GTAw==/109951163594454369.jpg?param=130y130',
      },
      {
        name: 'Erase Me',
        artist: 'Said The Sky / NÉONHÈART',
        url: 'https://music.163.com/song/media/outer/url?id=1301861956.mp3',
        cover: 'http://p1.music.126.net/G105trvU6R2_vqgZWvncuQ==/109951163506191548.jpg',
      },
      {
        name: 'Paradise',
        artist: 'Nicky Romero / Deniz Koyu / Walk off the Earth',
        url: 'https://music.163.com/song/media/outer/url?id=1312104048.mp3',
        cover: 'http://p2.music.126.net/kaGEo6q88LdkPI_4NODRNA==/109951163564074269.jpg?param=130y130',
      }
      
    ]
});