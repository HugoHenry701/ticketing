import nats from 'node-nats-streaming';
import { TickerCreatedPublisher } from './events/ticket-created-published';
console.clear();
const stan = nats.connect('ticketing', 'abc', {
  url: 'http://localhost:4222',
});

stan.on('connect', async () => {
  console.log('Publisher connected to NATS');
  const publisher = new TickerCreatedPublisher(stan);
  await publisher.publish({
    id: '123',
    title: 'concert',
    price: 20,
  });
  // const data = JSON.stringify({
  //   id: '123',
  //   title: 'concert',
  //   price: 20,
  // });
  // stan.publish('TickedCreated', data, () => {
  //   console.log('Event published');
  // });
});
