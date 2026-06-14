import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    quote:
      "completely transformed how my brand shows up online. Scripts, edits, consistency — they own the entire system.",
    name: "Payal Agarwal Mukherjee",
    designation: "Fitness Creator · 1.4M followers",
    src: "/clients/payal_mukharjee.jpg",
  },
  {
    quote:
      "Raya handles everything — scripts, edits, posting. My audience kept growing without me thinking about content once.",
    name: "Dr Vaishali Kukreja",
    designation: "Doctor · 64.6K followers",
    src: "/clients/vaishali_kukreja.jpg",
  },
  {
    quote:
      "One video crossed 10 million views — fully edited by Raya. That single video added 20K followers overnight.",
    name: "Madhav Bhatia",
    designation: "Finance Creator · 315K followers",
    src: "/clients/madhavbhatia.jpg",
  },
  {
    quote:
      "I went from inconsistent content to 489K followers. Raya understood my niche better than I did.",
    name: "Aarushi Rawat",
    designation: "Infotainment · 489K followers",
    src: "/clients/creative_thrives.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <header className="section-header section-header--center">
          <span className="label">Testimonials</span>
          <h2 className="heading heading--sm">
            Hear it directly from{" "}
            <span className="heading-accent">our clients.</span>
          </h2>
          <p className="lede">
            Real creators. Real results. Here&apos;s what they say about working
            with Raya Social.
          </p>
        </header>

        <AnimatedTestimonials testimonials={testimonials} autoplay />
      </div>
    </section>
  );
}
