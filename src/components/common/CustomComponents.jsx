import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const CustomeNavLink = ({ href, className, children}) => {
  const linkStyles2 = "text-[15px font-medium cursor-pointer list-none text-green-500 dark:text-green-500"
  const linkStyles = "text-[15px font-medium cursor-pointer list-none text-gray-900 dark:text-white"
  return(
    <NavLink to={href}
      className={({isActive})=> 
      isActive
      ? `${className} ${linkStyles2}` 
      : `${className} ${linkStyles}`
      }>
        {children}
    </NavLink>
  )
}



const CustomeLink = ({ href,className, children}) => {
  const linkStyles = "text-[15px font-medium cursor-pointer list-none block text-gray-900"
  return <NavLink to={href} className={ `${className} ${linkStyles}`}>
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