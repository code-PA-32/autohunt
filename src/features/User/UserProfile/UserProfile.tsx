import { ProfileText } from "Components/UserComponents";
import { ProfileLink } from "Components/UserComponents/ProfileLinks/ProfileLinks";
import PhotoCameraRoundedIcon from "@mui/icons-material/PhotoCameraRounded";
import AddPhotoAlternateRoundedIcon from "@mui/icons-material/AddPhotoAlternateRounded";
import { useProfile } from "./useProfile";
import { Avatar } from "@mui/material";
import "./userProfile.scss";
import * as Yup from "yup";
import { toHost } from "utils";
import { Form, Field, Formik, ErrorMessage } from "formik";
import { TextField } from "@mui/material";

export const UserProfile = () => {
  const {
    user,
    onEditPhoto,
    edit,
    handleImageChange,
    updateUser,
    editUser,
    onEditUser,
  } = useProfile();
  console.log(user);
  return (
    <>
      <div className="users_profile">
        <button className="photo_upload" onClick={onEditPhoto}>
          <PhotoCameraRoundedIcon />
        </button>
        {edit ? (
          <label htmlFor="photo" className="photo_select">
            <AddPhotoAlternateRoundedIcon />
            <span>Select Photo</span>
            <input type="file" id="photo" onChange={handleImageChange} />
          </label>
        ) : (
          <Avatar
            src={toHost(user.photo)}
            alt="usersImage"
            sx={{
              width: 250,
              height: 250,
            }}
          />
        )}

        <span>Name:&nbsp; {user.name} </span>
        <span>Phone:&nbsp; {user.phone} </span>
        {editUser && (
          <Formik
            initialValues={{
              name: user.name,
              phone: user.phone,
            }}
            validationSchema={Yup.object({
              name: Yup.string().required().min(4),
              phone: Yup.number()
                .test(
                  "len",
                  "Number must be al least 9 digits",
                  (val) => val?.toString().length! >= 9
                )
                .required(),
            })}
            onSubmit={updateUser}
          >
            {({ errors, touched, getFieldProps }) => (
              <Form name="user_data" className="update_user">
                <Field
                  {...getFieldProps("name")}
                  label="Name"
                  as={TextField}
                  error={errors.name && touched.name}
                  helperText={<ErrorMessage name={"name"} />}
                />
                <Field
                  {...getFieldProps("phone")}
                  label="Phone"
                  as={TextField}
                  error={errors.phone && touched.phone}
                  helperText={<ErrorMessage name={"phone"} />}
                />
                <div className="buttons">
                  <button onClick={onEditUser}>Cancel</button>
                  <button type="submit">Update</button>
                </div>
              </Form>
            )}
          </Formik>
        )}
        {!editUser && (
          <button className="edit" onClick={onEditUser}>
            Edit profile
          </button>
        )}
      </div>
      <ProfileLink isAdmin={user.isAdmin} />
      <ProfileText />
    </>
  );
};
