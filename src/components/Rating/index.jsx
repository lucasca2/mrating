import React, { useMemo } from 'react';
import { MdStar, MdStarBorder, MdStarHalf } from "react-icons/all";

// Styles
import { Wrapper } from './styles';

export default function Rating({
  rating
}) {
  const stars = useMemo(() => {
    const s = [];
    const quantityFullStar = Math.floor(rating);

    for(let i = 0; i < quantityFullStar; i++) {
      s.push(MdStar);
    }

    if(quantityFullStar !== rating) s.push(MdStarHalf);

    for(let i = 0; i < 10 - quantityFullStar; i++) {
      s.push(MdStarBorder);
    }

    if(quantityFullStar !== rating) s.pop();

    return s;
  }, [rating]);


  return (
    <Wrapper>
      {rating !== 0 ?
        stars.map((StarIcon, index) => <StarIcon />)
        : (
          <span>NOVO!</span>
        )
      }
    </Wrapper>
  )
}
