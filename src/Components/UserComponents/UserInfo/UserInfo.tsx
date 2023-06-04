import Avatar from "@mui/material/Avatar";
import "./userInfo.scss";
import PhotoCameraRoundedIcon from "@mui/icons-material/PhotoCameraRounded";
interface UserInfoProps {
  photo: string;
  name: string;
  phone: number;
  editPhoto?: boolean;
  setEditPhoto?: () => void;
}

export const UserInfo = ({
  photo,
  name,
  phone,
  editPhoto,
  setEditPhoto,
}: UserInfoProps) => {
  return (
    <div className="users_profile">
      <button className="photo_upload" onClick={setEditPhoto}>
        <PhotoCameraRoundedIcon />
      </button>
      {editPhoto ? (
        <form name="photo">
          <label htmlFor="photo">
            <input type="file" id="photo" />
          </label>
        </form>
      ) : (
        <Avatar
          src={photo}
          alt="usersImage"
          sx={{
            width: 250,
            height: 250,
          }}
        />
      )}

      <span>Name:&nbsp; {name} </span>
      <span>Phone:&nbsp; {phone} </span>
      <button className="edit">Edit profile</button>
    </div>
  );
};
