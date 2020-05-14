import React from 'react';
import Omar from './Image/Omar.png'
import Charles from './Image/Charles.png'
import Bilal from './Image/Bilal.png'
import Aurelien from './Image/Aurelien.png'
import Portfolio from './components/Portfolio'
import Portfolio2 from './components/Portfolio2'
import './App.css';

function App() {
  const portfolioLinks = [ ]

  const portfolioLinks2 = [ ]

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#services">Première Présentation</a>
          </li>
         {/* <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#portfolio">Differentes Etapes</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">Chronologie du projet</a>
  </li>*/}
          
        {/*  <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
</li> */}
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#SecondePres">Seconde Présentation</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#team">Equipe</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  
  <header className="masthead">
    <div className="container">
      <div className="intro-text">
        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Decouvrir</a>
      </div>
    </div>
  </header>

  
  <section className="page-section" id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Première partie</h2>
          <h3 className="section-subheading text-muted">Logiciels principaux utilisés par Baco Studio</h3>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Unity</h4>
          <p className="text-muted">Pour ce Projet nous avons choisi d'utiliser le Moteur Graphique Unity</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Blender</h4>
          <p className="text-muted"> Nous avons utiliser Blender pour les animations et le rendu 3D</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Photon</h4>
          <p className="text-muted">Photon est le moteur reseau que nous avons utiliser pour le multijoueur</p>
        </div>
      </div>
    </div>
  </section>

  
  <Portfolio portfolioLinks={portfolioLinks}></Portfolio>

  
  <section className="page-section" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Chronologie</h2>
          <h3 className="section-subheading text-muted">L'evolution du projet au fil des mois</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="timeline">
            <li>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>Decembre 2019</h4>
                  <h4 className="subheading">Le Début de l'aventure</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">La première etape de ce projet à été de rediger le cahier des charges !</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>Janvier 2020</h4>
                  <h4 className="subheading">Le Multijoueur</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted"> Lors la présentation au début de l'année les Spé ont bien insisté sur le fait qu'il fallait commencé par le multijoueur. Nous les avons donc écouté, le Multijoueur était notree priorité </p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>Fevrier 2020</h4>
                  <h4 className="subheading">Le Design des personnages</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Les personnages ont été faits à la main et ensuite designer sur PhotoShop</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">

              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>Mars 2020</h4>
                  <h4 className="subheading">Travail de la Soutenance</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Au mois de Mars nous avons arrêté de travailler sur le projet pour nous concentré sur la Soutenance.</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>La Suite
                  <br/>du site
                  <br/>Soon !</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section className="page-section" id="SecondePres">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Seconde partie</h2>
          <h3 className="section-subheading text-muted">Repicatulatif du projet</h3>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Unity</h4>
          <p className="text-muted">Pour ce Projet nous avons choisi d'utiliser le Moteur Graphique Unity</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Blender</h4>
          <p className="text-muted"> Nous avons utiliser Blender pour les animations et le rendu 3D</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Adobe Illustrator</h4>
          <p className="text-muted">Nous avons utiliser Adobe Illlustrator pour pouvoir vectoriser nos images et les retocuhées</p>
        </div>
      </div>
    </div>
  </section>
 
  <Portfolio2 portfolioLinks={portfolioLinks2}></Portfolio2>

  

  <section className="page-section" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Chronologie</h2>
          <h3 className="section-subheading text-muted">L'evolution du projet au fil des mois</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="timeline">
            <li>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>Mars 2020 </h4>
                  <h5 className="subheading">Le Multijoueur</h5>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Suite à la première soutenance, nous avons suivit les conseils de Mr ternier. Nous avons donc fait du multijoueur notre priorité</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4> Première moitié d'Avril 2020</h4>
                  <h5 className="subheading">Amelioration et Modelisation Personnage</h5>
                </div>
                <div className="timeline-body">
                  <p className="text-muted"> Nous avons ajouté une barre de vie à notre personnage, nous l'avons aussi modéliser à l'aide de différents logiciels.~ </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4> Seconde Moitié d'Avril 2020</h4>
                  <h5 className="subheading">Préparation de la Seconde soutenance</h5>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Ecriture du rapport de soutenance , préparation de la vidéo</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>La Suite
                  <br/>du site
                  <br/>Soon !</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section className="bg-light page-section" id="team">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Les Membres de L'Equipe</h2>
          <h3 className="section-subheading text-muted">EpiGang</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src={Omar} alt=""/>
            <h4>Omar Seba</h4>
            <p className="text-muted">Leader du Projet</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
              </li>
              <li className="list-inline-item">
                <a href="#something">
                <i class="fa fa-mail-bulk"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src={Charles} alt=""/>
            <h4>Charles Zhang</h4>
            <p className="text-muted">Responsable Blender</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#something">
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src={Bilal} alt=""/>
            <h4>Bilal Zatout</h4>
            <p className="text-muted">Responsable Unity</p>
            <ul className="list-inline social-buttons">

              <li className="list-inline-item">
                <a href="#something">
                  <i class="fa fa-mail-bulk"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src={Aurelien} alt=""/>
            <h4>Aurelien Isak</h4>
            <p className="text-muted">Responsable site Internet</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#something">
                  <i class="fa fa-mail-bulk"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <p className="large text-muted">Nous sommes tous les quatres à Epita en S2 et ceci est le Site Officiel de MrBaco</p>
        </div>
      </div>
    </div>
  </section>

  <section className="page-section" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Contactez Nous</h2>
          <h3 className="section-subheading text-muted">Si vous avez la moindre question n'hesiter pas à nous contacter</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <form id="contactForm" name="sentMessage" novalidate="novalidate">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" id="name" type="text" placeholder="Votre Nom *" required="required" data-validation-required-message="Entrez votre Prenom"/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="email" type="email" placeholder="Votre Email *" required="required" data-validation-required-message="Entrez votre adresse email"/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="phone" type="tel" placeholder="Votre Numéro *" required="required" data-validation-required-message="Entrez votre Numéro de telephone"/>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea className="form-control" id="message" placeholder="Votre Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="col-lg-12 text-center">
                <div id="success"></div>
                <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Envoye le message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  
  <footer className="footer">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4">
          <span className="copyright">Copyright &copy;MrBaco 2020</span>
        </div>
        <div className="col-md-4">
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="#something">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
             {/*<li className="list-inline-item">
              <a href="#something">
<i className="fab fa-linkedin-in"></i>
              </a>
</li>*/}
          </ul>
        </div>
        <div className="col-md-4">
          <ul className="list-inline quicklinks">
            <li className="list-inline-item">
              <a href="#something">Conditions d'utilistaion</a>
            </li>
            <li className="list-inline-item">
              <a href="#something">Protection des données</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  </div>
  );
}

export default App;

