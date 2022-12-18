import { FC, useState } from "react";
import Button from "../Button";

export interface Props {
    className?: string;
    children?: string;
}

const ReadMoreReadLess: FC<Props> = ({ className, children }) => {
    const [isReadMoreShown, setIsReadMoreShown] = useState<boolean>(false);

    const toogleBtn = () => {
        setIsReadMoreShown((prevState) => !prevState);
    };
    return (
        <div className={className}>
            {isReadMoreShown ? children : children.substring(0, 150)}
            {children.length <= 200 ? (
                isReadMoreShown && (
                    <Button
                        type="button"
                        color="secondary"
                        buttonSize="small"
                        onClick={toogleBtn}
                        style={{ position: "relative", top: "20px" }}
                    >
                        Czytaj mniej..
                    </Button>
                )
            ) : (
                <Button
                    type="button"
                    color="secondary"
                    buttonSize="small"
                    onClick={toogleBtn}
                    style={{ position: "relative", top: "20px" }}
                >
                    {isReadMoreShown ? "Czytaj mniej.." : "Czytaj więcej.."}
                </Button>
            )}
        </div>
    );
};

export default ReadMoreReadLess;
