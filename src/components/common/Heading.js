import PropTypes from "prop-types";

function Heading({ size = "1", cssClass, children }) {
  const VariableHeading = `h${size}`;
  return <VariableHeading className={cssClass}>{children}</VariableHeading>;
}

Heading.propTypes = {
  size: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Heading;
