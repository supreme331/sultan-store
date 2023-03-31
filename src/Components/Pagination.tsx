import React from 'react';
import styles from '../styles/Pagination.module.scss';
import previousIcon from '../img/prev-icon.svg';
import nextIcon from '../img/next-icon.svg';
import {useNavigate, useParams} from "react-router";
import {Link} from "react-router-dom";
import {scrollToUp} from "../utils/utils";

const Pagination: React.FC<PaginationProps> = ({totalCount, perPage}) => {
    const {currentPage} = useParams();
    const countOfPages = Math.ceil(totalCount / perPage);
    const pages: Array<number> = [];
    const navigate = useNavigate();

    for (let i = 0; i < countOfPages; i++) {
        pages.push(i + 1);
    }

    function navigateToPrevious() {
        if (currentPage && +currentPage > 1) {
            scrollToUp();
            navigate('/catalog/' + (+currentPage - 1));
        }
    }
    function navigateToNext() {
        if (currentPage && +currentPage < pages[pages.length - 1]) {
            scrollToUp();
            navigate('/catalog/' + (+currentPage + 1));

        }
    }

    return (
        <div className={styles.pagination}>
            <div onClick={() => navigateToPrevious()} className={styles.previous}>
                <img src={previousIcon} alt="назад"/>
            </div>
            <ul className={styles.pagesList}>
                {
                    pages.map(p => <li key={p}>
                        <Link
                            onClick={() => scrollToUp()}
                            className={currentPage === p.toString() ? styles.currentPage : styles.page}
                            to={'/catalog/' + p}>
                            {p}
                        </Link>
                    </li>)
                }
            </ul>
            <div onClick={() => navigateToNext()} className={styles.next}>
                <img src={nextIcon} alt="вперед"/>
            </div>
        </div>
    );
};

interface PaginationProps {
    totalCount: number;
    perPage: number;
}

export default Pagination;