import footerLogo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import FooterCSS from './Footer.module.css'
export default function Footer() {
  return (
<section className= {FooterCSS.bookieFooter}>
    <div className={FooterCSS.footerContainer}>
        <div className={FooterCSS.logobox}>
            <img src= {footerLogo} alt="footer-logo" className={FooterCSS.footerLogo} />
            <p className= {FooterCSS.Brandname}>Bookie</p>
        </div>
        
         <div className={FooterCSS.footerContent}>
            <p className={FooterCSS.content}>Save Money in other to  Buy Books for your children </p>
            <p className={FooterCSS.address}>10, Publish Estate, Alakori Street, Abeokuta Ogun State</p>
            <div className={FooterCSS.address}>bookie@gmail.com</div>
     </div>
    </div>
        <div className={FooterCSS.listContainer}>
            <div className={FooterCSS.list}>
                <p> Links</p>
                <ul>
                    <li><Link to = '#' className= {FooterCSS.footerLink}>Contact Us</Link></li>
                    <li><Link to = '#' className= {FooterCSS.footerLink}>About Us</Link></li>
                    <li><Link to = '#' className= {FooterCSS.footerLink} >Direction</Link></li>
                    <li><Link to = '#' className= {FooterCSS.footerLink}>Blog</Link></li>
                </ul>
            </div>
            <div className={FooterCSS.list}>
                 <p> My Account</p>
                <ul>
                    <li><Link to = '#' className= {FooterCSS.footerLink}>Profile</Link></li>
                    <li><Link to = '#' className= {FooterCSS.footerLink}>Settings</Link></li>
                    <li><Link to = '#' className= {FooterCSS.footerLink}>Track History</Link></li>
                    <li><Link to = '#'className= {FooterCSS.footerLink}>Renew Subcription</Link></li>
                </ul>
            </div>
            <div className={FooterCSS.list}>
                 <p>Social</p>
                <ul>
                    <li><Link to = '#' className= {FooterCSS.footerLink}>Instagram</Link></li>
                    <li><Link to = '#' className= {FooterCSS.footerLink}>Facebook</Link></li>
                    <li><Link to = '#' className= {FooterCSS.footerLink}>Twitter</Link></li>
                    <li><Link to = '#' className= {FooterCSS.footerLink}>Linkedin</Link></li>
                </ul>
            </div>
        </div>
</section>
  )
}
