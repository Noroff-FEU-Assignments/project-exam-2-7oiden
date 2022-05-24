import adminImg from "../../images/admin-avatar.jpg";

function AdmProfileIcon({ onClick }) {
  return (
    <button onClick={onClick} className="navbar__profile-icon-box">
      <img
        src={adminImg}
        alt="Admin avatar"
        className="navbar__profile-icon-img"
      ></img>
    </button>
  );
}
export default AdmProfileIcon;
