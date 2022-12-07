import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const Friend = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <span
        className={css.status}
        style={
          isOnline === true
            ? { backgroundColor: '#318ce7' }
            : { backgroundColor: '#dddddd' }
        }
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
};

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <li
          className={friend.isOnline ? css.item : css.offlineItem}
          key={friend.id}
        >
          <Friend friend={friend} />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
