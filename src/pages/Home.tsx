import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import ARComponent from "../components/ARComponent";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>AR Viewer</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
          <ARComponent />
      </IonContent>
    </IonPage>
  );
};

export default Home;
