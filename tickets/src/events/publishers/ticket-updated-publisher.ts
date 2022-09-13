import { Publisher, Subjects, TicketUpdatedEvent } from '@pippip/hugo-common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
