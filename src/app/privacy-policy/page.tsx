import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
};

export default function PrivacyPolicy() {
  return (
    <article className="mx-auto my-24 max-w-3xl px-4 md:mt-36 md:px-8 markdown-content">
      <h1>Privacy Policy (GDPR Information)</h1>

      <h2>Information on the Processing of Personal Data</h2>
      <p>
        In accordance with Articles 13 and 14 of Regulation (EU) 2016/679 of the
        European Parliament and of the Council (General Data Protection
        Regulation – GDPR) and Act No. 18/2018 Coll. on the Protection of
        Personal Data.
      </p>

      <h3>1. Data Controller</h3>
      <p>
        Comitas s. r. o.
        <br />
        Company ID (IČO): 52953963
        <br />
        Lermontovova 911/3, 811 05 Bratislava, Slovakia
        <br />
        E-mail: <em>[to be provided]</em>
      </p>

      <h3>2. Purposes of Processing</h3>
      <p>
        Personal data obtained via the registration form are processed for the
        following purposes:
      </p>
      <ul>
        <li>
          Registration and enabling entry to the event (
          <strong>legal basis:</strong> performance of a contract under Article
          6(1)(b) GDPR).
        </li>
        <li>
          Sending marketing communications – information about events and offers
          from the Controller (<strong>legal basis:</strong> consent of the data
          subject under Article 6(1)(a) GDPR).
        </li>
      </ul>

      <h3>3. Scope of Processed Data</h3>
      <p>
        Name and surname, e-mail address, telephone number (if provided), and
        any other data necessary for registration and entry.
      </p>

      <h3>4. Data Retention Period</h3>
      <ul>
        <li>
          Data for registration and event entry: until the event is completed.
        </li>
        <li>Data for marketing purposes: until consent is withdrawn.</li>
      </ul>

      <h3>5. Data Subject Rights</h3>
      <p>The data subject has the right to:</p>
      <ul>
        <li>access their personal data,</li>
        <li>rectify inaccurate data,</li>
        <li>request erasure (“right to be forgotten”),</li>
        <li>restrict processing,</li>
        <li>data portability,</li>
        <li>withdraw consent for marketing communications at any time,</li>
        <li>
          lodge a complaint with the Office for Personal Data Protection of the
          Slovak Republic.
        </li>
      </ul>

      <h3>6. Recipients of Personal Data</h3>
      <p>
        Personal data may be provided to IT service providers, e-mail marketing
        platforms, and hosting providers who process the data exclusively under
        a contract with the Controller.
      </p>

      <h3>7. Automated Decision-Making</h3>
      <p>
        Personal data are not subject to profiling or automated decision-making
        with legal effects.
      </p>

      <h3>8. Supervisory Authority Contact</h3>
      <p>
        Office for Personal Data Protection of the Slovak Republic
        <br />
        Hraničná 12, 820 07 Bratislava, Slovakia
        <br />
        <a
          href="https://dataprotection.gov.sk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          dataprotection.gov.sk
        </a>
      </p>
    </article>
  );
}
