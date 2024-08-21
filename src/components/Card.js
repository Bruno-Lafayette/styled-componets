import styled from 'styled-components';
import Image from './Image';

const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
  width: 200px;
  text-align: center;
`;

const CardTitle = styled.h2`
  font-size: 1.2em;
  color: #333;
  margin: 10px 0;
`;

const CardDescription = styled.p`
  color: #666;
  font-size: 1em;
  padding: 0 10px 10px;
`;

const Card = ({ product }) => (
  <CardContainer>
    <Image src={product.imageUrl} alt={product.title} />
    <CardTitle>{product.title}</CardTitle>
    <CardDescription>{product.description}</CardDescription>
  </CardContainer>
);

export default Card;