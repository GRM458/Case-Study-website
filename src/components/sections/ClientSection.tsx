import { useState } from "react";
import { clients, productName } from "../../config/site";

export function ClientSection() {
  const [activeClient, setActiveClient] = useState(0);
  const selectedClient = clients[activeClient];

  return (
    <section
      className="bg-paper px-6 py-20 text-ink md:px-12 md:py-28 lg:px-[12vw] lg:py-32"
      id="clients"
      aria-labelledby="client-heading"
    >
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <h2
            id="client-heading"
            className="section-title mt-8"
          >
            The client behind
            <br />
            <span className="text-cyan">the case study.</span>
          </h2>
        </div>
        <p className="section-copy max-w-85 pb-1 text-copy">
          This section highlights the school client and the information
          provided about its use of {productName}.
        </p>
      </div>

      <div className="mt-14 grid border-t border-line lg:grid-cols-[.72fr_1.28fr]">
        <div
          className="flex flex-col border-b border-line py-3 lg:border-b-0 lg:border-r lg:py-6"
          role="tablist"
          aria-label="Client institutions"
          aria-orientation="vertical"
        >
          {clients.map((client, index) => (
            <button
              className={`group flex min-h-16.25 cursor-pointer items-center gap-4 rounded-lg border-b px-3 text-left text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan ${activeClient === index ? "border-cyan/30 bg-cyan/10 text-cyan" : "border-line text-copy hover:border-cyan/30 hover:bg-white/5 hover:text-cyan"}`}
              id={`client-tab-${index}`}
              key={client.number}
              type="button"
              role="tab"
              aria-selected={activeClient === index}
              aria-controls="client-panel"
              onClick={() => setActiveClient(index)}
            >
              <span className="w-7 text-[10px] text-muted">
                {client.number}
              </span>
              <span className="flex-1">{client.shortTitle}</span>
              <span
                className={`text-cyan transition-transform group-hover:translate-x-1 ${activeClient === index ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                aria-hidden="true"
              >
                ↗
              </span>
            </button>
          ))}
        </div>
        <div
          className="grid gap-9 py-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-12 lg:py-10 lg:pl-12"
          role="tabpanel"
          id="client-panel"
          aria-labelledby={`client-tab-${activeClient}`}
        >
          <div className="flex flex-col items-start">
            <span className="text-[10px] font-semibold uppercase tracking-[1.7px] text-cyan">
              CLIENT {selectedClient.number}
            </span>
            <h3 className="mt-5 font-sans text-3xl font-semibold leading-tight md:text-4xl">
              {selectedClient.shortTitle}
            </h3>
            <p className="mt-4 text-sm leading-7 text-copy">
              {selectedClient.description}
            </p>
            <a
            target="_blank"
              className="mt-auto inline-flex items-center gap-4 border-b border-violet pb-1 pt-7 text-xs font-semibold text-violet transition-colors hover:border-cyan hover:text-cyan"
              href={selectedClient.Link}
            >
              Visite<span aria-hidden="true">↗</span>
            </a>
          </div>
          <div
            className="flex min-h-64 flex-col justify-between rounded-xl border border-white/10 bg-dark-paper p-6 md:p-8"
            aria-label={`Client profile: ${selectedClient.shortTitle}`}
          >
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[1.4px] text-muted">
                {productName} / CLIENT PROFILE
              </span>
              <h4 className="mt-5 max-w-md font-sans text-2xl font-semibold leading-snug text-ink">
                {selectedClient.shortTitle}
              </h4>
              <p className="mt-4 max-w-lg text-sm leading-7 text-copy">
                {selectedClient.description}
              </p>
            </div>
            <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-4 text-xs text-muted">
              <span className="size-2 rounded-full bg-cyan" />
              School client featured in this case study
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}
