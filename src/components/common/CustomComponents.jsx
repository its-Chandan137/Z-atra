import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const CustomeNavLink = ({ href, classname, children}) => {
  const linkStyles = "text-[15px font-medium cursor-pointer list-none text-gray-900 dark:text-white"
  return(
    <NavLink to={href}
      className={({isActive})=> 
      isActive
      ? `${classname} ${linkStyles} text-primary-green` 
      : `${classname} ${linkStyles}`
      }>
        {children}
    </NavLink>
  )
}



const CustomeLink = ({ classname, children}) => {
  const linkStyles = "text-[15px font-medium cursor-pointer list-none block text-gray-900"
  return <NavLink className={ `${classname} ${linkStyles}`}>
          {children}
        </NavLink>
}

const Badges = ({ color, children }) => {
  return <div className={`w-[18px] h-[18px] ${color} rounded-full text-[12px] flex justify-center text-white`}>
            {children}
          </div>
}

export {CustomeLink, CustomeNavLink, Badges};

CustomeNavLink.propTypes = {
  href: PropTypes.isRequired,
  className: PropTypes.isRequired,
  children: PropTypes.isRequired,
};

CustomeLink.propTypes = {
  className: PropTypes.isRequired,
  children: PropTypes.isRequired,
};

Badges.propTypes = {
  color: PropTypes.isRequired,
  children: PropTypes.isRequired,
};