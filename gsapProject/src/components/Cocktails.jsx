import gsap from 'gsap';
import { cocktailLists, mockTailLists } from '../../constants';
import { SplitText, ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
function Cocktails() {
    const ulRef = useRef(null);
    gsap.registerPlugin(SplitText);
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(() => {
        const liSplit = new SplitText('li', {type: 'lines'});

        gsap.timeline({
            scrollTrigger: {
                trigger: '#cocktails',
                start: 'top 50%',
                end: 'bottom 80%',
            }
        }).from(liSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
        })

        const parallaxTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#cocktails',
                start: 'top 30%',
                end: 'bottom 80%',
                scrub: true,   
            }
        })

        parallaxTimeline
        .from('#c-left-leaf', {
            x: -100, y: 100,
        })
        .from('#c-right-leaf', {
            x: 100, y: 100
        })
    })

  return (
    <section id='cocktails' className="noisy">
        <img src="/images/cocktail-left-leaf.png" alt="left-leaf" id='c-left-leaf' />
        <img src="/images/cocktail-right-leaf.png" alt="right-leaf" id='c-right-leaf' />
    
        <div className="list">
            <div className="popular">
                <h2>Most popular cocktails:</h2>
                <ul ref={ulRef}>
                    {cocktailLists.map(({name, country, detail, price}) => (
                        <li key={name}>
                            <div className="md:me-28">
                                <h3>{name}</h3>
                                <p>{country} | {detail}</p>
                            </div>
                            <span>- {price}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="loved">
                <h2>Most loved mocktails:</h2>
                <ul>
                    {mockTailLists.map(({name, country, detail, price}) => (
                        <li key={name}>
                            <div className="md:me-28">
                                <h3>{name}</h3>
                                <p>{country} | {detail}</p>
                            </div>
                            <span>- {price}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Cocktails
