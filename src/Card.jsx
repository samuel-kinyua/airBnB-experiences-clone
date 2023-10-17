import React from 'react'

export default function Card(props){
	return(
		<div className='card'>
			<img className="card--image" src={`/assets/${props.item.coverImg}`} />
			<div className="card--text">
				<div className="stats">
					<img className="rating--star" src={"/assets/star.png"} />
					<span className="rating"> {props.item.stats.rating} </span>
					<span className="reviewCount" >({props.item.stats.reviewCount})</span>
					<span className="location"> . {props.item.location}</span>
				</div>
				<p className="title"> {props.item.title}</p>
				<p> <span className="price">${props.item.price}</span> /Person</p>
			
				

			</div>

		</div>
	)
}

