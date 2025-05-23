import React, { useState, useEffect } from 'react'
import './Art.css'

function Art() {
  const [selectedCosplay, setSelectedCosplay] = useState(null)

  const artPieces = [
    {
      title: "Master Chief Armor",
      description: "A detailed Spartan armor costume from the Halo universe, crafted with fiberglass and spray paint to recreate the iconic MJOLNIR armor.",
      imageUrl: "/src/assets/halo.63fa039c.jpg",
      buildDetails: {
        materials: ["Cardstock", "Fiberglass", "Fiberglass Resin", "Spray Paint", "Motorcycle Helmet Visor", "Velcro"],
        techniques: ["Pepakura", "Sanding", "Strapping", "Electronics Integration"]
      }
    },
    {
      title: "Snorlax Costume",
      description: "A full-size Snorlax costume capturing the beloved Pokémon's distinctive look and size, towering at 7 feet tall.",
      imageUrl: "/src/assets/snorlax-centered.jpg",
      buildDetails: {
        materials: ["Faux Fur", "EVA Foam", "Aluminum Bars", "Contact Cement", "Worbla"],
        techniques: ["Pepakura", "Pattern Making", "Sewing", "Foam Fabrication", "Support Structure Fabrication"]
      }
    },
    {
      title: "Big the Cat Cosplay",
      description: "A character costume bringing Big the Cat from Sonic to life, featuring custom tailoring and attention to character details.",
      imageUrl: "/src/assets/Big.ce70456d.jpg",
      buildDetails: {
        materials: ["Faux Fur", "EVA Foam", "Worbla", "Aluminum Bars", "Contact Cement", "Plasti Dip"],
        techniques: ["Pepakura", "Pattern Making", "Sewing", "Airbrushing", "Foam Fabrication", "Support Structure Fabrication"]
      }
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
          {artPieces.map((piece, index) => (
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
                    {selectedCosplay.buildDetails.techniques.map((technique, index) => (
                      <span key={index} className="technique-tag">{technique}</span>
                    ))}
                  </div>
                  <div className="techniques">
                    {selectedCosplay.buildDetails.materials.map((material, index) => (
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