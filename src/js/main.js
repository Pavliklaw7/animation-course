import gsap from 'gsap';
import CustomEase from 'gsap/CustomEase';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { doc } from 'prettier';
// import Scrollbar from 'smooth-scrollbar';
import example from './modules/example';



$(document).ready(() => {
  example();

  gsap.registerPlugin(CustomEase, ScrollTrigger);

  const vh = window.innerHeight;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  /* --- --- animation gsap-to --- --- */

  gsap.to('.logo, .shield', { transformOrigin: '50% 50%' });
  gsap.to('.logo, .shield', { duration: 2, rotate: 360 });


  /* --- --- animation gsap-from && timeline --- --- */

  const tl = gsap.timeline({repeat: Infinity, yoyo: true});

  tl.from('.gsap-from__logo', { duration: 2, opacity: 0, scale: '0.3', ease: 'back' });
  tl.to('.gsap-from__logo', { duration: 1, rotate: 360 });
  tl.from('.circle-row__item', { duration: 2, opacity: 0, scale: '0.3', y: 'random(-200, 200)', ease: 'back', stagger: '0.15' }, '<')
  tl.addLabel('circlesOutro', "+=1");
  tl.to('.circle-row__item', {duration: 1, opacity: 0, x: '300%', ease: 'power3.out'}, 'circlesOutro')
  // () => Math.random() * 400 - 200

  /* --- --- gsap events --- --- */
  const myObj = {rotate: 0};

  const tweenOnUpdate = (prop) => {
    console.log(prop);
  }

  gsap.to(
    myObj, {
      duration: 10,
      rotate: 360,
      repeat: 3,
      onUpdate: () => tweenOnUpdate(myObj.rotate),
      onStart: () => {
        console.log('onStart', myObj.rotate);
      },
      onComplete: () => {
        console.log('onComplete', myObj.rotate);
      },
      onRepeat: () => {
        console.log('onRepeat', myObj.rotate);
      },
      onReverseComplete: () => {
        console.log('onReverseComplete', myObj.rotate);
      },
    }
  )

  /* --- --- gsap ScrollTriger --- --- */

  // gsap.to('.circle-col__item', { 
  //   scrollTrigger: {
  //     trigger: '.circle-col__item.trigger',
  //     toggleActions: 'restart pause none none',
  //     markers: true,
  //     start: 'top center',
  //     scrub: true,
  //     end: () => `'+='${document.querySelector('.circle-col__item.trigger').offsetWidth}`,
  //   },
  //   x: '200%',
  //   rotate: 360,
  //   duration: 3
  // })

  ScrollTrigger.create({
    trigger: '#green',
    start: 'top top',
    end: '+=300px',
    pinSpacing: false,
    pin: true
  })



})
