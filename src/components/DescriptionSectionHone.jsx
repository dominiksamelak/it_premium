import { ReactGoogleReviews } from "react-google-reviews";    
import descPhotoOne from "../components/img/home/desc-photo-one.png";
import descPhotoTwo from "../components/img/home/desc-photo-two.png";     
import "../components/styles/descriptionsectionhome.css"

  function DescriptionSection () {
    return (
      <div className="description">
        <div className="description-one">
          <span className="color-updown"></span>
          <div className="description-one-container">
            <span className="description-text-one">lorem </span>
            <span className="description-text-two">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
              voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
              quia consequuntur magni{" "}
            </span>
            <span className="description-text-three">
              Excepteur sint occaecat cupidatat non deserunt mollit anim id est
              laborum!{" "}
            </span>
          </div>
          <img src={descPhotoOne} alt="photo" className="desc-photo" />
        </div>
        <div className="description-two">
          <img src={descPhotoTwo} alt="photo" className="desc-photo" />
          <div className="description-two-container">
            <span className="description-text-one">testtesttesttesttest</span>
            <span className="description-text-two">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremqu
            </span>
            <span className="description-text-three">
              Excepteur sint occaecat cupidatat non deserunt mollit anim id est
              laborum!
            </span>
            <div className="google-reviews-desc">
              <ReactGoogleReviews
                layout="badge"
                featurableId="f9a57238-df62-4c52-8448-6d9130fdedd3"
              />
            </div>
          </div>
          <span className="color-updown-two"></span>
        </div>
        <div className="google-reviews">
          <ReactGoogleReviews
            layout="carousel"
            featurableId="f9a57238-df62-4c52-8448-6d9130fdedd3"
          />
        </div>
      </div>
    )
  }

  export default DescriptionSection;
