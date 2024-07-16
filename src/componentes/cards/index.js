import Card from "../card"
import styles from "./cards.module.css"
import videos from "../../data/db.json"

function Cards(){
    return(

    <div className={styles.containerCard}>
    {videos.map((video) => {
        return <Card {...video} key={video.id} />
    })}
    </div>
)
}

export default Cards