import { FaGlobeAsia, FaHandshake, FaBuilding } from "react-icons/fa";
import { RiTeamLine } from "react-icons/ri";
import { MdOutlineAutoGraph } from "react-icons/md";

export const UNGCNSSection = () => {
  return (
    <section id="ungcns" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          About <span className="text-primary">UNGCNS</span>
        </h2>

        {/* Centrepiece Logo Card */}
        <div className="relative mx-auto mb-12 max-w-xl">
          <div className="gradient-border rounded-3xl p-1">
            <div className="rounded-3xl bg-card/70 backdrop-blur-sm border border-border p-8 flex flex-col items-center">
              <img
                src="/UNGCNS.png"
                alt="UNGCNS Logo"
                className="h-20 md:h-24 object-contain mb-4"
              />
              <p className="text-muted-foreground text-center max-w-prose">
                The{" "}
                <strong>
                  United Nations Global Compact Network Singapore (UNGCNS)
                </strong>
                is the Singapore chapter of the{" "}
                <strong>United Nations Global Compact</strong>, the world’s
                largest corporate sustainability initiative under the United
                Nations.
              </p>
            </div>
          </div>
          <div className="absolute -inset-6 -z-10 blur-2xl opacity-40 bg-primary/20 rounded-[2rem]" />
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          <div className="rounded-2xl border border-border bg-card/50 p-5 text-center">
            <div className="text-2xl font-bold">Singapore</div>
            <div className="text-muted-foreground text-sm">
              arm of the United Nations Global Compact
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card/50 p-5 text-center">
            <div className="text-2xl font-bold">Largest</div>
            <div className="text-muted-foreground text-sm">
              corporate sustainability initiative globally
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card/50 p-5 text-center">
            <div className="text-2xl font-bold">Multi-sector</div>
            <div className="text-muted-foreground text-sm">
              business & institutional partnerships
            </div>
          </div>
        </div>

        {/* Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="gradient-border p-6 rounded-2xl card-hover h-full">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <FaGlobeAsia className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Global Mandate</h3>
                <p className="text-muted-foreground text-sm">
                  Advances the{" "}
                  <strong>UN Sustainable Development Goals (SDGs)</strong>
                  and the{" "}
                  <strong>Ten Principles of the UN Global Compact </strong>
                  across human rights, labour, environment and anti-corruption.
                </p>
              </div>
            </div>
          </div>

          <div className="gradient-border p-6 rounded-2xl card-hover h-full">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <FaHandshake className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  Strategic Partnerships
                </h3>
                <p className="text-muted-foreground text-sm">
                  Collaborates with key institutions including
                  <strong> Singapore Business Federation (SBF)</strong>,
                  <strong>
                    {" "}
                    Singapore National Employers Federation (SNEF)
                  </strong>
                  ,<strong> NTUC</strong>, and
                  <strong> City Developments Limited (CDL)</strong> to drive
                  responsible business practices.
                </p>
              </div>
            </div>
          </div>

          <div className="gradient-border p-6 rounded-2xl card-hover h-full">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MdOutlineAutoGraph className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  Business Transformation
                </h3>
                <p className="text-muted-foreground text-sm">
                  Supports companies in{" "}
                  <strong>Sustainability reporting, ESG strategy</strong>,
                  leadership development and cross-sector collaboration to
                  strengthen <strong>Singapore’s sustainable economy</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Who We Work With */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-center mb-10">
            Key Organisations Working With{" "}
            <span className="text-primary">UNGCNS</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center text-center">
            <div>
              <FaBuilding className="mx-auto text-4xl text-primary mb-2" />
              <p className="text-muted-foreground text-sm">
                Singapore Business Federation (SBF)
              </p>
            </div>
            <div>
              <FaBuilding className="mx-auto text-4xl text-primary mb-2" />
              <p className="text-muted-foreground text-sm">
                City Developments Limited (CDL)
              </p>
            </div>
            <div>
              <FaBuilding className="mx-auto text-4xl text-primary mb-2" />
              <p className="text-muted-foreground text-sm">NTUC</p>
            </div>
            <div>
              <FaBuilding className="mx-auto text-4xl text-primary mb-2" />
              <p className="text-muted-foreground text-sm">
                Singapore National Employers Federation (SNEF)
              </p>
            </div>
          </div>
        </div>

        {/* Closing */}
        <div className="mt-20 max-w-3xl mx-auto text-center text-muted-foreground">
          <p>
            As Singapore’s local network under the United Nations Global
            Compact, UNGCNS serves as a platform for businesses to align with
            global sustainability standards while contributing to national
            economic and social resilience.
          </p>
        </div>
      </div>
    </section>
  );
};
