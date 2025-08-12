import Logo from "./assets/splash-icon-dark.png";
import "./App.css";
import clsx from "clsx";
import AppStoreButton from "./assets/apple-download-shadow.png";
// @ts-expect-error types not found
import FitText from "@kennethormandy/react-fittext";

export const Bullet = ({ className }: { className?: string }) => {
  return <p className={clsx(className)}>{`\u29BF`}</p>;
};

export const BulletList = ({
  listItems,
  className,
}: {
  listItems: string[];
  className?: string;
}) => {
  return (
    <div className={clsx("flex flex-col gap-y-2", className)}>
      {listItems.map((item, index) => (
        <div key={item} className="flex flex-row items-start">
          <Bullet className="w-[24px]" />
          <p className="w-[calc(100%-24px)]" key={`item-${index}`}>
            {item}
          </p>
        </div>
      ))}
    </div>
  );
};

function App() {
  return (
    <FitText minFontSize={10} maxFontSize={14} compressor={8}>
      <div className="bg-[#242424] text-left">
        <div className="p-2 text-white exo-regular max-w-screen-lg mx-auto">
          <div className="h-[80px]" />

          <header className="flex flex-col justify-center items-center pb-20">
            <img className="ml-[20px] w-[230px]" src={Logo} alt="image" />
          </header>

          <div className="flex flex-col gap-y-[1em]">
            <p className="exo-regular text-[17px] md:text-[24px] font-bold mb-[0.5em]">
              Kinclave Privacy Policy
            </p>

            <p className="exo-regular mb-[0.5em]">
              <b>Effective Date:</b> Aug 12, 2025
            </p>

            <p className="exo-regular mb-[0.5em]">
              Kinclave (“we,” “us,” or “our”) is committed to protecting your
              privacy and complying with applicable data protection laws,
              including the General Data Protection Regulation (GDPR) and the
              California Consumer Privacy Act (CCPA). This Privacy Policy
              describes how we collect, use, store, and share your personal
              information when you use the Kinclave mobile application (“App”).
            </p>

            <p className="exo-regular mb-[0.5em]">
              By using Kinclave, you acknowledge you have read and understood
              this Privacy Policy. If you do not agree, please discontinue use
              of the App.
            </p>

            <hr className="my-[2em] h-0 border-t border-[rgba(255,255,255,0.3)]" />

            <p className="exo-regular text-[14px] md:text-[17px] font-bold mb-[0.5em]">
              1. Information We Collect
            </p>

            <p className="exo-regular mb-[0.5em]">
              We collect and process the following categories of personal data:
            </p>

            <p className="exo-regular font-bold mb-[0.5em]">
              Required Information
            </p>
            <BulletList
              className="mb-3"
              listItems={[
                "Name and email address (via Google Sign-In or Apple Sign-In)",
              ]}
            />

            <p className="exo-regular font-bold mb-[0.5em]">
              Optional Information (only with your explicit consent)
            </p>
            <BulletList
              className="mb-3"
              listItems={[
                "Location data (via device sensors)",
                "Device hardware and battery status",
                "Health and fitness data (via device sensors)",
                "Music listening habits (via Spotify API)",
              ]}
            />

            <hr className="my-[2em] h-0 border-t border-[rgba(255,255,255,0.3)]" />

            <p className="exo-regular text-[14px] md:text-[17px] font-bold mb-[0.5em]">
              2. Legal Basis for Processing (GDPR)
            </p>

            <p className="exo-regular mb-[0.5em]">
              We process your personal data under the following legal grounds:
            </p>
            <BulletList
              className="mb-3"
              listItems={[
                "Contractual necessity – to provide you access to Kinclave features",
                "Consent – for optional data such as location, health, and Spotify activity",
                "Legitimate interests – to maintain and improve App functionality",
                "Legal obligation – when required to comply with applicable laws",
              ]}
            />

            <hr className="my-[2em] h-0 border-t border-[rgba(255,255,255,0.3)]" />

            <p className="exo-regular text-[14px] md:text-[17px] font-bold mb-[0.5em]">
              3. How We Use Your Information
            </p>

            <p className="exo-regular mb-[0.5em]">Your data is used to:</p>

            <BulletList
              className="mb-3"
              listItems={[
                "Create and manage your Kinclave account",
                "Display your personalized dashboard",
                "Enable selective sharing of information with your chosen contacts",
                "Provide and improve App functionality",
              ]}
            />

            <p className="exo-regular mb-[0.5em]">
              We do not sell or rent your personal information.
            </p>

            <hr className="my-[2em] h-0 border-t border-[rgba(255,255,255,0.3)]" />

            <p className="exo-regular text-[14px] md:text-[17px] font-bold mb-[0.5em]">
              4. Data Sharing and Disclosure
            </p>

            <p className="exo-regular mb-[0.5em]">
              We may share your personal data only with:
            </p>
            <BulletList
              className="mb-3"
              listItems={[
                "Service Providers – such as Google, Apple, and Spotify, for authentication and linked services",
                "Legal Authorities – when required to comply with applicable law or legal processes",
                "Business Transfers – if we merge, are acquired, or sell assets",
              ]}
            />

            <p className="exo-regular mb-[0.5em]">
              We do not use your personal information for targeted advertising
              without your explicit consent.
            </p>

            <hr className="my-[2em] h-0 border-t border-[rgba(255,255,255,0.3)]" />

            <p className="exo-regular text-[14px] md:text-[17px] font-bold mb-[0.5em]">
              5. Your Privacy Rights
            </p>

            <p className="exo-regular mb-[0.5em]">
              Depending on your location, you have the right to:
            </p>

            <p className="exo-regular font-bold mb-[0.5em]">
              Under GDPR (EU/EEA Residents):
            </p>
            <BulletList
              className="mb-3"
              listItems={[
                "Access the personal data we hold about you",
                "Request correction or deletion of your personal data",
                "Withdraw consent at any time",
                "Restrict or object to processing",
                "Data portability",
              ]}
            />

            <p className="exo-regular font-bold mb-[0.5em]">
              Under CCPA (California Residents):
            </p>
            <BulletList
              className="mb-3"
              listItems={[
                "Request disclosure of personal information collected, used, or shared",
                "Request deletion of personal information",
                "Opt out of the sale or sharing of personal information (Kinclave does not sell your data)",
                "Non-discrimination for exercising your privacy rights",
              ]}
            />

            <p className="exo-regular mb-[0.5em]">
              Requests can be made by contacting erikksuzuki@gmail.com.
            </p>

            <hr className="my-[2em] h-0 border-t border-[rgba(255,255,255,0.3)]" />

            <p className="exo-regular text-[14px] md:text-[17px] font-bold mb-[0.5em]">
              6. Data Storage and Transfers
            </p>

            <p className="exo-regular mb-[0.5em]">
              Your data may be stored on servers located outside your country of
              residence, including in the United States. By using Kinclave, you
              consent to such transfers, subject to safeguards required by law.
            </p>

            <hr className="my-[2em] h-0 border-t border-[rgba(255,255,255,0.3)]" />

            <p className="exo-regular text-[14px] md:text-[17px] font-bold mb-[0.5em]">
              7. Data Retention
            </p>

            <p className="exo-regular mb-[0.5em]">
              We retain your personal data only as long as necessary to fulfill
              the purposes outlined in this policy, or as required by law. You
              may delete your account and associated data at any time via App
              settings.
            </p>

            <hr className="my-[2em] h-0 border-t border-[rgba(255,255,255,0.3)]" />

            <p className="exo-regular text-[14px] md:text-[17px] font-bold mb-[0.5em]">
              8. Data Security
            </p>

            <p className="exo-regular mb-[0.5em]">
              We implement technical, administrative, and physical safeguards to
              protect your personal data. However, no transmission over the
              internet is entirely secure, and we cannot guarantee absolute
              security.
            </p>

            <hr className="my-[2em] h-0 border-t border-[rgba(255,255,255,0.3)]" />

            <p className="exo-regular text-[14px] md:text-[17px] font-bold mb-[0.5em]">
              9. Third-Party Services
            </p>

            <p className="exo-regular mb-[0.5em]">
              Kinclave integrates with third-party services, including:
            </p>
            <BulletList
              className="mb-3"
              listItems={[
                "Google Sign-In (Privacy Policy: https://policies.google.com/privacy)",
                "Apple Sign-In (Privacy Policy: https://www.apple.com/legal/privacy/)",
                "Spotify API (Privacy Policy: https://www.spotify.com/legal/privacy-policy/)",
              ]}
            />

            <p className="exo-regular mb-[0.5em]">
              We encourage you to review their privacy practices.
            </p>

            <hr className="my-[2em] h-0 border-t border-[rgba(255,255,255,0.3)]" />

            <p className="exo-regular text-[14px] md:text-[17px] font-bold mb-[0.5em]">
              10. Changes to This Policy
            </p>

            <p className="exo-regular mb-[0.5em]">
              We may update this Privacy Policy from time to time. Changes will
              be posted in the App with the updated effective date. Continued
              use of Kinclave after changes means you accept the updated terms.
            </p>

            <hr className="my-[2em] h-0 border-t border-[rgba(255,255,255,0.3)]" />

            <p className="exo-regular text-[14px] md:text-[17px] font-bold mb-[0.5em]">
              11. Contact Us
            </p>

            <p className="exo-regular mb-[0.5em]">
              For privacy-related inquiries or to exercise your rights:
            </p>

            <p className="exo-regular mb-[0.5em]">📧 erikksuzuki@gmail.com</p>
            <p className="exo-regular mb-[0.5em]">📍 Nevada, USA</p>
          </div>

          <footer className="flex flex-row justify-center pb-10">
            <a
              href="https://testflight.apple.com/join/6748461133"
              target="_blank"
            >
              <img
                className="w-[190px] mt-8"
                src={AppStoreButton}
                alt="image"
              />
            </a>
          </footer>
        </div>
      </div>
    </FitText>
  );
}

export default App;
