import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import { sendClickEvent } from '../GoogleAnalytics';

const Newsletter = () => {


  const [status, setStatus] = React.useState("Envoyer");
  const [isValidated, setIsValidated] = React.useState(false);
  const [hasValidationError, setHasValidationError] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("En cours...");

    sendClickEvent('Envoyer email')

    const { firstName, lastName, email, phone, formContent } = e.target.elements;
    let details = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      phone: phone.value,
      formContent: formContent.value,
    };
    let response = await fetch(`/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",

      },
      body: JSON.stringify(details),
    });

    let result = await response.json();
    if(result.status==="Message Sent"){
      setIsValidated(true);
      e.target.reset();
    }else{
      setHasValidationError(true);
    }
    setStatus("Envoyer");

  };



  return(
    <div className="app__newsletter" id='contact'>
      <div className="app__newsletter-heading">
        <SubHeading title="évènement" />
        <h1 className="headtext__cormorant">Nous contacter</h1>
        <p className="p__opensans">Besoin d&apos;informations pour organiser vos évènements (mariage, baptême, CE...) ? <br /> On répond à toutes vos questions !</p>
      </div>

      <form className="app__newsletter-input flex__center" onSubmit={handleSubmit}>
        <div className='app__newsletter-input_name'>
          <input required type="text" placeholder="Nom*" name='lastName'/>
          <input required type="text" placeholder="Prénom*" name='firstName'/>
        </div>
        <div className='app__newsletter-input_info'>
          <input required type="email" placeholder="Email*" name='email'/>
          <input type="tel" pattern="[0-9]{10}" placeholder="Téléphone" name='phone'/>
        </div>
        <textarea required placeholder="Votre message*" name='formContent'/>
        {isValidated && <p className="p__opensans" style={{color:"#AAAAAA", textAlign: "center", padding:"1rem"}}><em>Votre message a bien été envoyé. Nous vous contacterons dans les meilleurs délais.</em></p>}
        {hasValidationError && <p className="p__opensans" style={{color:"#AAAAAA", textAlign: "center", padding:"1rem"}}><em>Une erreur est survenue.</em></p>}
        <button type="submit" className="custom__button" >{status}</button>
      </form>



    </div>
  )
}

export default Newsletter;