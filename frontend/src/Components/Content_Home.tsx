import classes from '@/styles/content_home.module.css'

export default function Content_Home() {
    return (
        <div className={classes.content}>
            <div className={classes.showcase_communities}></div>
            <div className={classes.recent_posts}></div>

        </div>
    )
}