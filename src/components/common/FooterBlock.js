function FooterBlock({ heading, children }) {
  return (
    <div className="footer__block">
      <p className="footer__heading">{heading}</p>
      <ul className="footer__list">{children}</ul>
    </div>
  );
}

export default FooterBlock;
