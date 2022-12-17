import './ExploreContainer.css';
import { IonList, IonItem, IonSelect, IonSelectOption, IonCard, IonCardHeader, IonCardTitle, IonGrid, IonRow, IonCol, IonThumbnail } from '@ionic/react';
import { getForecast, getWeather } from '../utils';
import { useEffect, useState } from 'react';
import { Weather, WeatherElement } from '../interfaces';

interface ContainerProps {
  name: string;
}

interface tempProps {
  name: string;
  temp: number;
  descripcion: string;
  icon: string;
}


const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const [clima, setClima] = useState<tempProps | null>();
  const [city, setCity] = useState('la crucecita,huatulco');

  const getClima = async () => {
    // let city = 'la crucecita,huatulco';
    let weather = await getWeather(city);
    // let Forecast = await getForecast(city);

    setClima(weather);
  }

  useEffect(() => {
    getClima()
  }, [city]);

  console.log('clima')
  console.log(clima);


  return (
    <>
      <IonList>
        <IonItem>
          <IonSelect onIonChange={e => setCity(e.detail.value)} placeholder="Seleccione la ciudad">
            <IonSelectOption value="Oaxaca">Oaxaca</IonSelectOption>
            <IonSelectOption value="Mexico">Mexico</IonSelectOption>
            <IonSelectOption value="la crucecita,huatulco">Huatulco</IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonList>

      <IonCard >
        <IonCardHeader className='parent' >
          <IonCardTitle className='title'>{clima?.name?.toUpperCase()}</IonCardTitle>
          <IonGrid className='grid_panel'>
            <IonRow>
              <IonCol size="auto">
                <IonCardTitle className='title_temp'>{clima?.temp}°C</IonCardTitle>
              </IonCol>
              <IonCol size="auto">
                <IonThumbnail>
                  <img className='ion_img' alt="logo" src={clima?.icon} />
                </IonThumbnail>
              </IonCol>
              <IonCol><IonCardTitle className='title_temp'>{clima?.descripcion}</IonCardTitle></IonCol>
            </IonRow>
          </IonGrid>

        </IonCardHeader>


      </IonCard>
    </>

  );
};

export default ExploreContainer;
