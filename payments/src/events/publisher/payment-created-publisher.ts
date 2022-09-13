import { Publisher, Subjects, PaymentCreatedEvent } from '@pippip/hugo-common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
