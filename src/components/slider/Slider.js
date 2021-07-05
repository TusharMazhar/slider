import React, {useState} from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        {/* <img  alt='sliders'
                        src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} 
                        /> */}
                        <div style={{display:'flex',color:'white',textAlign:'justify'}}>
                            <div style={{padding:'150px'}}>
                               <div style={{marginBottom:'19px'}}>{obj.comment}</div>
                               <div style={{display:'flex'}}>
                                   <img src={obj.img} alt=''style={{borderRadius: '50%',width:'50px',height:'50px',marginRight:'5px',marginTop:'4px'}}/>
                                   <div>
                                    <div>{obj.name}</div>
                                    <div>{obj.position}</div>
                                   </div>
                               </div>
                            </div>
                            {/* <div>
                               <div style={{marginBottom:'19px'}}>{obj.comment}</div>
                               <div>{obj.name}</div>
                               <div>{obj.position}</div>

                            </div> */}
                        </div>
                    </div>
                )
            })}
            

            <div className="container-dots">
                {Array.from({length: 3}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
        </div>
    )
}