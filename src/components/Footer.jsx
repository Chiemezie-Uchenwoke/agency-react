import "../styles/Footer.css"

const year = new Date().getFullYear();
const Footer = () => {
    

    return (
        <footer className="top-margin">
            <p>copyright © {year}</p>
        </footer>
    )
}

export default Footer;