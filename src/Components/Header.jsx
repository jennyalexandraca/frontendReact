import styles from '../Components/Header.module.css'

function Header (props) {
    return (
        <header className={styles.header}>
            {props.title}
        </header>
    )
}

export default Header