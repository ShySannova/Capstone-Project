import "./SkeletonCustom.scss";


const SkeletonCustom = () => {
  return (
    //loading animation
        <div className="skeletonCard">
            <div className="skeletonImg animate-pulse">

            </div>
            <div className="skeletonContent">
              <div className="skeletonTitle animate-pulse"></div>
              <div className="skeletonRating animate-pulse"></div>
            </div>
            <hr className="animate-pulse"/>
            <div className="skeletonDesc animate-pulse"></div>
            <div className="skeletonExtra animate-pulse"></div>
        </div>
  );
};

export default SkeletonCustom;
