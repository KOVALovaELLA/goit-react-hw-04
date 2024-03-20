import css from "./ImageGallery.module.css";
import ImageCard from "./ImageCard/ImageCard";

export default function ImageGallery({ photos, openModal }) {
  return (
    <ul className={css.ImageGallery}>
      {photos.map((photo) => (
        <li key={photo.id}>
          <ImageCard photo={photo} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
}
