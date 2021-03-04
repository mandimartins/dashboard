import React,{ useMemo } from 'react';

import ContentHeader from '../../Components/ContentHeader';
import SelectInput from '../../Components/SelectInput';
import HistoryFinanceCard from '../../Components/HistoryFinanceCard';

import { Container, Content, Filters } from './styles';

interface IRouteParams {
  match:{
    params:{
      type: string
    }
  }
}

const List: React.FC<IRouteParams> = ({match}) => {
  const { type } = match.params;

  const title = useMemo(() => {
    return type === "entry-balance" ? "Entradas" : "Saídas"
  },[type])

  const lineColor = useMemo(() => {
    return type === "entry-balance" ? "#F7931B" : "#E44C4E"
  },[type])


  const months = [
    {
      value: 7,
      lable: 'Julho',
    },
    {
      value: 8,
      lable: 'Agosto',
    },
    {
      value: 9,
      lable: 'Setembro',
    },
  ];

  const years = [
    {
      value: 2018,
      lable: 2018,
    },
    {
      value: 2019,
      lable: 2019,
    },
    {
      value: 2020,
      lable: 2020,
    },
  ];

  return (
    <Container>
      <ContentHeader title={title} lineColor={lineColor}>
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>

      <Filters>
        <button type="button" className="tag-filter tag-filter-recurrent">
          Recorrentes
        </button>
        <button type="button" className="tag-filter tag-filter-eventual">
          Eventuais
        </button>
      </Filters>

      <Content>
        <HistoryFinanceCard
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
