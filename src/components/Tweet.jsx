import Avatar from "./Avatar";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet({ user, timestamp, message}) {
  return (
    <div className="tweet">
      <Avatar image={user.image} />
      <div className="body">
        <div className="top">
          <span className="user">
            <User name={user.name} />
            <User handle={user.handle} />
          </span>

          <span className="timestamp">
            <Timestamp timestamp={timestamp} />
          </span>
        </div>

        <p className="message">
          <Message message={message} />
        </p>

        <div className="actions">
          {/* Font Awesome icons */}
          <Actions />
        </div>
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
