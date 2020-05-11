import React from 'react'
import Hero1 from './hero1.jpg'
import Affiche from './affiche1.jpg'
import Montagne from './Montagne1.jpg'
import CDC from './CDC1.png'
import Photon from './photon1.jpg'
import Unity from './Unity.jpg'


export default ({ portfolioLinks }) => {
    return (
<section class="bg-light page-section" id="portfolio">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">Etape du Projet</h2>
          <h3 class="section-subheading text-muted">Image exclusive fourni par Baco Studio</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src={CDC} alt=""/>
          </a>
          <div class="portfolio-caption">
            <h4>Cahier des Charges</h4>
            <p class="text-muted">Latex</p>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal2">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="Affiche" src={Affiche} alt=""/>
          </a>
          <div class="portfolio-caption">
            <h4>Affiche</h4>
            <p class="text-muted">Photoshop</p>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal3">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src={Hero1} alt=""/>
          </a>
          <div class="portfolio-caption">
            <h4>Personnage</h4>
            <p class="text-muted">Photoshop</p>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal4">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src={Unity} alt=""/>
          </a>
          <div class="portfolio-caption">
            <h4>Mise en Place Multijoueur</h4>
            <p class="text-muted">Unity</p>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal5">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="Photon" src={Photon} alt=""/>
          </a>
          <div class="portfolio-caption">
            <h4>Photon</h4>
            <p class="text-muted">Pun</p>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal6">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src={Montagne} alt=""/>
          </a>
          <div class="portfolio-caption">
            <h4>Map</h4>
            <p class="text-muted">Blender</p>
          </div>
        </div>
      </div>
    </div>
  </section>
    )
}