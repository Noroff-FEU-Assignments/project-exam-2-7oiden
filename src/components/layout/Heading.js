import PropTypes from "prop-types";

function Heading({ size = "1", children }) {
  const VariableHeading = `h${size}`;
  return <VariableHeading>{children}</VariableHeading>;
}

Heading.propTypes = {
  size: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Heading;
