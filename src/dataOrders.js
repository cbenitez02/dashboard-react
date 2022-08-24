export function createDataOrder(name, id, date, client, status, price){

  return {
    name,
    id,
    date,
    client,
    status,
    price,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ]
  }
}

