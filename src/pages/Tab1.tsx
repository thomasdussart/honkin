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
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <IonImg src={logo} alt="test"></IonImg> */
            </IonCol>
          </IonRow>
          <IonRow>
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
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
