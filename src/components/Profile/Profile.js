import React from "react";
import PropTypes from "prop-types";
import styles from "./Profile.module.css";

const Profile = ({ avatar, name, tag, location, stats }) => (
  <div className={styles.profile}>
    <div className="container">
      <div className={styles.profile_wrapper}>
        <div className={styles.description}>
          <img src={avatar} alt={name} width="100" className={styles.avatar} />
          <p className={styles.name}>{name}</p>
          <p className={styles.tag}>@{tag}</p>
          <p className={styles.location}>{location}</p>
        </div>
        <ul className={styles.stats}>
          <li className={styles.stats__item}>
            <span className={styles.label}>Followers</span>
            <span className={styles.quantity}>{stats.followers}</span>
          </li>
          <li className={styles.stats__item}>
            <span className={styles.label}>Views</span>
            <span className={styles.quantity}>{stats.views}</span>
          </li>
          <li className={styles.stats__item}>
            <span className={styles.label}>Likes</span>
            <span className={styles.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

Profile.defaultProps = {
  avatar: "http://simpleicon.com/wp-content/uploads/user1.svg",
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;
