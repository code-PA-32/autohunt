import { useCarPicture } from "./useCarPicture";
import "./carPicture.scss";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
export const CarPicture = () => {
  const { images, onImageDelete, uploadImage } = useCarPicture();
  return (
    <div className="pictures">
      <h3>Images</h3>
      <span>Upload your images</span>

      <div className="image-select">
        <label htmlFor="image-loader">
          <AddRoundedIcon fontSize="large" />
        </label>
        <input
          className="image-loader"
          id="image-loader"
          multiple
          required={images.length === 0 ? true : false}
          type="file"
          onChange={(e) => {
            uploadImage(e);
          }}
        />

        <ul className="image-list">
          {images.length !== 0
            ? images.map((item, index) => (
                <li key={item} className="image-list-item">
                  <img src={item} alt="uploaded" />
                  <button
                    className="delete-image"
                    onClick={() => onImageDelete(index)}
                  >
                    <DeleteForeverRoundedIcon />
                  </button>
                </li>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
};
