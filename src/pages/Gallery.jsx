import SectionIntro from "../components/SectionIntro";
import GalleryTile from "../components/GalleryTile";

const tiles = [
  { icon: "bi-shop", title: "Our Dattawadi Storefront", gradient: "linear-gradient(135deg,#B3242A,#8C1B20)", img: "/images/gallery/storefront.png", big: true },
  { icon: "bi-cup-straw", title: "Fresh Milk, Daily", gradient: "linear-gradient(135deg,#1B3A63,#12294A)", img: "/images/gallery/milk.jpg" },
  { icon: "bi-cup-fill", title: "Signature Lassi", gradient: "linear-gradient(135deg,#D4A017,#B3242A)", img: "/images/gallery/lassi.jpg" },
  { icon: "bi-droplet-fill", title: "Bilona-Style Ghee", gradient: "linear-gradient(135deg,#8C1B20,#D4A017)", img: "/images/gallery/ghee.jpg" },
  { icon: "bi-square-fill", title: "Fresh-Cut Paneer", gradient: "linear-gradient(135deg,#12294A,#1B3A63)", img: "/images/gallery/paneer.jpg" },
  { icon: "bi-flower2", title: "Seasonal Shrikhand", gradient: "linear-gradient(135deg,#D4A017,#F0C955)", img: "/images/gallery/shrikhand.jpg" },
  { icon: "bi-egg-fried", title: "Hand-Skimmed Cream", gradient: "linear-gradient(135deg,#1B3A63,#B3242A)", img: "/images/gallery/cream.jpg" },
  { icon: "bi-basket2-fill", title: "Everyday Essentials", gradient: "linear-gradient(135deg,#B3242A,#D4A017)", img: "/images/gallery/essentials.jpg" },
];

export default function Gallery() {
  return (
    <>
      <section className="position-relative" style={{ paddingTop: "9rem", paddingBottom: "3rem", background: "linear-gradient(180deg,#FBF6EC,#F1E8D8)" }}>
        <div className="container">
          <SectionIntro
            eyebrow="A peek inside"
            title="Gallery"
            desc="A visual taste of the parlour — from the storefront to the shelf."
            align="center"
          />
        </div>
      </section>

      <section className="section bg-white pt-0">
        <div className="container">
          <div className="row g-3">
            <div className="col-md-6">
              <GalleryTile {...tiles[0]} index={0} />
            </div>
            <div className="col-md-6">
              <div className="row g-3 h-100">
                {tiles.slice(1, 3).map((t, i) => (
                  <div className="col-6" key={t.title}>
                    <GalleryTile {...t} index={i + 1} />
                  </div>
                ))}
                {tiles.slice(3, 5).map((t, i) => (
                  <div className="col-6" key={t.title}>
                    <GalleryTile {...t} index={i + 3} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="row g-3 mt-1">
            {tiles.slice(5).map((t, i) => (
              <div className="col-sm-6 col-lg-4" key={t.title}>
                <GalleryTile {...t} index={i + 5} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
