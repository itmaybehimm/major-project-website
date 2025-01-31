import { FaChevronRight } from 'react-icons/fa6';
import ReusableCard from '../components/ReusableCard.jsx';

const About = () => {
  return (
    <section className="c-space my-20" id="info">
      <p className="head-text py-5">Project Info</p>
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <ReusableCard
          imageSrc="assets/lock.png"
          title="Introduction"
          description="An Artificial Intelligence Based Network Intrusion Detection"
          modalContent={
            <p>
              In the digital age, networks and information systems have become integral to the functioning of various
              sectors including finance, healthcare, education, and national security. The reliance on these
              interconnected systems has made them attractive targets for cyber threats, ranging from malware and
              ransomware to sophisticated hacking and advanced persistent threats. To mitigate these risks, Intrusion
              Detection Systems (IDS) are employed as essential security mechanisms that monitor network traffic and
              system activities for signs of malicious behavior. Traditional IDS techniques, such as signature-based and
              anomaly-based detection, have limitations. Signature-based IDS rely on known attack patterns to identify
              threats, making them ineffective against new and unknown attacks. Anomaly-based IDS, while capable of
              detecting novel threats by identifying deviations from normal behavior, often suffer from high false
              positive rates, leading to alert fatigue and decreased trust in the system. With the advent of Artificial
              Intelligence (AI) and Machine Learning (ML), there is significant potential to enhance the capabilities of
              IDS. AI-based IDS can learn from vast amounts of data, adapt to new and evolving threats, and improve
              detection accuracy while reducing false positives. These systems can analyze complex patterns and
              correlations in network traffic that are beyond human capabilities, providing a more robust and adaptive
              defense mechanism against cyber threats.
            </p>
          }
          colSpan="xl:col-span-1"
          rowSpan="xl:row-span-3"
        />
        <ReusableCard
          imageSrc="assets/problem.png"
          title="Problem Statements"
          description="The primary problems addressed in this project "
          modalContent={
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaChevronRight className="text-gray-500" />
                <span>The high false positive rate of traditional IDS.</span>
              </li>
              <li className="flex items-center gap-2">
                <FaChevronRight className="text-gray-500" />
                <span>The inability of traditional IDS to adapt to new and evolving threats.</span>
              </li>
              <li className="flex items-center gap-2">
                <FaChevronRight className="text-gray-500" />
                <span>
                  The resource-intensive nature of current IDS solutions, which can impact network performance.
                </span>
              </li>
            </ul>
          }
          colSpan="xl:col-span-1"
          rowSpan="xl:row-span-3"
        />

        <ReusableCard
          imageSrc="assets/try.png"
          title="Objectives"
          description="Objectives of the Project"
          modalContent={
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaChevronRight className="text-gray-500" />
                <span>To develop an AI-based IDS that improves detection accuracy.</span>
              </li>
              <li className="flex items-center gap-2">
                <FaChevronRight className="text-gray-500" />
                <span>To compare the performance of various AI algorithms.</span>
              </li>
              <li className="flex items-center gap-2">
                <FaChevronRight className="text-gray-500" />
                <span>To demonstrate the IDS in a simulated environment.</span>
              </li>
            </ul>
          }
          colSpan="xl:col-span-1"
          rowSpan="xl:row-span-3"
        />

        <ReusableCard
          imageSrc="assets/play.png"
          title="Demo Video"
          description="YouTube Video to the Demo of the Project"
          modalContent={<p> The video will be uploaded when the project is complete</p>}
          colSpan="xl:col-span-2"
          rowSpan="xl:row-span-3"
          // disableModal={true}
          link=""
        />

        <ReusableCard
          imageSrc="assets/github.svg"
          title="Project Github"
          description="Github Link "
          modalContent={<p> No model content here</p>}
          colSpan="xl:col-span-1"
          rowSpan="xl:row-span-3"
          disableModal={true}
          link="https://github.com/Xzanam"
        />

        <ReusableCard
          imageSrc="assets/grid3.png"
          title="Proposal"
          description="The Proposal of the Project"
          rowSpan="xl:row-span-3"
          disableModal={true}
          link="https://drive.google.com/file/d/1wY-O1_1yoTeiMHQyQ1X0IaCIpQaE2DoQ/view?usp=sharing"
        />

        <ReusableCard
          imageSrc="assets/grid3.png"
          title="Mid Defense Report"
          description="The Mid Term Report of the Project"
          rowSpan="xl:row-span-3"
          disableModal={true}
          link="https://drive.google.com/file/d/1w6OHadCMMzwllOtjklX0d-1946GuwoPx/view?usp=sharing"
        />

        <ReusableCard
          imageSrc="assets/grid3.png"
          title="Final Report"
          description="The Final Report of the Project"
          rowSpan="xl:row-span-3"
          modalContent={<p> The final report will be uploaded when the project is complete</p>}
        />
      </div>
    </section>
  );
};

export default About;
