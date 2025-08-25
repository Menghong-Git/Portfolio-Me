import styled from "styled-components";

const CardBorder = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <StyledWrapper className={className}>{children}</StyledWrapper>;
};

const StyledWrapper = styled.div`
  .card {
    width: 190px;
    height: 254px;
    border-radius: 50px;
    background: #e0e0e0;
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  }
`;

export default CardBorder;
