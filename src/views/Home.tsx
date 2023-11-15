
import {Image} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import React from "react";

interface HomeProps {
  title: string;
}

const Home: React.FC<HomeProps> = ({
    title
}) => {

    const img = "https://images.radio-canada.ca/q_auto,w_960/v1/ici-premiere/16x9/psychologue-psychotherapie-bureau-decoration.jpg";
  return (
    <>
        <Container fluid className="text-center">
            <Image src={img} fluid></Image>
        </Container>
        <h1>{title}</h1>
        <p className="fs-6 p-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta diam eget nulla interdum, at sollicitudin nisi gravida. In sed sollicitudin odio. Vivamus at dui tellus. Nunc auctor euismod lorem, quis vehicula velit tempor id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum tellus vitae massa egestas eleifend. Donec congue augue ultrices viverra ultricies. Phasellus vel nibh id elit pharetra cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vivamus sed lacus ut tortor tincidunt ullamcorper. Donec maximus lacinia arcu ac semper. Fusce ornare ligula vestibulum laoreet egestas. Donec pellentesque et lectus id ultrices. Integer a lacinia sapien. Etiam libero odio, lobortis ac euismod ut, pretium ac turpis. Suspendisse semper sodales velit, non elementum neque blandit vitae. Maecenas euismod luctus commodo
            Nulla venenatis felis at convallis scelerisque. Aliquam id nisi vitae dolor pretium rhoncus. Aenean in porttitor justo, vel maximus est. Sed dictum lacinia molestie. Morbi vel malesuada arcu, eu bibendum lectus. Maecenas eleifend, nunc vitae posuere molestie, velit leo malesuada dolor, a porttitor ipsum velit nec lectus. Nullam condimentum tempus ipsum, eu bibendum ex facilisis in. Donec non iaculis turpis. Maecenas massa ligula, pretium eu diam eget, iaculis hendrerit libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at diam ornare, aliquam neque et, pharetra orci.
            Nam euismod magna sed odio pharetra, id semper lorem lacinia. Fusce vehicula nisl ut arcu accumsan laoreet. Integer enim lorem, porta ut placerat non, facilisis a felis. Suspendisse justo risus, vehicula a nibh id, commodo vestibulum ex. Duis ultrices dignissim egestas. Morbi maximus, leo ut convallis condimentum, lorem arcu rutrum ante, in commodo enim nisi sed ipsum. In eget fermentum nunc. Curabitur lacus est, sollicitudin sed eleifend et, hendrerit sit amet ante. Ut pretium eleifend porttitor. Ut nibh sem, pulvinar at suscipit porttitor, convallis et nunc. Integer tempus enim mollis, gravida lacus quis, ornare erat. Proin finibus fringilla turpis, non semper ligula. Suspendisse at viverra arcu.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc bibendum purus a sem fringilla, ut porttitor ex tempor. Quisque molestie dui at convallis tincidunt. Praesent vel fringilla mauris. Pellentesque vehicula accumsan fringilla. Sed hendrerit, nisi ac gravida lacinia, lectus leo dignissim ipsum, id accumsan purus nisl et ipsum. Maecenas viverra magna turpis, ut consectetur lectus mattis eget.
        </p>
    </>
  )
}

export default Home