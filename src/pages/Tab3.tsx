import {
  IonContent,
  IonHeader,
  IonImg,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab3.css";
import QRCode from "qrcode.react";
import logo from "../images/logo.png";

const Tab3: React.FC = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const handleLogin = () => {
    setisLoggedIn(true);
  };

  if (isLoggedIn) {
    return (
      <IonPage>
        <IonContent>
          <QRCode value="http://facebook.github.io/react/" />
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
