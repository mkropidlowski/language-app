import Button from "components/atoms/Button";
import styles from "./information.module.scss";

import Link from "next/link";

const Information = () => {
    return (
        <div className={styles.container}>
            <div>
                <h2>Informacje dla uczniów i rodziców:</h2>
            </div>
            <div>
                <Link
                    href={"/documents/informacja_dla_rodzica_abc.pdf"}
                    download={"/documents/informacja_dla_rodzica_abc.pdf"}
                >
                    <Button type="button" color="primary">
                        Pobierz: informacja dla rodziców i uczniów 2023/2024
                    </Button>
                </Link>
            </div>
        </div>
    );
};
export default Information;
