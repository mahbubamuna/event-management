

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-rose-100 text-base-content">
                <aside>
                    <img src="https://i.ibb.co/Hn96Kfp/flowers-6590404-1280.png" className="w-20" alt="" />
                    <p><a className=" font-lobstar font-semibold text-xl">
                        Wedding <span className="text-[#b35182]">Planer</span>
                    </a><br />Providing reliable tech since 2000</p>
                </aside>
                <nav className=" font-josefin font-semibold">
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className=" font-josefin font-semibold">
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className=" font-josefin font-semibold">
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;