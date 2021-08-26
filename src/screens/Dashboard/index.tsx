// dependencies & libs
import React from 'react';

// components
import { UserProfile }   from '../../components/UserProfile';
import { HighlightCard } from '../../components/HighlightCard';
import { Transactions }  from '../../components/Transactions';

// styles
import { Container, Header, Wrapper, Icon, CardContainer } from './styles';

export function Dashboard(){

  return (
    <Container>
      <Header>
        <Wrapper>
          <UserProfile />
          <Icon name="power"/>
        </Wrapper>
      </Header>
      <CardContainer>
        <HighlightCard title="Entradas" amount="R$10.000,00" lastTransactions="Ultima transação" type="up" />
        <HighlightCard title="Saídas" amount="R$7.000,00" lastTransactions="Ultima transação" type="down" />
        <HighlightCard title="Total" amount="R$17.000,00" lastTransactions="Ultima transação" type="total" />
      </CardContainer>
      <Transactions />
    </Container>
  )
}

