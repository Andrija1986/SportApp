import VideoCard from "./VideoCard";

const Content = ({filterList}) => {


    const cardList = filterList.map((item, i) => <VideoCard key={i} title={item.title} thumbnail={item.thumbnail} videos={item.videos[0]} matchviewUrl={item.matchviewUrl}
    competitionUrl={item.competitionUrl} />)


    return (
        <section>
            {cardList}
        </section>
    )
}

export default Content;