import React, { useState, useEffect } from 'react'
import './Art.css'

// Import cosplay images
import masterChiefImage from '../assets/halo.63fa039c.jpg'
import snorlaxImage from '../assets/snorlax-centered.jpg'
import bigTheCatImage from '../assets/Big.ce70456d.jpg'

function Art() {
  const [selectedCosplay, setSelectedCosplay] = useState(null)

  const cosplays = [
    {
      title: "Master Chief Armor",
      imageUrl: masterChiefImage,
      description: "A detailed recreation of Master Chief's iconic MJOLNIR armor from the Halo series. While not perfect, this build taught me a lot about working with fiberglass and electronics.",
      techniques: ["Pepakura", "Paint Weathering", "Sanding", "Strapping", "Electronics Integration"],
      materials: ["Cardstock", "Fiberglass", "Fiberglass Resin", "Velcro", "Spray Paint", "Electronics"]
    },
    {
      title: "Snorlax", 
      imageUrl: snorlaxImage,
      description: "A massive 7-foot tall Snorlax costume that brings the beloved Pokémon to life. This oversized costume required innovative construction techniques to maintain both the character's iconic shape and wearer mobility.",
      techniques: ["Pepakura", "Large-Scale Sewing", "Foam Fabrication", "Pattern Design", "Foam Carving"],
      materials: ["EVA Foam", "Faux Fur", "Aluminum Bars", "Contact Cement", "Worbla"]
    },
    {
      title: "Big the Cat",
      imageUrl: bigTheCatImage,
      description: "A faithful recreation of Big the Cat from The Sonic Series, complete with his signature purple fur and his BIG stature.",
      techniques: ["Pepakura", "Airbrushing", "3D Printing", "Foam Fabrication", "Pattern Design"],
      materials: ["EVA Foam", "Faux Fur", "Aluminum Bars", "Contact Cement", "Plasti Dip"]
    }
  ]

  const openModal = (cosplay) => {
    setSelectedCosplay(cosplay)
  }

  const closeModal = () => {
    setSelectedCosplay(null)
  }

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedCosplay) {
      document.body.classList.add('modal-open')
    } else {
      document.body.classList.remove('modal-open')
    }

    // Cleanup function to remove class when component unmounts
    return () => {
      document.body.classList.remove('modal-open')
    }
  }, [selectedCosplay])

  return (
    <section id="art" className="art">
      <h2>My Cosplays</h2>
      <div className="art-content">
        <p className="art-intro">
          Cosplay has become one of my favorite creative outlets, allowing me to bring beloved 
          characters to life through hands-on crafting. Each costume you see here was designed 
          and built by me from scratch, combining various materials and techniques to achieve 
          the final result.
        </p>
        <div className="art-grid">
          {cosplays.map((piece, index) => (
            <div 
              key={index} 
              className="art-piece clickable" 
              onClick={() => openModal(piece)}
            >
              <div className="art-image-container">
                <img 
                  src={piece.imageUrl} 
                  alt={piece.title} 
                  className="art-image"
                />
                <div className="art-overlay">
                  <div className="art-info">
                    <h3>{piece.title}</h3>
                    <button className="see-more-btn">See More</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCosplay && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-body">
              <div className="modal-image">
                <img src={selectedCosplay.imageUrl} alt={selectedCosplay.title} />
              </div>
              <div className="modal-details">
                <h2>{selectedCosplay.title}</h2>
                <p className="modal-description">{selectedCosplay.description}</p>
                
                <div className="build-section">
                  <h3>
                    <span className="techniques-title">Techniques</span> and <span className="materials-title">Materials</span>
                  </h3>
                  <div className="techniques">
                    {selectedCosplay.techniques.map((technique, index) => (
                      <span key={index} className="technique-tag">{technique}</span>
                    ))}
                  </div>
                  <div className="techniques">
                    {selectedCosplay.materials.map((material, index) => (
                      <span key={index} className="material-tag">{material}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Art 