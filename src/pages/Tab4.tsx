import {
  IonButton,
  IonContent,
  IonHeader,
  IonImg,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab4.css";
import QRCode from "qrcode.react";
import logo from "../images/logo.png";

const Tab4: React.FC = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const handleRegister = () => {
    setisLoggedIn(true);
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="register">
          <label color="primary">Pseudo</label>
          <input type="text" />
          <label color="primary">Email</label>
          <input type="email" />
          <label color="primary">Mot de passe</label>
          <input type="password" />
          <label color="primary">Confirmation mot de passe</label>
          <input type="password" />
          <IonButton
            href="/tab3"
            onClick={() => handleRegister()}
            className="ion-button ion-padding round ion-margin-horizontal"
          >
            S'enregistrer
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
