export type BenefitStatus = "active" | "inactive" | "pending";

export type BenefitType = "dental" | "vision" | "short-term-disability" | "long-term-disability" | "health" | "life";

export interface Benefit {
  id: string;
  type: BenefitType;
  title: string;
  description: string;
  status: BenefitStatus;
  effectiveStartDate: string;
  effectiveEndDate: string;
  coverageLevel: "individual" | "family";
  fmlaEligible?: boolean;
  details: {
    provider: string;
    policyNumber: string;
    groupNumber?: string;
    coverageDetails: string[];
    contactInfo: {
      phone: string;
      website: string;
      email?: string;
    };
    documents?: {
      name: string;
      url: string;
    }[];
  };
}

// Mock benefits data
export const benefits: Benefit[] = [
  {
    id: "dental-001",
    type: "dental",
    title: "Dental Coverage",
    description: "Comprehensive dental coverage including preventive care, basic procedures, and major procedures.",
    status: "active",
    effectiveStartDate: "2025-01-01",
    effectiveEndDate: "2025-12-31",
    coverageLevel: "family",
    details: {
      provider: "Delta Dental",
      policyNumber: "DEN-12345678",
      groupNumber: "GRP-987654",
      coverageDetails: [
        "100% coverage for preventive care (cleanings, exams, x-rays)",
        "80% coverage for basic procedures (fillings, extractions)",
        "50% coverage for major procedures (crowns, bridges, dentures)",
        "Annual maximum benefit: $2,000 per person",
        "Deductible: $50 individual / $150 family",
        "Orthodontia coverage: 50% up to $1,500 lifetime maximum (for dependents under 19)"
      ],
      contactInfo: {
        phone: "1-800-555-1234",
        website: "https://www.deltadental.com",
        email: "members@deltadental.com"
      },
      documents: [
        {
          name: "Dental Plan Summary",
          url: "/documents/dental-plan-summary.pdf"
        },
        {
          name: "Dental Provider Directory",
          url: "/documents/dental-provider-directory.pdf"
        }
      ]
    }
  },
  {
    id: "vision-001",
    type: "vision",
    title: "Vision Coverage",
    description: "Vision care benefits including eye exams, glasses, and contact lenses.",
    status: "active",
    effectiveStartDate: "2025-01-01",
    effectiveEndDate: "2025-12-31",
    coverageLevel: "family",
    details: {
      provider: "VSP Vision Care",
      policyNumber: "VSN-87654321",
      coverageDetails: [
        "Eye exam: $10 copay, once every 12 months",
        "Prescription glasses: $25 copay",
        "Frames: $150 allowance every 24 months",
        "Lenses: Covered in full every 12 months",
        "Contact lenses (instead of glasses): $150 allowance every 12 months",
        "Laser vision correction: 15% discount"
      ],
      contactInfo: {
        phone: "1-800-555-5678",
        website: "https://www.vsp.com"
      },
      documents: [
        {
          name: "Vision Plan Summary",
          url: "/documents/vision-plan-summary.pdf"
        },
        {
          name: "Vision Provider Directory",
          url: "/documents/vision-provider-directory.pdf"
        }
      ]
    }
  },
  {
    id: "std-001",
    type: "short-term-disability",
    title: "Short-Term Disability",
    description: "Income protection for short-term disabilities lasting up to 26 weeks.",
    status: "active",
    effectiveStartDate: "2025-01-01",
    effectiveEndDate: "2025-12-31",
    coverageLevel: "individual",
    fmlaEligible: true,
    details: {
      provider: "Guardian Life",
      policyNumber: "STD-24681357",
      coverageDetails: [
        "Benefit amount: 60% of weekly earnings",
        "Maximum weekly benefit: $1,500",
        "Elimination period: 7 days for illness, 0 days for injury",
        "Maximum benefit duration: 26 weeks",
        "Pre-existing condition limitation: 3/12 months",
        "FMLA coordination: Runs concurrently with FMLA leave when applicable"
      ],
      contactInfo: {
        phone: "1-800-555-9012",
        website: "https://www.guardianlife.com",
        email: "claims@guardianlife.com"
      },
      documents: [
        {
          name: "Short-Term Disability Plan Summary",
          url: "/documents/std-plan-summary.pdf"
        },
        {
          name: "Disability Claim Form",
          url: "/documents/disability-claim-form.pdf"
        }
      ]
    }
  },
  {
    id: "ltd-001",
    type: "long-term-disability",
    title: "Long-Term Disability",
    description: "Income protection for long-term disabilities lasting beyond 26 weeks.",
    status: "active",
    effectiveStartDate: "2025-01-01",
    effectiveEndDate: "2025-12-31",
    coverageLevel: "individual",
    fmlaEligible: true,
    details: {
      provider: "Guardian Life",
      policyNumber: "LTD-13579246",
      coverageDetails: [
        "Benefit amount: 60% of monthly earnings",
        "Maximum monthly benefit: $6,000",
        "Elimination period: 180 days (after short-term disability ends)",
        "Maximum benefit duration: To age 65 or Social Security Normal Retirement Age",
        "Own occupation period: 24 months",
        "Pre-existing condition limitation: 3/12 months",
        "FMLA coordination: Eligible for FMLA protection during initial disability period"
      ],
      contactInfo: {
        phone: "1-800-555-9012",
        website: "https://www.guardianlife.com",
        email: "claims@guardianlife.com"
      },
      documents: [
        {
          name: "Long-Term Disability Plan Summary",
          url: "/documents/ltd-plan-summary.pdf"
        },
        {
          name: "Disability Claim Form",
          url: "/documents/disability-claim-form.pdf"
        }
      ]
    }
  }
]; 