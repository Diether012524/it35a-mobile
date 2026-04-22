import { IonButtons, IonContent, IonHeader, IonLabel, IonList, IonListHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";

const Feed: React.FC = () => {


     const labels = [ 
    {name: 'Pokémon Yellow'},
     {name: 'Mega Man X'},
      {name: 'The Legend of Zelda'},
       {name: 'Pac-Man'},
       {name: 'Super Mario World'}
       
  ]



   return(
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons>
                    <IonMenuButton>
                    </IonMenuButton>               
                <IonTitle>Feed</IonTitle>
           </IonButtons>
            </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding" >
            <h1>Feed</h1>


            {labels.map((item, index) =>(
                <IonList>
                  <IonListHeader>
                    <IonLabel>{item.name}</IonLabel>
                  </IonListHeader>
             </IonList>

           ))}

              </IonContent>
              </IonPage>
      );

};
export default Feed;