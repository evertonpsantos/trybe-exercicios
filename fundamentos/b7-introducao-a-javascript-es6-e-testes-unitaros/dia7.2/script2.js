const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const deliveryPerson = order['order']['delivery']['deliveryPerson'];
  const client = order['name'];
  const phoneNumber = order['phoneNumber'];
  const street = order['address']['street'];
  const houseNumber = order['address']['number'];
  const apartmentNumber = order['address']['apartment'];
  const finalMessage = `Olá ${deliveryPerson}, entrega para: ${client}, Telefone: ${phoneNumber}, ${street}, Número ${houseNumber}, AP:${apartmentNumber}`;
  return finalMessage;
}

// console.log(customerInfo(order));

const orderModifier = (order) => {
  order['name'] = 'Luiz Silva';
  order['order']['drinks']['coke']['price'] = 5;
  const keys = Object.keys(order['order']['pizza']);
  const values = Object.values(order['order']['pizza']);
  const margueritaPrice = values[0]['price'];
  const pepperoniPrice = values[1]['price'];
  const cokeValue = Object.values(order['order']['drinks']['coke'])
  const cokePrice = cokeValue[1];
  const client = order['name'];
  const pizzaMarguerita = keys[0];
  const pizzaPepperoni = keys[1];
  const cokeZero = order['order']['drinks']['coke']['type'];
  const finalMessage = `Olá ${client}, o total do seu pedido de ${pizzaMarguerita}, ${pizzaPepperoni} e ${cokeZero} é R$${margueritaPrice + pepperoniPrice + cokePrice}`;
  return finalMessage;

}

console.log(orderModifier(order));