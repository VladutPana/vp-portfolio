import Particles from 'react-particles';
import React, {useCallback} from 'react';
import {loadFull} from 'tsparticles';

export const ParticleBackground = () => {
  const particleInit = useCallback(async(engine) => {
    await loadFull(engine);
  }, []);

  const particleLoaded = useCallback(async() =>{}, []);
  return (

    <Particles className='w-full h-full absolute -z-0' id='tsparticles' init={particleInit} loaded={particleLoaded} options={
      {
        
        fullScreen: {enable : false},
        background: {
          color: {
              value: "",
          },
      },
      fpsLimit: 120,
      interactivity: {
          events: {
              onClick: {
                  enable: false,
                  mode: "push",
              },
              onHover: {
                  enable: true,
                  mode: "repulse",
              },
              resize: true,
          },
          modes: {
              push: {
                  quantity: 4,
              },
              repulse: {
                  distance: 200,
                  duration: 0.4,
              },
          },
      },
      particles: {
          color: {
              value: "#5651e5",
          },
          links: {
              color: "#5651e5",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
          },
          move: {
              direction: "none",
              enable: true,
              outModes: {
                  default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
          },
          number: {
              density: {
                  enable: true,
                  area: 800,
              },
              value: 40,
          },
          opacity: {
              value: 0.5,
          },
          shape: {
              type: "circle",
          },
          size: {
              value: { min: 1, max: 5 },
          },
      },
      detectRetina: true,
      }
    }>

    </Particles>
  )
}
