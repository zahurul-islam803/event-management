
const Footer = () => {
  return (
    <div className="p-2">
      <footer className="footer grid grid-cols-2 md:grid-cols-3 p-10 bg-neutral rounded-lg mb-10 text-neutral-content">
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Wedding</a>
          <a className="link link-hover">Birthday</a>
          <a className="link link-hover">Anniversary</a>
          <a className="link link-hover">Engagement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
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