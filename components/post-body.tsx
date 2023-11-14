import styles from './post-body.module.css'
import {useEffect} from "react";




export default function PostBody({ content }) {



    return (
    <div className="mx-auto">
        <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: content }}
        />
    </div>
  )
}
