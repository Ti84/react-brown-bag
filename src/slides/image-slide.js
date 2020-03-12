import React from 'react';
import {
  Slide,
  Text,
  Link,
  Heading
} from 'spectacle';

const ImageSlide = ({img, imgAlt, imgRefSrc, imgDesc, imgStyle = 'lg'}) => (
  <Slide>
    {imgDesc && <Heading size={3} textColor="secondary" margin="0 0 15px 0">{imgDesc}</Heading>}
    {img && imgAlt && <img src={img} alt={imgAlt} class={`img--${imgStyle}`}></img>}
    {imgRefSrc && <Text textColor="tertiary" textSize="16" margin="15px 0 0 0">ref: <Link href={imgRefSrc} textColor="tertiary" textSize="16" target="_blank">{imgRefSrc}</Link></Text>}
  </Slide>
);

export default ImageSlide;