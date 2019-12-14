import styled from 'styled-components';
import styles from 'styles';

// Static
import logo from 'static/logo.svg';

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
`;

export const Aside = styled.div`
  background-color: ${styles.colors.default.primary};
  width: 300px;
  padding: ${styles.metrics.baseSpacing.large};
  min-height: 100vh;
`;

export const Logo = styled.img.attrs({
  src: logo
})`

`;

export const Content = styled.div`
  background-color: black;
  flex-grow: 1;
  padding: 10px;
  min-height: 100vh;
`;
