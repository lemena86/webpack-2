//import big from '../assets/big.jpg';
import small from '../assets/small.jpg';
import '../styles/image_view.css';

export default () => {
  const image = document.createElement('img');
  //image.src = "https://picsum.photos/400/400";
  image.src = small;
  document.body.appendChild(image);
};

/*
const bigImage = document.createElement('img');
bigImage.src = big;

document.body.appendChild(bigImage);
*/