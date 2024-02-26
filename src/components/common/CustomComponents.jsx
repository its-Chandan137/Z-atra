import PropTypes from "prop-types";

const CustomeLink = ({href, classname, children}) => {
  const CustomeLink = "text-[15px font-medium text-gray-600 cursor-pointer list-none"
  return(
    <a href="" 
      className={({isActive})=> 
      isActive
      ? `${classname} ${linkStyles} text-pri` 
      : `${classname} ${linkStyles}`
      }>
        {children}
    </a>
  )
}

export {CustomeLink};

CustomeLink.propTypes = {
  href: PropTypes.isRequired,
  className: PropTypes.isRequired,
  children: PropTypes.isRequired,
}