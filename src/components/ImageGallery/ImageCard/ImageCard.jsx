import css from "./ImageCard.module.css";

export default function ImageCard({
  photo: { alt_description, urls },
  openModal,
}) {
  return (
    <div className={css.imgCard}>
      <img
        src={urls.small}
        alt={alt_description}
        onClick={() => openModal({ alt_description, photoUrl: urls.regular })}
      />
    </div>
  );
}
