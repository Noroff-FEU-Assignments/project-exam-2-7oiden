function AccInfoBlock({label, info}) {
  return (
    <div className="adm-accordion__info-container">
      <span className="adm-accordion__label">{label}</span>
      <span className="adm-accordion__info">{info}</span>
    </div>
  );
}
export default AccInfoBlock;
