import React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import javascript from '../../assets/java-script.png';
import react from '../../assets/react.png';
import git from '../../assets/git.png';
import python from '../../assets/python.png';
import npm from '../../assets/npm.png';
import figma from '../../assets/figma.png';

const EmblaCarousel = (props) => {


    const arr = [html, css, javascript, react, git, python, npm, figma];


  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {arr.map((ele, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <img src={ele}></img>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel;
