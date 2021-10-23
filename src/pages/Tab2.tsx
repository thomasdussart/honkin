import {
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonCol,
  IonRow,
  IonItem,
  IonLabel,
  IonInput,
  IonModal,
  IonButton,
  IonCheckbox,
  IonTitle,
  IonToolbar,
  IonGrid,
} from "@ionic/react";
import React, { useState } from "react";
import QrReader from "react-qr-reader";

import ExploreContainer from "../components/ExploreContainer";
import "./Tab2.css";

const Tab2: React.FC = () => {
  const [result, setResult] = useState("No result");
  const [showModal, setShowModal] = useState(true);

  const handleScan = (data: any) => {
    if (data) {
      setResult(data);
      console.log(data);
      setShowModal(true);
      // const dataPost = {
      //   qr: result,
      // };
      // fetch("http://localhost:1337/qrcode", {
      //   method: "POST",
      //   body: JSON.stringify(dataPost),
      // }).then((res) => console.log("ok"));
    }
  };

  const handleStationnement = () => {
    alert("Send push to User");
    setShowModal(false);
  };
  const handlePolice = () => {
    alert("Send push to User");
    setShowModal(false);
  };
  const handleVandalisme = () => {
    alert("Send push to User");
    setShowModal(false);
  };
  const handleAccrochage = () => {
    alert("Send push to User");
    setShowModal(false);
  };

  const handleError = (err: string | void) => {
    console.log(err);
  };

  return (
    <IonPage id="full-page">
      <IonContent fullscreen>
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
        <IonInput value={result} placeholder="Enter Input"></IonInput>
        <IonText color="primary"></IonText>
        {showModal ? (
          <IonModal isOpen={showModal} cssClass="my-custom-class">
            <IonText color="primary">Choisissez le type d'alerte</IonText>
            <IonButton shape="round" onClick={() => handleStationnement()}>
              Stationnement
            </IonButton>
            <IonButton shape="round" onClick={() => handlePolice()}>
              Police
            </IonButton>
            <IonButton shape="round" onClick={() => handleVandalisme()}>
              Vandalisme
            </IonButton>
            <IonButton shape="round" onClick={() => handleAccrochage()}>
              Accrochage
            </IonButton>
            <IonButton shape="round">Police</IonButton>

            <IonButton onClick={() => setShowModal(false)}>
              Close Modal
            </IonButton>
          </IonModal>
        ) : null}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
