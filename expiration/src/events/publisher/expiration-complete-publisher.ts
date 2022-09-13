import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@pippip/hugo-common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
