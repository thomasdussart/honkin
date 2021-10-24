import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonText,
  IonCol,
  IonButton,
  IonImg,
  IonItem,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import logo from "../images/logo.png";
import homepage from "../images/homepage.svg";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="">
        <IonGrid>
          <IonRow>
            <div className="bg-gradient">
              <IonCol className="ion-margin-top" size="12">
                <IonImg src={logo} alt="Honkin Logo"></IonImg>
              </IonCol>
              <IonImg src={homepage} alt="guy with a car"></IonImg>
            </div>
          </IonRow>
          <IonRow className="">
            <div className="home-buttons">
              <a href="/tab3">
                <button
                  className="ion-padding ion-button round"
                  id="inscription-home"
                >
                  Inscription
                </button>
              </a>
              <a href="/tab3">
                <button
                  className="ion-padding ion-button round"
                  id="connexion-home"
                >
                  Connexion
                </button>
              </a>
            </div>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
