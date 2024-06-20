import NetflixLogo from '../image/logo.jpg';
import styles from '../components/navbar.module.css';
import clsx from 'clsx';
import { useState } from 'react';
import DangKy from './Dangky';
import DangNhap from './Dangnnhap';
function Login(props){
    const [ishow,setIshow]=useState(false);
    const [emaill,setEmaill]=useState(false);
    const [isshowdn,setIsshowdn]=useState(true);
    const [ishowdx,setIshowdx]=useState(false);
    const nhan=()=>{
        setIshow(true)
        setIshow1(false)
    }
    const nhann11=()=>{
        setIsshowdn(true)
        setIshowdx(false)
    }
    const [ishow1,setIshow1]=useState(false);
    const nhann=()=>{
        setIshow1(true)
        setIshow(false)
    }
    return(
        <div className={clsx(styles.Navigation)}>
            <div className={clsx(styles.navContainer)}>
                <div className={clsx(styles.logo)}>
                    <img src={NetflixLogo} alt=""/>
                </div>
                <div className={clsx(styles.navSearch)}>
                    <div className={clsx(styles.iconSearch)}>
                        <i className="bi bi-search"></i>
                    </div>
                    <input type="text" placeholder="tìm kiếm"/>
                </div>
                {isshowdn && <div className={clsx(styles.navkhach)}>
                    <div className={clsx(styles.navdn)} onClick={nhan}>
                        <h1>Đăng nhập</h1>
                    </div>
                    <div className={clsx(styles.navdk)} onClick={nhann}>
                        <h1>Đăng kí</h1>
                    </div>
                </div>}
                {ishowdx &&  <div className={clsx(styles.navdk1)}>
                    <div className={clsx(styles.navdk11)}>
                        <h2>
                            {emaill} 
                        </h2>
                    </div>
                    <div className={clsx(styles.navdk11)} onClick={nhann11}>
                         <h2>Đăng xuất</h2>
                    </div>
            </div>}
            </div>
            {
               ishow && <DangNhap setIshow={setIshow} setEmaill={setEmaill} setIsshowdn={setIsshowdn} setIshowdx={setIshowdx}/>
            }
            {
               ishow1 && <DangKy setIshow1={setIshow1} setIshow={setIshow} />
            }

        </div>
    )
}
export default Login;