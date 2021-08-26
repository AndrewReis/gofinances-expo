// dependencies
import React from 'react';

// components
import { TransactionCard } from './TransactionCard';

// styles 
import { Container, Title, List } from './styles';

interface TransactionProps {
  id        : string,
  title     : string;
  amount    : string;
  category  : {
    name : string;
    icon : string;
  };
  createdAt : string;
  type      : 'income' | 'outcome'
}

export function Transactions(){
  const data: TransactionProps[] = [
    {
      id:' 1',
      title:"Desenvolvimento de site",
      amount:"R$12.000,00",
      category: {
        name:'Vendas',
        icon: 'dollar-sign'
      },
      createdAt: "25/08/2021 20:27",
      type: 'income'
    },
    {
      id: '2',
      title:"Conta de casa",
      amount:"R$700,00",
      category: {
        name:'Casa',
        icon: 'home'
      },
      createdAt: "25/08/2021 20:27",
      type: 'outcome'
    },
    {
      id: '3',
      title:"Salario",
      amount:"R$12.000,00",
      category: {
        name:'Salario',
        icon: 'dollar-sign'
      },
      createdAt: "25/08/2021 20:27",
      type: 'income'
    }
  ]

  return(
    <Container>
      <Title> Listagem de transações </Title>
      <List 
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <TransactionCard transaction={item}/> }  
      />
      
    </Container>
  );
}