import { FC, HTMLProps, useId } from 'react';
import Logo from '../../atoms/Logo';
import style from './Footer.module.scss';
import { ColumnLinks } from './data/footerLinks';
import Heading from '../../atoms/Heading';

export interface Props {
    column?: ColumnProps[];
}

const Footer: FC<Props & HTMLProps<HTMLDivElement>> = ({className, column = ColumnLinks}) => {
    const id = useId();
    return (
    <div className={style.wrapper} id='contact'>
        <Logo className={style.footerLogo} />
        <div className={style.footerContainer}>
            <div className={style.columnContainer}>
                {column.map((e, i) => (
                <Column key={`${id}-${i}`} heading={e.heading} text={e.text}/>
                ))
                }
            </div>
        </div>
    </div>
)}


export interface ColumnProps {
    heading?: string,
    text?: string[]
}
const Column: FC<ColumnProps & HTMLProps<HTMLDivElement>> = ({heading, text}) => {
    const id = useId();
    return (
    <div className={style.column}>
        <Heading variant='h3'>{heading}</Heading>
        <ul className={style.columnList}>
        {text.map((item, i) => (
            <li key={`${id}-${i}`}>{item}</li>
        ))
        }
        </ul>
    </div>
)}

export default Footer; 