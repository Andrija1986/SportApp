

const VideoCard = ({title, thumbnail, videos, matchviewUrl, competitionUrl}) => {
    
    
    const start = videos.embed.indexOf('src=', 0);
    const end = videos.embed.indexOf('/?', start);
    const video = videos.embed.slice(start + 5,end).toString();


  return (
    <section>
        <h2>{title}</h2>
        <img src={thumbnail} alt="" />
        <button>
          <a href={video} rel='noreferrer' target="_blank" >Go to Highlights</a>
        </button>
        <button>
          <a href={matchviewUrl} rel='noreferrer' target="_blank" >Go to Match statistics</a>
        </button>
        <button>
          <a href={competitionUrl} rel='noreferrer' target="_blank" >Competition details</a>
        </button>
    </section>
  )
}

export default VideoCard

/* 
const start = str.indexOf('src=',0)
const end = str.indexOf('/?', start)
const video = str.slice(start + 5,end)  */