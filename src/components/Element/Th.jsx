import PropTypes from "prop-types";

const Th = ({ children }) => {
  return (
    <th
      scope="col"
      className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-white  text-white bg-primary"
    >
      {children}
    </th>
  );
};

Th.propTypes = {
  children: PropTypes.string,
};

export default Th;
