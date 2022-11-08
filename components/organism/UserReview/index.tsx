import { FC, HTMLProps } from 'react';
import Heading from '../../atoms/Heading';
import style from './UserReview.module.scss';

export interface Props {

}

const UserReview: FC<Props & HTMLProps<HTMLDivElement>> = () => (
    <>
        <div className={style.wrapper}>
            <Heading variant='h2'>User Experience</Heading>
        </div>
    </>
)

export default UserReview;