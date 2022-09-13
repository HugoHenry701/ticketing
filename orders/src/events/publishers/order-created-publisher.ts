import { Publisher, OrderCreatedEvent, Subjects } from '@pippip/hugo-common';

export class OrderCreatedPulisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
