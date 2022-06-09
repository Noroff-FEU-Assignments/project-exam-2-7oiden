function Wrapper({ cssClass, children }) {
  return <div className={cssClass}>{children}</div>;
}

export default Wrapper;
