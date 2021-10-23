import {
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonCheckbox,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import QrReader from "react-qr-reader";

import ExploreContainer from "../components/ExploreContainer";
import "./Tab2.css";

const Tab2: React.FC = () => {
  const [result, setResult] = useState("No result");

  const handleScan = (data: any) => {
    if (data) {
      setResult(data);
      console.log(data);
      // const dataPost = {
      //   qr: result,
      // };
      // fetch("http://localhost:1337/qrcode", {
      //   method: "POST",
      //   body: JSON.stringify(dataPost),
      // }).then((res) => console.log("ok"));
    }
  };

  const handleError = (err: string | void) => {
    console.log(err);
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <QrReader
          delay={3000}
          onError={handleError}
          onScan={handleScan}
          style={{ width: "100%" }}
        />
        <IonInput value={result} placeholder="Enter Input"></IonInput>
        <IonText color="primary">
          <p>{result}</p>
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
