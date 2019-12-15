import styled from 'styled-components';
import styles from 'styles';

export const WrapperImage = styled.div`
  position: relative;
  overflow: hidden;
  width: 410px; 
  height: 600px;
  flex-shrink: 0;
  border-radius: ${styles.metrics.baseRadius};
  
  transition: transform .3s;
  will-change: transform;

  @media (min-width: 701px) and (max-width: 1000px) {
    width: 200px; 
    height: 294px;
  } 
   
  @media (max-width: 700px) {
    width: 100%;
    padding-bottom: 147%;
    height: unset;
  }
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
  padding: ${styles.metrics.baseSpacing.large};
  background-color: ${styles.colors.default.primary};
  color: ${styles.colors.default.white};
  border-radius: ${styles.metrics.baseRadius};
  box-shadow: ${styles.metrics.baseShadow};
  flex: 1;
  
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
`;

export const Title = styled.h2`
  position: relative;
  text-align: center;
  font-size: ${styles.fonts.sizes.ultraLarge};
  font-weight: 500;
  margin: ${styles.metrics.baseSpacing.medium} 0 ${styles.metrics.baseSpacing.large};
  
  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0%;
    height: 1px;
    
    width: 90%;
    background-color: ${styles.colors.default.secondary};
  }

`;

export const Info = styled.div`
  width: 100%;
  font-size: ${styles.fonts.sizes.small};
  opacity: .5;
  text-align: left;
  margin-top: ${styles.metrics.baseSpacing.medium};
`;

export const Overview = styled.p`
  line-height: 25px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  position: relative;
  padding: 20px;
  
  width: 100%;
  flex-wrap: wrap;
`;

export const WrapperGenres = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: ${styles.metrics.baseSpacing.large} 0;
`;

export const Genres = styled.div`
  background-color: ${styles.colors.default.secondary};
  padding: ${styles.metrics.baseSpacing.small} ${styles.metrics.baseSpacing.medium};
  border-radius: 25px;
  
  margin-top: ${styles.metrics.baseSpacing.medium};
  &:not(:last-child) {
    margin-right: ${styles.metrics.baseSpacing.medium};
  }
`;

