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
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-justify-content-center ion-align-items-center">
        <IonGrid>
          <IonRow>
            <IonCol className="ion-margin-top" size="12">
              <IonImg src={logo} alt="test"></IonImg> */
            </IonCol>
          </IonRow>
          <IonRow className="ion-margin-top ">
            <IonCol
              className="
             ion-text-center"
              size="12"
            >
              <IonButton href="/tab4" className="ion-button ion-padding round">
                Inscription
              </IonButton>
            </IonCol>
            <IonCol className="ion-text-center" size="12">
              <IonButton href="/tab3" className="ion-padding ion-button round">
                Connexion
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

{
  /* <IonRow>
            <IonCol>
              <IonButton color="light">Stationnement</IonButton>
            </IonCol>
            <IonCol>
              <IonButton>Accrochage</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton>Vol/Vandalisme</IonButton>
            </IonCol>
            <IonCol>
              <IonButton>?</IonButton>
            </IonCol>
          </IonRow> */
}
// <IonRow>
//   <IonCol className="ion-margin-top ion-text-center" size="12">
//     <QRCode value="http://facebook.github.io/react/" />
//   </IonCol>
// </IonRow>;
