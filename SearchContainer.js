import NotificationIcon from "./NotificationIcon";
import "./SearchContainer.css";

const SearchContainer = () => {
  return (
    <div className="top-header">
      <div className="search-bar">
        <img className="search-normal-icon" alt="" src="/searchnormal.svg" />
        <div className="search">Search</div>
      </div>
      <div className="notification-wrapper">
        <NotificationIcon />
      </div>
    </div>
  );
};

export default SearchContainer;
