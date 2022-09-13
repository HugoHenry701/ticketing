import { Publisher, OrderCancelledEvent, Subjects } from '@pippip/hugo-common';

export class OrderCancelledPulisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
