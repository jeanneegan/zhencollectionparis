import type { Locale } from "@/app/artists/[slug]/data";
import {
  zcpContactEmail,
  zcpContactLabels,
  zcpContactWechat,
} from "@/app/lib/site-contact";

export function ZcpContactDetails({
  locale,
  className = "",
}: {
  locale: Locale;
  className?: string;
}) {
  const labels = zcpContactLabels[locale];

  return (
    <div className={className}>
      <p className="text-sm font-medium tracking-[0.04em] text-stone-900">
        {labels.organization}
      </p>
      <dl className="mt-6 space-y-5">
        <div>
          <dt className="text-[10px] uppercase tracking-[0.12em] text-stone-400">
            {labels.email}
          </dt>
          <dd className="mt-1 text-sm text-stone-800">
            <a
              href={`mailto:${zcpContactEmail}`}
              className="underline-offset-4 hover:underline"
            >
              {zcpContactEmail}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-[10px] uppercase tracking-[0.12em] text-stone-400">
            {labels.wechat}
          </dt>
          <dd className="mt-1 text-sm text-stone-800">{zcpContactWechat}</dd>
        </div>
        <div>
          <dt className="text-[10px] uppercase tracking-[0.12em] text-stone-400">
            {labels.location}
          </dt>
          <dd className="mt-1 text-sm text-stone-800">{labels.locationValue}</dd>
        </div>
      </dl>
    </div>
  );
}
