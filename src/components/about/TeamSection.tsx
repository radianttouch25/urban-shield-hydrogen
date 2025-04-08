import { forwardRef } from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { Button } from '../ui/button';

interface TeamSectionProps {
  sectionRef: (el: HTMLDivElement | null) => void;
}

const TeamSection = forwardRef<HTMLDivElement, TeamSectionProps>(
  ({ sectionRef }, ref) => {
    return (
      <section
        ref={ref}
        id="team"
        className="container mx-auto px-4 mb-12 opacity-0 translate-y-10 transition-all duration-700"
      >
        <div ref={el => sectionRef(el)} className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient-gold">Meet Our Team</span>
            </h2>
            <p className="text-xl text-gray-300">
              The visionaries and experts behind Urban Shield
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team member cards */}
            <div className="bg-dark/30 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10">
              <div className="aspect-square relative overflow-hidden">
                <img
                  src="/assets/04488e94-b7fc-46c4-9760-2f2ba39b836d.png"
                  alt="Dr. Elizabeth Chen"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">Dr. Elizabeth Chen</h3>
                <p className="text-gold mb-3">Founder & Chief Scientist</p>
                <p className="text-gray-300 text-sm mb-4">
                  Dermatology researcher with 15+ years experience studying environmental impacts on skin health.
                </p>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="bg-dark/50 hover:bg-dark">
                    <Linkedin size={16} className="mr-1" />
                    LinkedIn
                  </Button>
                  <Button size="sm" variant="outline" className="bg-dark/50 hover:bg-dark">
                    <Mail size={16} className="mr-1" />
                    Contact
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-dark/30 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10">
              <div className="aspect-square relative overflow-hidden">
                <img
                  src="/assets/d926396f-8e77-4f5d-9d84-c626235ee99e.png"
                  alt="Marcus Reynolds"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">Marcus Reynolds</h3>
                <p className="text-gold mb-3">CEO</p>
                <p className="text-gray-300 text-sm mb-4">
                  Former executive at leading skincare brands with expertise in scaling cosmeceutical companies.
                </p>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="bg-dark/50 hover:bg-dark">
                    <Linkedin size={16} className="mr-1" />
                    LinkedIn
                  </Button>
                  <Button size="sm" variant="outline" className="bg-dark/50 hover:bg-dark">
                    <Mail size={16} className="mr-1" />
                    Contact
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-dark/30 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10">
              <div className="aspect-square relative overflow-hidden">
                <img
                  src="/assets/fb7a29f8-4569-4314-86c6-cb50377eff23.png"
                  alt="Dr. Aisha Khatri"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">Dr. Aisha Khatri</h3>
                <p className="text-gold mb-3">Head of Product Development</p>
                <p className="text-gray-300 text-sm mb-4">
                  Cosmetic chemist specializing in innovative formulations and sustainable ingredient sourcing.
                </p>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="bg-dark/50 hover:bg-dark">
                    <Linkedin size={16} className="mr-1" />
                    LinkedIn
                  </Button>
                  <Button size="sm" variant="outline" className="bg-dark/50 hover:bg-dark">
                    <Mail size={16} className="mr-1" />
                    Contact
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-xl text-gray-300 mb-6">
              Interested in joining our team?
            </p>
            <Button className="bg-gradient-gold text-dark hover:shadow-lg transition-shadow">
              <Mail className="mr-2 h-5 w-5" />
              View Open Positions
            </Button>
          </div>
        </div>
      </section>
    );
  }
);

TeamSection.displayName = "TeamSection";

export default TeamSection;
