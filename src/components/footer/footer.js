import "./_footer.scss";
function Footer({ isMinimized, modifiers }) {
  const footerLinksFull = [
    "FAQ",
    "Help Center",
    "Account",
    "Media Center",
    "Investor Relations",
    "Jobs",
    "Netflix Shop",
    "Redeem Gift Cards",
    "Buy Gift Cards",
    "Ways to Watch",
    "Terms of Use",
    "Privacy",
    "Cookie Preferences",
    "Corporate Information",
    "Contact Us",
    "Speed Test",
    "Legal Notices",
    "Only on Netflix",
    "Do Not Sell or Share My Personal Information",
  ];
  const footerLinksMini = [
    "FAQ",
    "Help Center",
    "Netflix Shop",
    "Terms of Use",
    "Privacy",
    "Cookie Preferences",
    "Corporate Information",
    "Do Not Sell or Share My Personal Information",
  ];

  const linksRenderer = function () {
    return !isMinimized
      ? footerLinksFull.map(function (link, index) {
          return (
            <li key={index} className="footer__link">
              <a href="http://">{link}</a>
            </li>
          );
        })
      : footerLinksMini.map(function (link, index) {
          return (
            <li key={index} className="footer__link">
              <a href="http://">{link}</a>
            </li>
          );
        });
  };

  return (
    <footer className={`footer ${modifiers}`}>
      <div className="footer__wrapper">
        <p className="footer__header">Questions? Call 1-844-505-2993</p>
        <ul className="footer__links">{linksRenderer()}</ul>
      </div>
    </footer>
  );
}

export default Footer;
