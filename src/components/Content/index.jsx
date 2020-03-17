import React from 'react';
import styles from "./styles.module.scss";
import cn from 'classnames';
import {NavLink} from "react-router-dom";
import {MAIN_URL} from "../../constants";
import {withRouter} from 'react-router-dom';
/*import Header from "../Header";
import Footer from "../Footer";*/


function Content({history,
                     className="empty",
                     children,
                     next=MAIN_URL.BLOCK_1,
                     next_name="Далее"}) {

    return <div className={styles.content_main}>
        {/*<Header/>*/}

        <div className={cn(styles.content, className)}>
            {children}
            <br/>
            <br/>
            <span className={styles.author}/>
            <div className={styles.read_more} onClick={() => history.push(next)}><b>{next_name}</b></div>
        </div>
        {/*<Footer/>*/}
    </div>;
}


export default withRouter(Content);
