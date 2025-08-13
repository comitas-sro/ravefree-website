import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and conditions',
};

export default function TermsAndConditions() {
  return (
    <article className="mx-auto my-24 max-w-3xl px-4 md:mt-36 md:px-8 markdown-content">
      <h1>Terms and Conditions</h1>
      <h2>
        Terms and Conditions for the Use of the Website and Participation in the
        Event
      </h2>
      <p>
        <strong>Organizer:</strong>
        <br />
        Comitas s. r. o.
        <br />
        Company ID (IČO): 52953963
        <br />
        Lermontovova 911/3, 811 05 Bratislava, Slovakia
        <br />
        Registered in the Commercial Register of the District Court Bratislava
        I, Section: Sro, File No.: 145651/B
      </p>

      <h3>1. Introductory Provisions</h3>
      <p>
        These Terms and Conditions (hereinafter referred to as the “Terms”)
        govern the rights and obligations between Comitas s. r. o., as the
        operator of the website (hereinafter referred to as the “Organizer”),
        and persons who register for the event via the registration form on the
        website (hereinafter referred to as the “Participant”).
      </p>
      <p>
        By submitting the registration form, the Participant confirms that they
        have read, understood, and agree to these Terms.
      </p>

      <h3>2. Purpose of the Website and Registration</h3>
      <p>
        The website is used for the registration of Participants for a specific
        event organized by the Organizer.
        <br />
        By registering, the Participant agrees to receive marketing
        communications from the Organizer and gains the right to enter the event
        through a special entry lane upon presenting the assigned password.
      </p>

      <h3>3. Conditions of Participation and Entry</h3>
      <p>
        By registering, the Participant obtains the right to enter the special
        entry lane designated by the Organizer.
      </p>
      <p>
        The event will take place on 06 December 2025 at A4 Studio, Trnavská
        cesta 39, 831 04 Bratislava, Slovakia.
      </p>
      <p>
        Entry is valid only on the day of the event and until 22:30. After this
        time, the right to entry expires.
      </p>
      <p>
        The Participant must present the assigned password upon entry and follow
        the instructions of the event organizers.
      </p>
      <p>
        The password required for entry will be sent via e-mail no later than 5
        days prior to the event date.
      </p>

      <h3>4. Marketing Communications</h3>
      <p>
        By registering, the Participant agrees to receive marketing messages and
        information about upcoming events and activities from the Organizer for
        an indefinite period, until such consent is withdrawn.
      </p>

      <h3>5. Changes and Event Cancellation</h3>
      <p>
        The Organizer reserves the right to change the program, venue, or time
        of the event, or to cancel the event entirely. Any changes will be
        communicated to the Participant via the e-mail address provided during
        registration.
      </p>

      <h3>6. Liability</h3>
      <p>
        The Organizer is not liable for any damages caused by false or
        incomplete information provided by the Participant.
        <br />
        The Organizer is not liable for denying entry after 22:30 on the day of
        the event.
      </p>

      <h3>7. Final Provisions</h3>
      <p>
        These Terms take effect on the date of their publication on the
        Organizer’s website.
        <br />
        The Organizer reserves the right to modify or supplement these Terms at
        any time.
      </p>
    </article>
  );
}
