import styled from 'styled-components';
import styles from 'styles';

export const WrapperImage = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%; 
  padding-bottom: 147%;
  border-radius: ${styles.metrics.baseRadius};
  
  transition: transform .3s;
  will-change: transform;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  z-index: 1;
  padding: ${styles.metrics.baseSpacing.medium};
  background-color: ${styles.colors.default.white};
  color: ${styles.colors.default.primary};
  border-radius: ${styles.metrics.baseRadius};
  box-shadow: ${styles.metrics.baseShadow};
  border: 1px solid ${styles.colors.default.border};
  width: 95%;
  
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
  margin-top: -50px;
  
  transition: transform .3s;
  will-change: transform;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: ${styles.fonts.sizes.medium};
  font-weight: 500;
  margin: ${styles.metrics.baseSpacing.medium} 0 ${styles.metrics.baseSpacing.large};

`;

export const Info = styled.div`
  width: 100%;
  font-size: ${styles.fonts.sizes.small};
  opacity: .5;
  text-align: left;
  margin: ${styles.metrics.baseSpacing.ultraSmall} 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  padding: 20px;
  
  &:hover {
    ${WrapperImage} {
    transform: translateY(-25px);
    }
    
    ${Content} {
      transform: translateY(25px);
    }
  }
  
  
  @media (min-width: 1401px) {
      width: ${100 / 4}%;
  }
  
  @media (min-width: 1141px) and (max-width: 1400px) {
    width: ${100 / 3}%;
  }
  
  @media (min-width: 851px) and (max-width: 1140px) {
    width: ${100 / 2}%;
  }
  
  @media (max-width: 850px) {
    width: 100%;
  }
`;
