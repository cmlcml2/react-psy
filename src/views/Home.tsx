
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
        <Container>
            <h1>{title}</h1>
            <p className="fs-6 p-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta diam eget nulla interdum, at sollicitudin nisi gravida. In sed sollicitudin odio. Vivamus at dui tellus. Nunc auctor euismod lorem, quis vehicula velit tempor id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum tellus vitae massa egestas eleifend. Donec congue augue ultrices viverra ultricies. Phasellus vel nibh id elit pharetra cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vivamus sed lacus ut tortor tincidunt ullamcorper. Donec maximus lacinia arcu ac semper. Fusce ornare ligula vestibulum laoreet egestas. Donec pellentesque et lectus id ultrices. Integer a lacinia sapien. Etiam libero odio, lobortis ac euismod ut, pretium ac turpis. Suspendisse semper sodales velit, non elementum neque blandit vitae. Maecenas euismod luctus commodo
                Nulla venenatis felis at convallis scelerisque. Aliquam id nisi vitae dolor pretium rhoncus. Aenean in porttitor justo, vel maximus est. Sed dictum lacinia molestie. Morbi vel malesuada arcu, eu bibendum lectus. Maecenas eleifend, nunc vitae posuere molestie, velit leo malesuada dolor, a porttitor ipsum velit nec lectus. Nullam condimentum tempus ipsum, eu bibendum ex facilisis in. Donec non iaculis turpis. Maecenas massa ligula, pretium eu diam eget, iaculis hendrerit libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at diam ornare, aliquam neque et, pharetra orci.
                Nam euismod magna sed odio pharetra, id semper lorem lacinia. Fusce vehicula nisl ut arcu accumsan laoreet. Integer enim lorem, porta ut placerat non, facilisis a felis. Suspendisse justo risus, vehicula a nibh id, commodo vestibulum ex. Duis ultrices dignissim egestas. Morbi maximus, leo ut convallis condimentum, lorem arcu rutrum ante, in commodo enim nisi sed ipsum. In eget fermentum nunc. Curabitur lacus est, sollicitudin sed eleifend et, hendrerit sit amet ante. Ut pretium eleifend porttitor. Ut nibh sem, pulvinar at suscipit porttitor, convallis et nunc. Integer tempus enim mollis, gravida lacus quis, ornare erat. Proin finibus fringilla turpis, non semper ligula. Suspendisse at viverra arcu.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc bibendum purus a sem fringilla, ut porttitor ex tempor. Quisque molestie dui at convallis tincidunt. Praesent vel fringilla mauris. Pellentesque vehicula accumsan fringilla. Sed hendrerit, nisi ac gravida lacinia, lectus leo dignissim ipsum, id accumsan purus nisl et ipsum. Maecenas viverra magna turpis, ut consectetur lectus mattis eget.
                In the land of gods and monsters, I was angel, living in the garden of Evil.
                Screwed up, scared doing anything that I needed. Shining like a fairy beacon.
                You got that medicine I need. Fame, liquor, love give it to me slowly.
                Put you hands on my waist, do it soflty. Me and god We don't get along. So now I sing.
                No ones gonna take my soul away. I'm living like Jim Morrison. Headed towards a misted-up holiday. Motel sprees sprees and I'm singing.
                Oh yeah give it to me this is Heaven what I truly want. It's innocence lost, innocence lost.
                In the land of gods and monsters, I was an angel. Looking to get hit hard. Like a groupi incognito posing as a real singer. Life imitates art.
                You got that medecine I need. Do shoot it up straight to the heart please. I don't really wanna know what's good for me.
                God's dead I said baby that's alright with me.
                No ones gonna take my soul away. I'm living like Jim Morrison. Headed towards a misted-up holiday. Motel sprees sprees and I'm singing.
                Oh yeah give it to me this is Heaven what I truly want. It's innocence lost, innocence lost.
                When you talk it's like a movie and you making me crazy. Cause life imitates art.
                If I get prettier can I be your babe. You tell me life isn't that hard.
                No ones gonna take my soul away. I'm living like Jim Morrison. Headed towards a misted-up holiday. Motel sprees sprees and I'm singing.
                Oh yeah give it to me this is Heaven what I truly want. It's innocence lost, innocence lost.
            </p>
        </Container>

    </>
  )
}

export default Home