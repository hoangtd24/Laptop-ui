import classNames from "classnames/bind";
import style from "./OnlyHeader.module.scss"
import Header from "~/layouts/components/Header";
import Care from "~/layouts/components/Care";
import Footer from "~/layouts/components/Footer/Footer";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style)

function OnlyHeader({children}) {
    const [showGoToTop, setShowGoToTop] = useState(false)

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    useEffect(()=>{
        const handleScroll = () => {
            setShowGoToTop(window.scrollY >=350)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[])

    return ( 
        <div className ={cx("wrapper")}>
            <Care />
            <Header />
            <div className = {cx("container")}>
                <div className = {cx("content")}>{children}</div>
            </div>
            <Footer />
            {showGoToTop && <div className={cx("scroll-top") } onClick={scrollTop}><FontAwesomeIcon icon={faChevronUp}/></div>}
        </div>
    );
}

export default OnlyHeader;