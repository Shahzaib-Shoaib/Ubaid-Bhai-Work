import { menuType } from "@/types";

export const navLinks: menuType = [
  {
    id: "1",
    name: "About us",
    href: "/about-us",
  },
  {
    id: "2",
    name: "Services",
    href: "/services",
    children: [
      {
        id: "201",
        name: "Finance & Accounting",
        href: "/services/finance-accounting",
        children: [
          {
            id: "20101",
            name: "Financial Reporting",
            href: "/services/finance-accounting/#financial-reporting",
          },
          {
            id: "20102",
            name: "Finance Value Creation",
            href: "/services/finance-accounting/#finance-value-creation",
          },
          {
            id: "20103",
            name: "Technical Accounting Advisory",
            href: "/services/finance-accounting/#technical-accounting-advisory",
          },
          {
            id: "20104",
            name: "Accounting Administration",
            href: "/services/finance-accounting/#accounting-administration",
          },
        ],
      },
      {
        id: "202",
        name: "Corporate Finance Advisory",
        href: "/services/corporate-finance-advisory",
        children: [
          {
            id: "20201",
            name: "Business Valuation",
            href: "/services/corporate-finance-advisory/#business-valuation",
          },
          {
            id: "20202",
            name: "Capital Structuring & Restructuring",
            href: "/services/corporate-finance-advisory/#capital-structuring-restructuring",
          },
          {
            id: "20203",
            name: "Financial Modeling",
            href: "/services/corporate-finance-advisory/#financial-modeling",
          },
          {
            id: "20204",
            name: "M&A Buy-side & Sell-side advisory",
            href: "/services/corporate-finance-advisory/#ma-buy-side-sell-side-advisory",
          },
          {
            id: "20205",
            name: "Startups Fundraising",
            href: "/services/corporate-finance-advisory/#startups-fundraising",
          },
          {
            id: "20206",
            name: "Deal Documentation Support & Coordination",
            href: "/services/corporate-finance-advisory/#deal-documentation-support-coordination",
          },
        ],
      },
      {
        id: "203",
        name: "Tax",
        href: "/services/tax",
        children: [
          {
            id: "20301",
            name: "Value Added Tax",
            href: "/services/tax/#value-added-tax",
          },
          {
            id: "20302",
            name: "Corporate Tax",
            href: "/services/tax/#corporate-tax",
          },
          {
            id: "20303",
            name: "Transfer Pricing Advisory",
            href: "/services/tax/#transfer-pricing-advisory",
          },
          {
            id: "20304",
            name: "Excise Tax",
            href: "/services/tax/#excise-tax",
          },
          {
            id: "20305",
            name: "International Tax",
            href: "/services/tax/#international-tax",
          },
          {
            id: "20306",
            name: "Mergers & Acquisitions Tax planning and due diligence",
            href: "/services/tax/#mergers",
          },
          {
            id: "20307",
            name: "FATCA and CRS Advisory",
            href: "/services/tax/#fatca",
          },
          {
            id: "20308",
            name: "Zakat Advisory",
            href: "/services/tax/#zakat-advisory",
          },
        ],
      },
      {
        id: "204",
        name: "Investment & Family Office Advisory",
        href: "/services/investment-family-office-advisory",
        children: [
          {
            id: "20401",
            name: "Investment & Asset Allocation Advisory",
            href: "/services/investment-family-office-advisory/#investment-asset-allocation-advisory",
          },
          {
            id: "20402",
            name: "Family Office Advisory",
            href: "/services/investment-family-office-advisory/#family-office-advisory",
          },
        ],
      },
      {
        id: "205",
        name: "Risk & Regulatory Advisory",
        href: "/services/risk-regulatory-advisory",
        children: [
          {
            id: "20501",
            name: "Risk & Controls",
            href: "/services/risk-regulatory-advisory/#risk-controls",
          },
          {
            id: "20502",
            name: "Regulatory Compliance",
            href: "/services/risk-regulatory-advisory/#regulatory-compliance",
          },
          {
            id: "20503",
            name: "Forensic Advisory",
            href: "/services/risk-regulatory-advisory/#forensic-advisory",
          },
        ],
      },
      {
        id: "206",
        name: "Management Consulting",
        href: "/services/management-consulting",
        children: [
          {
            id: "20601",
            name: "Business Operations & Transformation Advisory",
            href: "/services/management-consulting/#business-operations-transformation-advisory",
          },
          {
            id: "20602",
            name: "Growth Strategy Advisory",
            href: "/services/management-consulting/#growth-strategy-advisory",
          },
          {
            id: "20603",
            name: "Data Analytics",
            href: "/services/management-consulting/#data-analytics",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    name: "Out Team",
    href: "/our-team",
  },
  {
    id: "4",
    name: "Careers",
    href: "/careers",
  },
];
