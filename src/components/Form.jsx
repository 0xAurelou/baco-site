import React, { Component } from 'react';
import firebaseConf from '../firebase';
import '../App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      form: [],
      alert: false,
      alertData: {}
    };
  }

  showAlert(type, message) {
    this.setState({
      alert: true,
      alertData: { type, message }
    });
    setTimeout(() => {
      this.setState({ alert: false });
    }, 4000)
  }

  resetForm() {
    this.refs.contactForm.reset();
  }

  componentWillMount() {
    let formRef = firebaseConf.database().ref('form').orderByKey().limitToLast(6);
    formRef.on('child_added', snapshot => {
      const { name, email, city, phone, message } = snapshot.val();
      const data = { name, email, city, phone, message };
      this.setState({ form: [data].concat(this.state.form) });
    })
  }

  sendMessage(e) {
    e.preventDefault();
    const params = {
      name: this.inputName.value,
      email: this.inputEmail.value,
      city: this.inputCity.value,
      Epita : this.inputEpita.value,
      message: this.textAreaMessage.value
    };
    if (params.name && params.email  && params.message) {
      firebaseConf.database().ref('form').push(params).then(() => {
        this.showAlert('success', 'Your message was sent successfully');
      }).catch(() => {
        this.showAlert('danger', 'Your message could not be sent !!');
      });
      this.resetForm();
    } else {
      this.showAlert('warning', 'Please fill the form');
    };
  }

  render() {
    return (
      <div className="main">
        <h1 className="main-head"> Contactez-nous</h1>
        <div class="row">
    <div class="col-lg-12 col-centered"></div>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 form'>
              <form onSubmit={this.sendMessage.bind(this)} ref='contactForm' >
                <div className='form-group-center'>
                  <label htmlFor='name'>Name</label>
                  <input type='text' className='form-control' id='name' placeholder='Name' ref={name => this.inputName = name} />
                </div>
                <div className='form-group-center'>
                  <label htmlFor='exampleInputEmail1'>Email</label>
                  <input type='email' className='form-control' id='email' placeholder='Email' ref={email => this.inputEmail = email} />
                </div>
                <div className='form-group'>
                  <label htmlFor='city'>City</label>
                  <select className='form-control' id='city' ref={city => this.inputCity = city}>
                    <option value='France'>Paris</option>
                    <option value='England'>London</option>
                    <option value='Tijuana'>Mexico</option>
                    <option value='Singapore'>Singapore</option>
                    <option value='United-State'>Los Angeles</option>
                    <option value='Else'>Else</option>
                  </select>
                </div>
                <div className='form-group'>
                  <label htmlFor='phone'>Epita</label>
                  <input type='boolean' className='form-control' id='phone' placeholder='Yes or No' ref={Epita => this.inputEpita = Epita} />
                </div>
                <div className='form-group'>
                  <label htmlFor='message'>Message</label>
                  <textarea className='form-control' id='message' rows='3' ref={message => this.textAreaMessage = message}></textarea>
                </div>
                <button type='submit' className='btn btn-primary'>Send</button>
              </form>

              {this.state.alert && <div className={`alert alert-${this.state.alertData.type}`} role='alert'>
                <div className='container'>
                  {this.state.alertData.message}
                </div>
              </div>}

            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;