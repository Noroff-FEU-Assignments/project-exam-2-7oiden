import adminImg from "../../images/admin-avatar.jpg";

function ProfileImage({ onClick }) {
  return (
    <button onClick={onClick} className="transparent-profile-button">
      <img src={adminImg} alt="Admin avatar" className="admin-image"></img>
    </button>
  );
}
export default ProfileImage;
