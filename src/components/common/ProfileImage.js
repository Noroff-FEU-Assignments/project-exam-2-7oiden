import adminImg from "../../images/adminImg.jpeg";

function ProfileImage({ onClick }) {
  return (
    <button onClick={onClick} className="transparent-profile-button">
      <img src={adminImg} alt="Admin profile" className="admin-image"></img>
    </button>
  );
}
export default ProfileImage;
