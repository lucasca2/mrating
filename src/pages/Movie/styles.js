import styled from 'styled-components';
import styles from 'styles';

export const Aside = styled.div`
  z-index: 1;
  position: fixed;
  width: 100px;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: ${styles.colors.default.primary};
  padding: ${styles.metrics.baseSpacing.large};
  
  display: flex;
  justify-content: center;
  align-items: flex-start;
  
  @media (max-width: 550px) {
    padding: ${styles.metrics.baseSpacing.medium};
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 60px;
    justify-content: flex-start;
    align-items: center;
    bottom: unset;
  }
`;

export const Content = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 100px;
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  max-height: 100%;
  overflow: auto;
  
  align-content: space-between;
  align-items: center;
  
  @media (max-width: 550px) {
    left: 0;
    padding: 0;
    top: 60px;
  }
`;

export const ButtonGoBack = styled.button`
   background-color: transparent;
   font-size: 30px;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 5px;
   color: ${styles.colors.default.white};
   border: none;

   
   transition: transform .3s;
   will-change: transform;
   
   &:hover {
    transform: scale(1.1);
   }
   
   @media (max-width: 550px) {
    font-size: 22px;
   } 
`;

