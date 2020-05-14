import React from 'react'
import Montagne from './Montagne1.jpg'
import Photon from './photon1.jpg'
import Game from './Game.jpg'
import AI from './AI.PNG'
import maya from './Maya.PNG'
import troisD from './3d.PNG'


export default ({ PortfolioLinks2 }) => {
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
            <img class="img-fluid" src={AI} alt=""/>
          </a>
          <div class="portfolio-caption">
            <h4>Vectorisation Image</h4>
            <p class="text-muted">Illustrator</p>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal2">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="Affiche" src={troisD} alt=""/>
          </a>
          <div class="portfolio-caption">
            <h4>Contour </h4>
            <p cladss="text-muted">Blender</p>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal3">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src={maya} alt=""/>
          </a>
          <div class="portfolio-caption">
            <h4>Contour</h4>
            <p class="text-muted">Maya Autodesk</p>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal4">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src={Game} alt=""/>
          </a>
          <div class="portfolio-caption">
            <h4>Ajout d'une barre de vie</h4>
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
            <h4>Multijoueur</h4>
            <p class="text-muted">Pun2</p>
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