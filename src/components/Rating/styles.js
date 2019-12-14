import styled from 'styled-components';
import styles from 'styles';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${styles.colors.default.warning};
  
  font-size: 12px;
  line-height: 14px;
  
  & > svg {
    font-size: 14px;
  }
`;
