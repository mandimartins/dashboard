import React from 'react';

import ContentHeader from '../../Components/ContentHeader';
import SelectInput from '../../Components/SelectInput';
import HistoryFinanceCard from '../../Components/HistoryFinanceCard';

import { Container, Content } from './styles';

const List: React.FC = () => {
  const options = [
    {
      value: 'Ciri',
      lable: 'Ciri',
    },
    {
      value: 'Geralt',
      lable: 'Geralt',
    },
    {
      value: 'Raven',
      lable: 'Raven',
    },
  ];

  return (
    <Container>
      <ContentHeader title="Saídas" lineColor="#FB6161">
        <SelectInput options={options} />
      </ContentHeader>
      <Content>
        <HistoryFinanceCard
          cardColor={'#292929'}
          tagColor={'#FB6161'}
          title={'Gás'}
          subtitle={'14/09/2020'}
          amount={'R$ 97,80'}
        />
        <HistoryFinanceCard
          cardColor={'#292929'}
          tagColor={'#FB6161'}
          title={'Gás'}
          subtitle={'14/09/2020'}
          amount={'R$ 97,80'}
        />
        <HistoryFinanceCard
          cardColor={'#292929'}
          tagColor={'#FB6161'}
          title={'Gás'}
          subtitle={'14/09/2020'}
          amount={'R$ 97,80'}
        />
        <HistoryFinanceCard
          cardColor={'#292929'}
          tagColor={'#FB6161'}
          title={'Gás'}
          subtitle={'14/09/2020'}
          amount={'R$ 97,80'}
        />
        <HistoryFinanceCard
          cardColor={'#292929'}
          tagColor={'#FB6161'}
          title={'Gás'}
          subtitle={'14/09/2020'}
          amount={'R$ 97,80'}
        />
        <HistoryFinanceCard
          cardColor={'#292929'}
          tagColor={'#FB6161'}
          title={'Gás'}
          subtitle={'14/09/2020'}
          amount={'R$ 97,80'}
        />
        <HistoryFinanceCard
          cardColor={'#292929'}
          tagColor={'#FB6161'}
          title={'Gás'}
          subtitle={'14/09/2020'}
          amount={'R$ 97,80'}
        />
        <HistoryFinanceCard
          cardColor={'#292929'}
          tagColor={'#FB6161'}
          title={'Gás'}
          subtitle={'14/09/2020'}
          amount={'R$ 97,80'}
        />
        <HistoryFinanceCard
          cardColor={'#292929'}
          tagColor={'#FB6161'}
          title={'Gás'}
          subtitle={'14/09/2020'}
          amount={'R$ 97,80'}
        />
        <HistoryFinanceCard
          cardColor={'#292929'}
          tagColor={'#FB6161'}
          title={'Gás'}
          subtitle={'14/09/2020'}
          amount={'R$ 97,80'}
        />
      </Content>
    </Container>
  );
};

export default List;
