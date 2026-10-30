"use client";

import { useState } from "react";
import {
  ALL_PRODUCTS_ANNUAL_PRICE, CORE_GROUPS, PRODUCT_CATALOG,
  annualTotal, estimateInquiryHref, formatAnnualPrice, productInquiryHref,
} from "@/lib/product-catalog";
import { Ico } from "./icons";

export function AnnualPricing({ headingLevel = 2 }: { headingLevel?: 1 | 2 }) {
  const Heading = headingLevel === 1 ? "h1" : "h2";
  const [selected, setSelected] = useState<string[]>([]);
  const [compare, setCompare] = useState([PRODUCT_CATALOG[0].id, PRODUCT_CATALOG[1].id]);
  const total = annualTotal(selected);

  function toggle(id: string) {
    setSelected((current) => current.includes(id) ? current.filter((value) => value !== id) : [...current, id]);
  }

  function setComparison(index: number, id: string) {
    setCompare((current) => {
      const next = [...current];
      const other = index === 0 ? 1 : 0;
      if (id === current[other]) next[other] = current[index];
      next[index] = id;
      return next;
    });
  }

  const inquiry = estimateInquiryHref(selected);

  return (
    <section className="section annual-pricing" id="pricing" aria-labelledby="annual-pricing-title">
      <div className="container">
        <div className="section-head center annual-pricing-intro">
          <p className="eyebrow"><span className="dot" />Annual packages</p>
          <Heading className="rx-display rx-h2" id="annual-pricing-title">One Core. Your choice of tools.</Heading>
          <p className="rx-lead">Choose one package or combine several. Every package includes Core at no extra charge.</p>
          <p className="annual-billing-note">USD · per program, per year · billed annually. One sport, including its teams.</p>
          <a className="pricing-jump" href="#package-comparison">Compare what each package adds <span aria-hidden="true">↓</span></a>
        </div>

        <div className="pricing-core" id="included">
          <div className="pricing-core-heading">
            <span className="core-mark" aria-hidden="true"><Ico.check width="23" height="23" /></span>
            <div><h2>Core is included with every package.</h2><p>No separate Core fee. One shared roster, calendar, and communication foundation.</p></div>
            <a href="/team-athlete-operations">Explore Core <span aria-hidden="true">↗</span></a>
          </div>
          <ul className="pricing-core-grid">
            {CORE_GROUPS.map((group) => <li key={group.name}><h3>{group.name}</h3><p>{group.detail}</p></li>)}
          </ul>
          <p className="pricing-core-note">Core comes with a paid package and is not sold separately. Turn optional Core tools on as your program needs them.</p>
        </div>

        <div className="package-section-heading"><h2>Choose what your program adds.</h2><p>Independent packages. No tier ladder. Add only the tools you need.</p></div>
        <div className="annual-package-grid">
          {PRODUCT_CATALOG.map((product, index) => (
            <article className="annual-package" key={product.id} aria-labelledby={`package-${product.id}`}>
              <div className="package-topline"><span className="package-number">0{index + 1}</span><span className="core-pill"><Ico.check width="13" height="13" />Core included</span></div>
              <h3 id={`package-${product.id}`}>{product.name}</h3>
              <p className="package-description">{product.description}</p>
              <p className="annual-package-price"><strong>${product.price}</strong><span>/year</span></p>
              <p className="package-billing">Per program · billed annually</p>
              <p className="package-adds-label">Core, plus:</p>
              <ul>{product.features.map((feature) => <li key={feature}><Ico.check width="14" height="14" /><span>{feature}</span></li>)}</ul>
              <p className="package-note">{product.note}</p>
              <div className="package-actions">
                <label className="package-estimate-toggle"><input type="checkbox" checked={selected.includes(product.id)} onChange={() => toggle(product.id)} /><span>Add {product.name} to estimate</span></label>
                <a href={productInquiryHref(product.id)} data-product={product.id} className="btn btn-primary btn-block">Request a demo <span className="sr-only">of {product.name}</span><Ico.arrow width="15" height="15" /></a>
                <a className="package-details-link" href={`/${product.slug}`}>Explore {product.name} <span aria-hidden="true">↗</span></a>
              </div>
            </article>
          ))}
        </div>

        <div className="annual-estimate" aria-label="Package estimate">
          <div><h2>Your annual estimate</h2><p>Package prices add together. Core is included once, with no extra fee.</p></div>
          <div className="estimate-result" role="status" aria-live="polite" aria-atomic="true">
            {selected.length ? <><span>{selected.length} {selected.length === 1 ? "package" : "packages"} · Core included</span><strong>{formatAnnualPrice(total)}</strong><small>{PRODUCT_CATALOG.filter((product) => selected.includes(product.id)).map((product) => product.name).join(" + ")}</small></> : <><strong>Choose your packages</strong><span>Use “Add to estimate” above to see your total.</span></>}
          </div>
          {selected.length > 0 && <a href={inquiry} data-product={selected.length === 1 ? selected[0] : "multiple_products"} className="btn btn-primary">Discuss your packages <Ico.arrow /></a>}
          <p className="estimate-all">All five packages: <strong>{formatAnnualPrice(ALL_PRODUCTS_ANNUAL_PRICE)}</strong>, including Core. List prices shown; no bundle discount assumed.</p>
        </div>

        <section className="package-comparison" id="package-comparison" aria-labelledby="comparison-title">
          <div className="package-section-heading"><h2 id="comparison-title">What each package adds.</h2><p>Every column starts with the same Core. Add another package for its specialist tools.</p></div>
          <div className="mobile-compare-controls">
            {compare.map((id, index) => <label key={index}>Compare package {index + 1}<select value={id} onChange={(event) => setComparison(index, event.target.value)}>{PRODUCT_CATALOG.map((product) => <option value={product.id} key={product.id}>{product.name}</option>)}</select></label>)}
          </div>
          <div className="comparison-scroll" tabIndex={0} role="region" aria-label="Package feature comparison">
            <table className="package-table">
              <caption className="sr-only">Annual package prices, included Core, and additional specialist modules. A dash means that tool requires its own package.</caption>
              <thead><tr><th scope="col">Included tools</th>{PRODUCT_CATALOG.map((product) => <th scope="col" key={product.id} data-mobile-visible={compare.includes(product.id)}>{product.name}<span>{formatAnnualPrice(product.price)}</span><small>per program</small></th>)}</tr></thead>
              <tbody>
                <tr className="comparison-core-row"><th scope="row">Core<small>People, communication, scheduling, Athlete Care, Game Operations, Travel & Meals</small></th>{PRODUCT_CATALOG.map((product) => <td key={product.id} data-mobile-visible={compare.includes(product.id)}><span className="comparison-included"><Ico.check width="16" height="16" />Included</span></td>)}</tr>
                {PRODUCT_CATALOG.map((row) => <tr key={row.id}><th scope="row">{row.comparisonLabel}<small>{row.comparisonDetail}{row.id === "live_game_analytics" ? " · Basketball only" : ""}</small></th>{PRODUCT_CATALOG.map((product) => <td key={product.id} data-mobile-visible={compare.includes(product.id)}>{product.id === row.id ? <span className="comparison-included"><Ico.check width="16" height="16" />Included</span> : <span aria-label={`Requires ${row.name}`} className="comparison-dash">—</span>}</td>)}</tr>)}
              </tbody>
            </table>
          </div>
          <p className="comparison-legend">“Included” = part of that package. “—” = add the corresponding package. Packages do not include one another.</p>
        </section>

        <div className="film-allowance" id="film-allowance">
          <div><p className="eyebrow">Strategy & Film allowance</p><h2>A shared video library. Clear annual limits.</h2><p>One hosted video pool across Film, Playbook, and Practice. Sharing the same upload between them counts it once.</p></div>
          <dl><div><dt>New uploads</dt><dd>10 hours / year</dd></div><div><dt>Stored at once</dt><dd>10 hours</dd></div><div><dt>Delivered playback</dt><dd>10,000 minutes / year</dd></div><div><dt>Video quality</dt><dd>Basic 1080p</dd></div></dl>
          <p className="film-allowance-detail">YouTube and Vimeo links are unlimited and do not use the hosted video allowance. Delivered minutes are total playback across viewers, including repeat viewing. Deleting a video frees stored capacity; it does not reset the annual upload allowance.</p>
        </div>
      </div>
    </section>
  );
}
