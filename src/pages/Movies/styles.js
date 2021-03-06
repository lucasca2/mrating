import styled from 'styled-components';
import styles from 'styles';

// Static
import logo from 'static/logo.svg';

export const Aside = styled.div`
  z-index: 1;
  position: fixed;
  width: 300px;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: ${styles.colors.default.primary};
  padding: ${styles.metrics.baseSpacing.large};
  
  @media (min-width: 551px) and (max-width: 851px) {
    width: 250px;
  }
  
  @media (max-width: 550px) {
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 180px;
    bottom: unset;
  }
`;

export const Logo = styled.img.attrs({
  src: logo
})`
  margin-bottom: ${styles.metrics.baseSpacing.ultraLarge};
`;

export const Content = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 300px;
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  max-height: 100%;
  overflow: auto;
  
  align-content: space-between;
  align-items: center;
  
  @media (min-width: 551px) and (max-width: 851px) {
    left: 250px;
  }
  
  @media (max-width: 550px) {
    left: 0;
    top: 180px;
    padding: 0;
  }
`;

