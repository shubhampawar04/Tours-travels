import React, {useEffect} from 'react'
import './main.css'
import { HiOutlineClipboard, HiOutlineLocationMarker, HiOutlineClipboardCheck } from 'react-icons/hi'

import img from './../Assest/Raigad.jpg'
import img2 from './../Assest/Shivneri.jpg'
import img3 from './../Assest/Sinhagad.jpg'
import img4 from './../Assest/Pratapgad.jpg'
import img5 from './../Assest/Panhala.jpg'
import img6 from './../Assest/Sindhudurg.jpg'
import img7 from './../Assest/Rajgad.jpg'
import img8 from './../Assest/Purandar.jpg'
import img9 from './../Assest/Visapur.jpg'


const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Raigad Fort',
    location: 'Raigad Maharashtra',
    grade: 'Type :- Hill Fort',
    fees: '1,356 metres (4,400 ft) Height',
    description: 'Raigad is a hill fort situated at about 25 Km from Mahad in the Raigad district. Chhatrapati Shivaji renovated this fort and made it his capital in 1674 AD. The rope-way facility is available at Raigad Fort, to reach at the fort from ground in few minutes.'
  },

  {
    id: 2,
    imgSrc: img2 ,
    destTitle: ' Shivneri Fort',
    location: 'Pune Maharashtra',
    grade:'Type :- Fort',
    fees: '3500 feet Height',
    description: 'Shivneri Fort is a very famous fort in the Junnar region of Maharashtra. It holds a lot of historical importance as it was the birthplace of Chhatrapati Shivaji Maharaj. This place is ideal for one day treks/visits and requires moderate trekking experience.'
  },

  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Sinhagad Fort',
    location: 'Pune District, Maharashtra',
    grade: 'Type :- Hill Fort',
    fees: '1,317 metres (4,321ft) Height',
    description: 'Sinhagad fort, whose earlier name was Kondana or Kondhana, stands 20kms, south-west of Pune.  Perched on an isolated cliff of the Bhuleswar range of the Sahyadri Mountains, its height above sea-level is 1380 metres.  Given natural protection by its very steep slopes, the walls and bastions were constructed at only key places; it has two gates – the Kalyan Darwaza in the south-east and the Pun Darwaza in the north-east'
  },

  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Pratapgad Fort',
    location: 'Satara district, Maharashtra',
    grade: 'Type :- Hill Fort',
    fees: '3543 feet Height',
    description: 'Chhatrapati Shivaji Maharaj had extended his kingdom on the banks of rivers Nira and Koyana. In order to safeguard this area of his kingdom, he felt need to have a well-built fort. This fort is called Pratapgad . As per the records in the history, Pratapgad fort was built in the year 1657. Pratapgad is situated at 8 kilometres, west of Mahabaleshwar, in Jawali taluka of North Satara district. The fort is built on the mound named Deparya, between Par and Kineshwar towns.'
  },

  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Panhala Fort',
    location: 'Kolhapur, Maharashtra',
    grade: 'Type :- Hill Fort',
    fees: '845 m (2,772 ft) ASL Height',
    description: 'Panhala or Panhalgarh, about 19kms north-west of Kolhapur, is possibly the largest and most important fort of the Deccan. Roughly triangular in shape, the hill fort stands at a height of about 850 metres and has a circumference of approximately 7.25kms. Half of its length is protected by a natural scarp reinforced by a parapet wall and the remaining half is surrounded by a strong stone wall strengthened with bastions. The fort had three magnificent double walled gates, out of which two have survived. The Teen Darwaza to the west is an imposing and powerful structure.'
  },

  {
    id: 6,
    imgSrc: img6 ,
    destTitle: 'Sindhudurg Fort',
    location: 'Sindhudurg district, Maharashtra',
    grade: 'Type :- Island',
    fees: '-',
    description: 'Sindhudurg fort stands on a rocky island, known as Kurte, barely a km, from the Malavan is 510kms south of Mumbai and 130kms north of Goa. Sindhudurg was built in 1664-67 AD by shivaji when all his attempts to take the island fort of Janjira proved futile. The construction was done under the supervision of Hiroji Indulkar, an able architect. Shivaji had invited 100 Portuguese experts from Goa for the construction of the fort. It is also recorded that 3000 workers were employed round the clock for three years to build Sindhudurg. It was the body from the Sack of Surat that went into the building of Sindhudurg.'
  },

  {
    id: 7,
    imgSrc: img7 ,
    destTitle: 'Rajgad Fort',
    location: 'Pune District, Maharashtra',
    grade: 'Type :- Hill Fort',
    fees: '1376 m Height',
    description: 'Rajgad (literal meaning ruling fort) is a Hill region fort situated in the Pune district of Maharashtra, India. Formerly known as Murumbdev, the fort was the first capital of the Maratha Empire under the rule of Chhatrapati Shivaji for almost 26 years, after which the capital was moved to the Raigad Fort.'
  },

  {
    id: 8,
    imgSrc: img8,
    destTitle: 'Purandar Fort',
    location: 'Pune district, Maharashtra',
    grade: ' Type:- Hill Fort',
    fees: '1,374 metres (4,508 ft) Height',
    description: 'Historical records mention that Purandar belongs to the 11th century Yadava Dynasty. The Persians defeated the Yadavas and conquered the area and, in 1350, they built the Purandar Fort. It was ruled by the government during the reign of the Ahmednagar and Bijapur Kings. When it was overtaken by the Berar Sultanate, the fort was attacked a number of times. To protect the fort, a man and a woman were buried alive to please the Kul devata (the patron deity). At the place where they were buried, a fort bastion was erected. '
  },

  {
    id: 9,
    imgSrc: img9 ,
    destTitle: 'Visapur Fort',
    location: 'Visapur, Maharashtra',
    grade: 'Type :- Hill Fort',
    fees: '1,084 m (3,556 ft) ASL Height',
    description: 'Visapur fort is a hill fort built by Balaji Vishwanath during 1713-1720 CE. Balaji Vishwanath was first Peshwa of Maratha empire. Though Visapur fort is built much later than Lohagad fort, the two forts are closely linked as Visapur fort is fortified for protecting Lohagad fort.  Both these forts are of Satwahan Era. Too keep watch on Konkan and Bor Ghat, these both forts were of great importance during Shivaji.'
  }
]

const Main = () => {
  return (
    <section className='main container section'>

      <div className='secTitle'>
        <h3 className='title'>
          Most visited destinations..!
        </h3>
      </div>

      <div className='secContent grid'>
        {
          Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} className='singleDestination'>
                <div className='imageDiv'>
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className='cardInfo'>
                  <h4 className='destTitle'>{destTitle}</h4>
                  <span className='continent flex'>
                    <HiOutlineLocationMarker className='icon' />
                    <span className='name'>{location}</span>
                  </span>

                  <div className='fees flex'>
                    <div className='grade'>
                      <span>{grade}</span>
                    </div>
                    <div className='price'>
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className='desc'>
                    {description}
                  </div>

                  <button className='btn flex'>
                    DETAILS <HiOutlineClipboard className='icon' />
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main