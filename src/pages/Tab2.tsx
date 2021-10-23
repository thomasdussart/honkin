import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
// import QrReader from "react-qr-reader";
import "./Tab2.css";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" />
        {/* <QrReader delay={300} style={{ width: "100%" }} /> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
