function AccInfoBlock({label, info}) {
  return (
    <div className="accordion__info-container">
      <span className="accordion__label">{label}</span>
      <span className="accordion__info">{info}</span>
    </div>
  );
}
export default AccInfoBlock;
