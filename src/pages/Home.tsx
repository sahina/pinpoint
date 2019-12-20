import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonSplitPane,
  IonMenu,
  IonMenuToggle,
  IonButtons,
  IonButton,
  IonIcon
} from '@ionic/react';
import React from 'react';

const Home: React.FC = () => {
  return (
    <IonSplitPane contentId="map-content">
      <IonMenu contentId="map-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>
              Saved Addresses
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          Address list
        </IonContent>
      </IonMenu>
      <IonContent id="map-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuToggle>
                <IonButton>
                  <IonIcon slot="icon-only" name="menu"></IonIcon>
                </IonButton>
              </IonMenuToggle>
            </IonButtons>
            <IonTitle>Select Location</IonTitle>
          </IonToolbar>
        </IonHeader>
        <p>Map will be here</p>
      </IonContent>
    </IonSplitPane>
  );
};

export default Home;
