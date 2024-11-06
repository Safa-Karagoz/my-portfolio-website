import React, { useState, useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';
import * as d3 from 'd3';
import earthDark from '../../../assets/interactive-globe/earth-dark.jpg';
import nightSky from '../../../assets/interactive-globe/night-sky.png';
import countriesGeoJson from '../../../assets/interactive-globe/countryCustom.geojson';

const GlobeRender = () => {
  const globeEl = useRef();
  const containerRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 100, height: 100 });
  const [countries, setCountries] = useState({ features: [] });
  const [hoverD, setHoverD] = useState();
  const [altitude, setAltitude] = useState(0.06);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    const globe = globeEl.current;
    if (globe) {
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = 2;
    }

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    fetch(countriesGeoJson)
      .then(res => res.json())
      .then(data => {
        const countriesWithVotes = {
          ...data,
          features: data.features.map(feature => ({
            ...feature,
            properties: {
              ...feature.properties,
              POP_EST: Math.floor(Math.random() * 50)
            }
          }))
        };
        setCountries(countriesWithVotes);

        setTimeout(() => {
          setAltitude(() => feat => Math.max(0.06, Math.sqrt(feat.properties.POP_EST) * 8e-2));
        }, 2000);
      });
  }, []);

  const colorScale = d3.scaleSequential()
    .domain([0, 50])
    .interpolator(d3.interpolate("#FFC0CB", "#D32F2F"));

  const getPop = feat => Math.max(1, feat.properties.POP_EST || 0);

  return (
    <div ref={containerRef} className="w-full h-full absolute inset-0">
      <Globe
        ref={globeEl}
        width={dimensions.width}
        height={dimensions.height}
        globeImageUrl={earthDark}
        backgroundImageUrl={nightSky}
        lineHoverPrecision={0}
        polygonsData={countries.features?.filter(d => d.properties.ISO_A2 !== 'AQ')}
        polygonAltitude={altitude}
        polygonCapColor={d => colorScale(getPop(d))}
        polygonSideColor={() => 'rgba(255, 192, 203, 0.15)'}
        polygonStrokeColor={() => '#111'}
        polygonLabel={({ properties: d }) => `
          <div class="bg-gray-800/90 px-2 py-1 rounded-lg text-sm">
            <b>${d.ADMIN} (${d.ISO_A2})</b><br />
            Votes: <i>${d.POP_EST || 0}</i>
          </div>
        `}
        onPolygonHover={setHoverD}
        polygonsTransitionDuration={300}
      />
    </div>
  );
};

export default GlobeRender;