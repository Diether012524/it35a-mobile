import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { search } from "ionicons/icons";

const Search: React.FC = () => {
   return(
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons>
                    <IonMenuButton>
                    </IonMenuButton>               
                <IonTitle>Search</IonTitle>
           </IonButtons>
            </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding" >
            <h1>Search</h1>
        </IonContent>
    </IonPage>

   );

}

export default Search;