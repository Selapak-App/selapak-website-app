import PropTypes from "prop-types";

const Td = ({ children }) => {
  return (
    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
      {children}
    </td>
  );
};

Td.propTypes = {
  children: PropTypes.string,
};

export default Td;
