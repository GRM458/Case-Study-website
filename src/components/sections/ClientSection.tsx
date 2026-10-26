import { useState } from "react";
import { clients, productName } from "../../config/site";
import { ImageGallery } from "../ui/ImageGallery";
import { SelectableItemTab } from "../ui/SelectableItemTab";

export function ClientSection() {
  const [activeClient, setActiveClient] = useState(0);
  const selectedClient = clients[activeClient];

  return (
    <section
      className="bg-paper px-6 py-14 text-ink md:px-12 md:py-18 lg:px-[12vw] lg:py-22"
      id="clients"
      aria-labelledby="client-heading"
    >
      <div className="grid gap-8 md:grid-cols-2 md:items-end md:gap-12">
        <div>
          <h2
            id="client-heading"
            className="section-title mt-8"
          >
            Schools that trust us
            <br />
            <span className="text-cyan">using LuminfyEdu.</span>
          </h2>
        </div>
        <p className="section-copy text-copy">
          See how schools use {productName} to manage daily tasks, support
          student progress, and keep parents informed.
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
          className="grid gap-9 py-8 lg:grid-cols-2 lg:gap-12 lg:py-10 lg:pl-12"
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
          <ImageGallery
            key={selectedClient.number}
            imageUrl={selectedClient.imageUrl}
            alt={`${productName} client: ${selectedClient.shortTitle}`}
          />
        </div>
      </div>
{/* h-64 removed form image */}

    </section>
  );
}
