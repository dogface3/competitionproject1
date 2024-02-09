import DriverCard from './driver';
import './App.css';
import ClickablePicture from './imgclicker';
import Carousel from './carousel';
import NumbersTable from './numbers';
import FaceBook from './facebook';

function App() {
  return (
    <div>
    <DriverCard
  name="Travis Kalanick"
  rating={4.2}
  img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=200&height=428"
  car={{
    model: "Toyota Corolla Altis",
    licensePlate: "CO42DE"
  }}
/>

<DriverCard
  name="Dara Khosrowshahi"
  rating={4.9}
  img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
  car={{
    model: "Audi A3",
    licensePlate: "BE33ER"
  }}
/>
<ClickablePicture
  img='https://randomuser.me/api/portraits/women/1.jpg'
  imgClicked='https://randomuser.me/api/portraits/men/1.jpg'
/>
<Carousel
  images={[
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg'
  ]}
/>
<NumbersTable limit={12} />
<FaceBook />
</div>
  );
}

export default App;
