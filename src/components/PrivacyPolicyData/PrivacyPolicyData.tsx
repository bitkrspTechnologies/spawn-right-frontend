import React from "react";
import {
  ShieldCheck,
  Database,
  User,
  Activity,
  Smartphone,
  Settings,
  TrendingUp,
  LayoutDashboard,
  Mail,
  Cookie,
  Share2,
  Lock,
  Shield,
  Edit,
  Baby,
} from "lucide-react";

const PrivacyPolicyData = () => {
  const sections = [
    {
      icon: <Database className="text-primary w-6 h-6" />,
      title: "Information We Collect",
      content: (
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-start space-x-2">
            <User className="text-primary w-5 h-5 mt-0.5 flex-shrink-0" />
            <span>
              Contact information (name, email, etc.) when you register or
              subscribe
            </span>
          </li>
          <li className="flex items-start space-x-2">
            <Activity className="text-primary w-5 h-5 mt-0.5 flex-shrink-0" />
            <span>
              Data on how you use the site (pages visited, content interactions)
            </span>
          </li>
          <li className="flex items-start space-x-2">
            <Smartphone className="text-primary w-5 h-5 mt-0.5 flex-shrink-0" />
            <span>Device data (IP address, browser type, etc.)</span>
          </li>
        </ul>
      ),
    },
    {
      icon: <Settings className="text-primary w-6 h-6" />,
      title: "How We Use Your Information",
      content: (
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-start space-x-2">
            <TrendingUp className="text-primary w-5 h-5 mt-0.5 flex-shrink-0" />
            <span>Improve website performance and user experience</span>
          </li>
          <li className="flex items-start space-x-2">
            <LayoutDashboard className="text-primary w-5 h-5 mt-0.5 flex-shrink-0" />
            <span>Display relevant content and statistics</span>
          </li>
          <li className="flex items-start space-x-2">
            <Mail className="text-primary w-5 h-5 mt-0.5 flex-shrink-0" />
            <span>
              Communicate tournament updates, newsletters, or promotions
            </span>
          </li>
        </ul>
      ),
    },
    {
      icon: <Cookie className="text-primary w-6 h-6" />,
      title: "Cookies",
      content: (
        <p className="text-gray-300">
          We use cookies to enhance site functionality and performance. You can
          modify your browser settings to manage cookie preferences.
        </p>
      ),
    },
    {
      icon: <Share2 className="text-primary w-6 h-6" />,
      title: "Third-Party Services",
      content: (
        <p className="text-gray-300">
          We use third-party services like Google Analytics and Discord
          integrations. These services may collect data subject to their own
          privacy policies.
        </p>
      ),
    },
    {
      icon: <Lock className="text-primary w-6 h-6" />,
      title: "Data Security",
      content: (
        <p className="text-gray-300">
          We implement standard encryption and security practices to protect
          your information but cannot guarantee complete security.
        </p>
      ),
    },
    {
      icon: <Shield className="text-primary w-6 h-6" />,
      title: "Your Rights",
      content: (
        <p className="text-gray-300">
          You may request to access, update, or delete your data by contacting
          us at
          <a
            href="mailto:support@spawnright.com"
            className="text-primary hover:underline"
          >
            {" "}
            support@spawnright.com
          </a>
          .
        </p>
      ),
    },
    {
      icon: <Baby className="text-primary w-6 h-6" />,
      title: "Children's Privacy",
      content: (
        <p className="text-gray-300">
          Spawn Right is not intended for users under the age of 13. We do not
          knowingly collect personal data from children.
        </p>
      ),
    },
    {
      icon: <Edit className="text-primary w-6 h-6" />,
      title: "Changes to this Policy",
      content: (
        <p className="text-gray-300">
          We may update this Privacy Policy as needed. Changes will be posted on
          this page.
        </p>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-white">
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-black/50 rounded-xl shadow-md overflow-hidden p-6 md:p-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Privacy Policy</h2>
            <p className="text-gray-300">
              Your privacy is important to us. This policy explains how we
              collect, use, and protect your information.
            </p>
          </div>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="flex items-center space-x-3">
                    {section.icon}
                    <h3 className="text-xl font-semibold text-white">
                      {section.title}
                    </h3>
                  </div>
                </div>
                <div className="md:w-3/4 text-gray-300">{section.content}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicyData;
