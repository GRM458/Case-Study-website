import { useState } from "react";
import { clients, productName } from "../../config/site";
import { SelectableItemTab } from "../ui/SelectableItemTab";

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
            <SelectableItemTab
              controls="client-panel"
              id={`client-tab-${index}`}
              key={client.number}
              isSelected={activeClient === index}
              number={client.number}
              onSelect={() => setActiveClient(index)}
              title={client.shortTitle}
            />
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
          <img
            className="w-full rounded-xl border border-white/10 object-cover"
            src={selectedClient.imageUrl}
            alt={`${productName} client: ${selectedClient.shortTitle}`}
          />
        </div>
      </div>
{/* h-64 removed form image */}

    </section>
  );
}
