import { Publisher, Subjects, TicketCreatedEvent } from '@pippip/hugo-common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
