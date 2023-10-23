import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Experiences from './Experiences'
import Card from './Card'
import data from './datafile'
export default function App(){
	const cards = data.map(item => {
		return(
			<Card
				key={item.id}
				item={item}
			/>
		)
	})
	return(
		<div>
			<Navbar />
			<Hero />
			<Experiences />
			<section className="cards-list">
               			 {cards}
						{cards}
            		</section> 
					
		</div>

	)

}
