import {
  IonContent,
  IonHeader,
  IonImg,
  IonAvatar,
  IonPage,
  IonText,
  IonModal,
  IonButton,
  IonCol,
  IonRow,
  IonTitle,
  IonToolbar,
  IonGrid,
} from "@ionic/react";
import { useState } from "react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab3.css";
import QRCode from "qrcode.react";
import profile from "../images/profile.png";
import badge from "../images/badge.png";

const Tab3: React.FC = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleLogin = () => {
    setisLoggedIn(true);
  };

  if (isLoggedIn) {
    return (
      <IonPage>
        <IonContent>
          <IonAvatar>
            <img src={profile} alt="" />
          </IonAvatar>
          <div className="cadre-nom">
            <p className="ion-text-center">John Doe</p>
          </div>
          <progress id="klax-progress" value="65" max="100"></progress>
          <p id="klax-texte" className="ion-text-center">
            Plus que 200 Klax's pour atteindre le prochain rang
          </p>

          <div className="cadre">
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonImg src={badge}></IonImg>
                </IonCol>
                <IonCol>
                  <IonImg src={badge}></IonImg>
                </IonCol>
                <IonCol>
                  <IonImg src={badge}></IonImg>
                </IonCol>
                <IonCol>
                  <IonImg src={badge}></IonImg>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonImg src={badge}></IonImg>
                </IonCol>
                <IonCol>
                  <IonImg src={badge}></IonImg>
                </IonCol>
                <IonCol>
                  <IonImg src={badge}></IonImg>
                </IonCol>
                <IonCol>
                  <IonImg src={badge}></IonImg>
                </IonCol>
              </IonRow>
            </IonGrid>
          </div>
          <IonButton onClick={() => setShowModal(true)}>
            Montrer le QR Code
          </IonButton>
          {showModal ? (
            <IonModal isOpen={showModal} cssClass="my-custom-class">
              <QRCode value="http://facebook.github.io/react/" />
              <IonButton id="send-poste">
                Envoyer le code QR par la poste
              </IonButton>
              <IonButton onClick={() => setShowModal(false)}>
                Close Modal
              </IonButton>
            </IonModal>
          ) : null}
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <form action="">
          <label color="primary">Pseudo</label>
          <input type="text" />
          <label color="primary">Mot de passe</label>
          <input type="password" />
          <input
            id="submit"
            type="submit"
            value="Login"
            onClick={() => handleLogin()}
          />
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
