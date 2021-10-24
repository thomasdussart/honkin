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
  const [showModal, setShowModal] = useState(false);

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

  const handlePieton = () => {
    alert("Send push to User");
    setShowModal(false);
  };
  const handleTrottoir = () => {
    alert("Send push to User");
    setShowModal(false);
  };
  const handleLivraison = () => {
    alert("Send push to User");
    setShowModal(false);
  };
  const handleGarage = () => {
    alert("Send push to User");
    setShowModal(false);
  };
  const handlePMR = () => {
    alert("Send push to User");
    setShowModal(false);
  };

  const handleAutre = () => {
    alert("Send push to User");
    setShowModal(false);
  };

  const handleError = (err: string | void) => {
    console.log(err);
  };

  return (
    <IonPage id="full-page">
      <IonContent fullscreen>
        <div className="bg-gradient">
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        {showModal ? (
          <IonModal isOpen={showModal} cssClass="my-custom-class">
            <IonText color="primary">
              Choisissez le honk correspondant à votre problème
            </IonText>
            <IonButton shape="round" onClick={() => handlePieton()}>
              Passage piéton
            </IonButton>
            <IonButton shape="round" onClick={() => handleTrottoir()}>
              Trottoir
            </IonButton>
            <IonButton shape="round" onClick={() => handleLivraison()}>
              Livraison
            </IonButton>
            <IonButton shape="round" onClick={() => handleGarage()}>
              Garage
            </IonButton>
            <IonButton shape="round" onClick={() => handlePMR()}>
              Stationnement PMR
            </IonButton>
            <IonButton shape="round" onClick={() => handleAutre()}>
              Autre
            </IonButton>

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
