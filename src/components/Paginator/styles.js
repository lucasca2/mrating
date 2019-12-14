import styled from 'styled-components';
import styles from 'styles';

export const WrapperPaginator = styled.div`
  width: 100%;
  padding: ${styles.metrics.baseSpacing.large};
  
  & .Paginator {
    display: flex;
    align-items: center;
    justify-content: center;
    
    a {
      user-select: none;
      color: ${styles.colors.default.white};
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    li {
      text-decoration: none;
      list-style: none;
    }
  }
  
  & .Page, & .PreviousButton, & .NextButton {
    background-color: ${styles.colors.default.secondary};
    flex-shrink: 0;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 ${styles.metrics.baseSpacing.medium};
  }
  
  & .PreviousButton, & .NextButton {
    svg {
      width: 20px;
      height: 20px;
    }
  }
  
  & .ActivePage {
    background-color: ${styles.colors.default.warning};
  }
  
`;
