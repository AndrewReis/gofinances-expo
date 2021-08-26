// dependencies
import React from 'react';

// styles 
import { Container, Title, Amount, Footer, Category, Icon, CategoryName, CreatedAt } from './styles';

interface Category {
  name : string;
  icon : string;
}

interface Props {
  transaction: {
    title     : string;
    amount    : string;
    category  : Category;
    createdAt : string;
    type      : 'income' | 'outcome'
  }
}

export function TransactionCard({ transaction }: Props){
  return(
    <Container>
      <Title>{transaction.title}</Title>
      <Amount type={transaction.type} >
        {transaction.type === 'outcome' && '- '}
        {transaction.amount}
      </Amount>
      <Footer>
        <Category>
          <Icon name={transaction.category.icon} />
          <CategoryName>{transaction.category.name}</CategoryName>
        </Category>
        <CreatedAt>{transaction.createdAt}</CreatedAt>
      </Footer>
    </Container>
  );
}