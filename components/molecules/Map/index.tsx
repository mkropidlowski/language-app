import Iframe from "react-iframe";
import styles from "./map.module.scss";
import Heading from "components/atoms/Heading";

const Map = () => {
    return (
        <div className={styles.container}>
            <Heading variant="h1" bold className={styles.sectionHeading}>
                Jak dojechać?
            </Heading>
            <div>
                <Iframe
                    url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2340.759460776951!2d18.790492976776683!3d54.07800897251047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd60e7a5da3f93%3A0x1bd6f5798555a6e9!2sSzko%C5%82a%20j%C4%99zyka%20angielskiego%20Abc%20-%20FC%20Langowska!5e0!3m2!1spl!2spl!4v1692476677734!5m2!1spl!2spl"
                    width="600"
                    height="450"
                    className={styles.map}
                    display="block"
                    title="Nawigacja do salonu"
                />
            </div>
        </div>
    );
};

export default Map;
