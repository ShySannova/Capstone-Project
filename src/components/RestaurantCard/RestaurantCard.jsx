import { Link } from "react-router-dom"
import "./RestaurantCard.scss"
import { useDispatch } from 'react-redux'
import { isStart } from "../../redux/menuRedux"
<<<<<<< HEAD
import SkeletonCustom from "../Skeleton/SkeletonCustom"
=======
>>>>>>> 56c6c46fee24ad2b9059e1750f9f0ad01fde0a63


const RestaurantCard = ({data}) => {
    // console.log(data)
    const dispatch=useDispatch();

  return (
    <section className="restaurants">
            <h3>Top Restaurants With Awesome Cuisine</h3>
<<<<<<< HEAD
            <div className={data?"restaurants_container":"skeleton_container"}>

                {!data?[...Array(9).keys()].map(i=>{

                    return <SkeletonCustom key={i}/>
                })
                :

                (data?.map((item,index)=>{
=======
            <div className="restaurants_container">

                {data?.map((item,index)=>{
>>>>>>> 56c6c46fee24ad2b9059e1750f9f0ad01fde0a63
                    return(
                        <Link to="/restaurant/menu" key={index} onClick={()=>{
                            dispatch(isStart(item))}}>
                            <div className="card">
                                <div className="img">
                                    <img src={item?.img} alt=""/>
                                </div>
                                <div className="content">
                                    <div className="head">
                                        <h3>{item?.name}</h3>
                                        <span>4.2
                                            <small>
                                                <i className="fa-solid fa-star"></i>
                                            </small>
                                        </span>
                                    </div>
                                    <div className="bottom">
                                        <p className="desc">{item?.tags}</p>
                                        <span> Open Hours : {item?.timing?.open}a.m - {item?.timing?.closed}p.m</span>
                                    </div>
                                </div>
                            </div>
                        </Link>     
                    )          
<<<<<<< HEAD
                }))
            }
=======
                })}
>>>>>>> 56c6c46fee24ad2b9059e1750f9f0ad01fde0a63

                
                
            </div>

        </section>
  )
}

export default RestaurantCard