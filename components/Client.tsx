"use client";

type Client = {
  name: string;
  handle: string;
  photo?: string;
  initials: string;
  avatarBg: string;
  followers?: string;
};

const featuredClients: Client[] = [
  {
    name: "Payal Agarwal",
    handle: "@payalagarwalmukherjee",
    initials: "PA",
    avatarBg: "#2D1F6E",
    photo: "/clients/payal_mukharjee.jpg",
    followers: "1.5M",
  },
  {
    name: "Vaibhav Kamboj",
    handle: "@topstocker24",
    initials: "VK",
    avatarBg: "#0F3D28",
    photo: "/clients/top_stocker.jpg",
    followers: "639K",
  },
  {
    name: "Aarushi Rawat",
    handle: "@creative.thrives",
    initials: "AR",
    avatarBg: "#3D1F0A",
    photo: "/clients/creative_thrives.jpg",
    followers: "487K",
  },
  {
    name: "Nupuur Patil",
    handle: "@nupuurpatil",
    initials: "NP",
    avatarBg: "#0A2B3D",
    photo: "/clients/nupur_patil.jpg",
    followers: "361K",
  },

  {
    name: "Rishi",
    handle: "@fit.with.rishi",
    initials: "R",
    avatarBg: "#0F3320",
    photo: "/clients/fit_with_rishi.jpg",
    followers: "194K",
  },
  {
    name: "Yoga Delight",
    handle: "@_yogadelight",
    initials: "Y",
    avatarBg: "#2D1F6E",
    photo: "/clients/yogadelight.jpg",
    followers: "145K",
  },
];

const moreClients: Client[] = [
  {
    name: "Dr Pallavi",
    handle: "@drpallaviahireshelke",
    initials: "P",
    avatarBg: "#0A2B3D",
    photo: "/clients/drpallaviahireshelke.jpg",
  },
  {
    name: "Laxmi CA",
    handle: "@ca.laxmi07",
    initials: "L",
    avatarBg: "#3D1F0A",
    photo: "/clients/ca_laxmi.jpg",
  },
  {
    name: "Techno Guy",
    handle: "@thetechnoguy07",
    initials: "I",
    avatarBg: "#2B1A0A",
    photo: "/clients/technoguy.jpg",
  },
  {
    name: "Kunal Kumar",
    handle: "@ca.kunalkumar",
    initials: "K",
    avatarBg: "#0F3320",
    photo: "/clients/kunalkumar.jpg",
  },
  {
    name: "Dr Vaishali",
    handle: "@dr.vaishali_kukreja",
    initials: "VK",
    avatarBg: "#2B1A0A",
    photo: "/clients/vaishali_kukreja.jpg",
  },
];

function LogoItem({ client }: { client: Client }) {
  return (
    <div className="logo-item">
      {client.followers && (
        <span className="logo-item__followers">{client.followers}</span>
      )}
      <span className="logo-item__avatar">
        {client.photo ? (
          <img
            src={client.photo}
            alt={client.name}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <span
            className="logo-item__initial"
            style={{ background: client.avatarBg }}
          >
            {client.initials}
          </span>
        )}
      </span>
      <span className="logo-item__name">{client.name}</span>
    </div>
  );
}

export default function Clients() {
  return (
    <section id="clients" className="section">
      <div className="container">
        <header className="section-header section-header--center">
          <span className="label">Our clients</span>
          <h2 className="heading heading--sm">You&apos;re in good hands.</h2>
          <p className="lede">
            Top creators trust Raya Social to manage their content, growth, and
            brand.
          </p>
        </header>

        <div className="logo-grid">
          {featuredClients.map((client) => (
            <LogoItem key={client.handle} client={client} />
          ))}
        </div>

        <div className="mx-auto max-w-xl overflow-hidden py-4 mask-scroll">
          <div className="inline-flex animate-scroll-left">
            <div className="flex gap-3">
              {moreClients.map((client) => (
                <div
                  key={client.handle}
                  className="group flex shrink-0 flex-col items-center gap-2"
                >
                  <span
                    className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-2 border-[var(--border)] text-sm font-bold transition-all duration-300 group-hover:border-[var(--accent)] group-hover:shadow-[0_0_20px_var(--accent-border)]"
                    style={{ background: client.avatarBg }}
                  >
                    {client.photo ? (
                      <img
                        src={client.photo}
                        alt={client.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      client.initials
                    )}
                  </span>
                  <span className="whitespace-nowrap text-xs font-medium text-[var(--text-muted)] transition-colors group-hover:text-[var(--text-secondary)]">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              {moreClients.map((client) => (
                <div
                  key={client.handle}
                  className="group flex shrink-0 flex-col items-center gap-2"
                >
                  <span
                    className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-2 border-[var(--border)] text-sm font-bold transition-all duration-300 group-hover:border-[var(--accent)] group-hover:shadow-[0_0_20px_var(--accent-border)]"
                    style={{ background: client.avatarBg }}
                  >
                    {client.photo ? (
                      <img
                        src={client.photo}
                        alt={client.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      client.initials
                    )}
                  </span>
                  <span className="whitespace-nowrap text-xs font-medium text-[var(--text-muted)] transition-colors group-hover:text-[var(--text-secondary)]">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
