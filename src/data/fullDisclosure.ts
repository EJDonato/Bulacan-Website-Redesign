/**
 * Full Disclosure Report documents, 2012 to 2026, copied from bulacan.gov.ph/government/full-disclosure-report/
 * (fetched 2026-11-21). Every `href` is a PDF on the official site; a null `href` means the official page lists the
 * item without a file. Source office: Provincial Administrator's Office. Refresh by re-running the extraction.
 */
export type FdrDoc = { label: string; href: string | null };
export type FdrQuarter = FdrDoc & { q: 1 | 2 | 3 | 4 };
export type FdrGroup = { title: string; docs: FdrQuarter[] };
export type FdrYear = { year: number; annual: FdrDoc[]; quarterly: FdrGroup[]; other: FdrDoc[] };

export const fdrSource = "Provincial Administrator's Office";

export const fdrYears: FdrYear[] = [
  {
    "year": 2026,
    "annual": [
      {
        "label": "Annual Budget",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2026/03/AnnualBudget_2026.pdf"
      },
      {
        "label": "Annual Procurement Plan",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2026/03/APP_2026.pdf"
      },
      {
        "label": "Supplemental Procurement Plan (Preceding Year)",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2026/03/SupplementalProcurementPlan_2025.pdf"
      },
      {
        "label": "Annual GAD Accomplishment Report (Preceding Year)",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2026/03/GAD_2025.pdf"
      }
    ],
    "quarterly": [
      {
        "title": "Quarterly Statement of Cash Flows (QSCF)",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2026",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2026/10/StatementOfCashFlow_1Q2026.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2026",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2026/10/StatementOfCashFlow_2Q2026.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2026",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2026/10/StatementOfCashFlow_3Q2026.pdf"
          }
        ]
      },
      {
        "title": "Trust Fund Utilization (PDAF)",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2026",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2026/10/TrustFundUtilization_1Q2026.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2026",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2026/10/TrustFundUtilization_2Q2026.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2026",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2026/10/TrustFundUtilization_3Q2026.pdf"
          }
        ]
      },
      {
        "title": "Local Disaster Risk Reduction and Management Fund Utilization (LDRRMF)",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2026",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2026/10/LDRRMFU_1Q2026.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2026",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2026/10/LDRRMFU_2Q2026.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2026",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2026/10/LDRRMFU_3Q2026.pdf"
          }
        ]
      },
      {
        "title": "Unliquidated Cash Advances",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2026",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2026/10/UnliquidatedCashAdvances_1Q2026.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2026",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2026/10/UnliquidatedCashAdvances_2Q2026.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2026",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2026/10/UnliquidatedCashAdvances_3Q2026.pdf"
          }
        ]
      },
      {
        "title": "Special Education Fund Utilization (SEF)",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2026",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2026/10/SEF-Utilization_1Q2026.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2026",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2026/10/SEF-Utilization_2Q2026.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2026",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2026/10/SEF-Utilization_3Q2026.pdf"
          }
        ]
      },
      {
        "title": "20% Component of the National Tax Allotment Utilization (NTAU)",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2026",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2026/10/IRA-Utilization_1Q2026.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2026",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2026/10/IRA-Utilization_2Q2026.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2026",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2026/10/IRA-Utilization_3Q2026.pdf"
          }
        ]
      },
      {
        "title": "Human Resource Complement (MANCOM)",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2026",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2026/10/ManpowerComplement_1Q2026.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2026",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2026/10/ManpowerComplement_2Q2026.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2026",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2026/10/ManpowerComplement_3Q2026.pdf"
          }
        ]
      },
      {
        "title": "Bid Results on Civil Works and Goods and Services, and Consulting Services",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2026",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2026/10/BidResult_1Q2026.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2026",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2026/10/BidResult_2Q2026.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2026",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2026/10/BidResult_3Q2026.pdf"
          }
        ]
      },
      {
        "title": "Statement of Receipts and Expenditures (SRE)",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2026",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2026/10/SRE_1Q2026.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2026",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2026/10/SRE_2Q2026.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2026",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2026/10/SRE_3Q2026.pdf"
          }
        ]
      },
      {
        "title": "Statement of Indebtedness, Payments and Balances (SIPB)",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2026",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2026/10/SIPB_1Q2026.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2026",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2026/10/SIPB_2Q2026.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2026",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2026/10/SIPB_3Q2026.pdf"
          }
        ]
      }
    ],
    "other": []
  },
  {
    "year": 2025,
    "annual": [
      {
        "label": "Annual Budget",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2025/05/AnnualBudget_2025.pdf"
      },
      {
        "label": "Annual Procurement Plan",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2025/05/APP_2025.pdf"
      },
      {
        "label": "Supplemental Procurement Plan (Preceding Year)",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2025/05/SupplementalProcurementPlan_2024.pdf"
      },
      {
        "label": "Annual GAD Accomplishment Report (Preceding Year)",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2025/05/GAD_2024.pdf"
      }
    ],
    "quarterly": [
      {
        "title": "Quarterly Statement of Cash Flows (QSCF)",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2025",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2025/05/StatementOfCashFlow_1Q2025.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2025",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2025/07/StatementOfCashFlow_2Q2025.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2025",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2025/10/StatementOfCashFlow_3Q2025.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2025",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2026/03/StatementOfCashFlow_4Q2025.pdf"
          }
        ]
      },
      {
        "title": "Trust Fund Utilization (PDAF)",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2025",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2025/05/TrustFundUtilization_1Q2025.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2025",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2025/07/TrustFundUtilization_2Q2025.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2025",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2025/10/TrustFundUtilization_3Q2025.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2025",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2026/03/TrustFundUtilization_4Q2025.pdf"
          }
        ]
      },
      {
        "title": "Local Disaster Risk Reduction and Management Fund Utilization (LDRRMF)",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2025",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2025/05/LDRRMFU_1Q2025.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2025",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2025/07/LDRRMFU_2Q2025.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2025",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2025/10/LDRRMFU_3Q2025.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2025",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2026/03/LDRRMFU_4Q2025.pdf"
          }
        ]
      },
      {
        "title": "Unliquidated Cash Advances",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2025",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2025/05/UnliquidatedCashAdvances_1Q2025.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2025",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2025/07/UnliquidatedCashAdvances_2Q2025.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2025",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2025/10/UnliquidatedCashAdvances_3Q2025.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2025",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2026/03/UnliquidatedCashAdvances_4Q2025.pdf"
          }
        ]
      },
      {
        "title": "Special Education Fund Utilization (SEF)",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2025",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2025/05/SEF-Utilization_1Q2025.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2025",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2025/07/SEF-Utilization_2Q2025.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2025",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2025/10/SEF-Utilization_3Q2025.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2025",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2026/03/SEF-Utilization_4Q2025.pdf"
          }
        ]
      },
      {
        "title": "20% Component of the National Tax Allotment Utilization (NTAU)",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2025",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2025/05/IRA-Utilization_1Q2025.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2025",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2025/07/IRA-Utilization_2Q2025.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2025",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2025/10/IRA-Utilization_3Q2025.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2025",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2026/03/IRA-Utilization_4Q2025.pdf"
          }
        ]
      },
      {
        "title": "Human Resource Complement (MANCOM)",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2025",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2025/05/ManpowerComplement_1Q2025.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2025",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2025/07/ManpowerComplement_2Q2025.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2025",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2025/10/ManpowerComplement_3Q2025.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2025",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2026/03/ManpowerComplement_4Q2025.pdf"
          }
        ]
      },
      {
        "title": "Bid Results on Civil Works and Goods and Services, and Consulting Services",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2025",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2025/05/BidResult_1Q2025.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2025",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2025/07/BidResult_2Q2025.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2025",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2025/10/BidResult_3Q2025.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2025",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2026/03/BidResult_4Q2025.pdf"
          }
        ]
      },
      {
        "title": "Statement of Receipts and Expenditures (SRE)",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2025",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2025/05/SRE_1Q2025.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2025",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2025/07/SRE_2Q2025.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2025",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2025/10/SRE_3Q2025.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2025",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2026/03/SRE_4Q2025.pdf"
          }
        ]
      },
      {
        "title": "Statement of Indebtedness, Payments and Balances (SIPB)",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2025",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2025/05/SIPB_1Q2025.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2025",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2025/07/SIPB_2Q2025.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2025",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2025/10/SIPB_3Q2025.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2025",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2026/03/SIPB_4Q2025.pdf"
          }
        ]
      }
    ],
    "other": []
  },
  {
    "year": 2024,
    "annual": [
      {
        "label": "Annual Budget",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2024/05/AnnualBudget_2024.pdf"
      },
      {
        "label": "Annual Procurement Plan",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2024/05/APP_2024.pdf"
      },
      {
        "label": "Supplemental Procurement Plan (Preceding Year)",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2024/05/SupplementalProcurementPlan_2023.pdf"
      },
      {
        "label": "Annual GAD Accomplishment Report (Preceding Year)",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2024/05/GAD_2023.pdf"
      }
    ],
    "quarterly": [
      {
        "title": "Quarterly Statement of Cash Flows (QSCF)",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2024",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2024/05/StatementOfCashFlow_1Q2024.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2024",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2024/07/StatementOfCashFlow_2Q2024.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2024",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2024/10/StatementOfCashFlow_3Q2024.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2024",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2025/05/StatementOfCashFlow_4Q2024.pdf"
          }
        ]
      },
      {
        "title": "Trust Fund Utilization (PDAF)",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2024",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2024/05/TrustFundUtilization_1Q2024.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2024",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2024/07/TrustFundUtilization_2Q2024.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2024",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2024/10/TrustFundUtilization_3Q2024.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2024",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2025/05/TrustFundUtilization_4Q2024.pdf"
          }
        ]
      },
      {
        "title": "Local Disaster Risk Reduction and Management Fund Utilization (LDRRMF)",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2024",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2024/05/LDRRMFU_1Q2024.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2024",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2024/07/LDRRMFU_2Q2024.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2024",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2024/10/LDRRMFU_3Q2024.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2024",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2025/05/LDRRMFU_4Q2024.pdf"
          }
        ]
      },
      {
        "title": "Unliquidated Cash Advances",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2024",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2024/05/UnliquidatedCashAdvances_1Q2024.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2024",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2024/07/UnliquidatedCashAdvances_2Q2024.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2024",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2024/10/UnliquidatedCashAdvances_3Q2024.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2024",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2025/05/UnliquidatedCashAdvances_4Q2024.pdf"
          }
        ]
      },
      {
        "title": "Special Education Fund Utilization (SEF)",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2024",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2024/05/SEF-Utilization_1Q2024.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2024",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2024/07/SEF-Utilization_2Q2024.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2024",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2024/10/SEF-Utilization_3Q2024.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2024",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2025/05/SEF-Utilization_4Q2024.pdf"
          }
        ]
      },
      {
        "title": "20% Component of the National Tax Allotment Utilization (NTAU)",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2024",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2024/05/IRA-Utilization_1Q2024.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2024",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2024/07/IRA_Utilization_2Q2024.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2024",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2024/10/NTAU_3Q2024.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2024",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2025/05/NTAU_4Q2024.pdf"
          }
        ]
      },
      {
        "title": "Human Resource Complement (MANCOM)",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2024",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2024/05/ManpowerComplement_1Q2024.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2024",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2024/07/ManpowerComplement_2Q2024.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2024",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2024/10/HRComplement_3Q2024.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2024",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2025/05/HRComplement_4Q2024.pdf"
          }
        ]
      },
      {
        "title": "Bid Results on Civil Works and Goods and Services, and Consulting Services",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2024",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2024/05/BidResult_1Q2024.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2024",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2024/07/BidResult_2Q2024.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2024",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2024/10/BidResult_3Q2024.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2024",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2025/05/BidResult_4Q2024.pdf"
          }
        ]
      },
      {
        "title": "Statement of Receipts and Expenditures (SRE)",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2024",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2024/05/SRE_1Q2024.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2024",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2024/07/SRE_2Q2024.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2024",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2024/10/SRE_3Q2024.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2024",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2025/05/SRE_4Q2024.pdf"
          }
        ]
      },
      {
        "title": "Statement of Indebtedness, Payments and Balances (SIPB)",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2024",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2024/05/SIPB_1Q2024.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2024",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2024/07/SIPB_2Q2024.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2024",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2024/10/SIPB_3Q2024.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2024",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2025/05/SIPB_4Q2024.pdf"
          }
        ]
      }
    ],
    "other": []
  },
  {
    "year": 2023,
    "annual": [
      {
        "label": "Annual Budget",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2023/07/AnnualBudget_2023.pdf"
      },
      {
        "label": "Annual Procurement Plan",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2023/07/APP_2023.pdf"
      },
      {
        "label": "Supplemental Procurement Plan (Preceding Year)",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2023/07/SupplementalProcurementPlan_2022.pdf"
      },
      {
        "label": "Annual GAD Accomplishment Report (Preceding Year)",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2023/07/GAD_2022.pdf"
      }
    ],
    "quarterly": [
      {
        "title": "Quarterly Statement of Cash Flows (QSCF)",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2023",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2023/07/StatementOfCashFlow_1Q2023.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2023",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2023/08/StatementOfCashFlow_2Q2023.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2023",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2023/10/StatementOfCashFlow_3Q2023.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2023",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2024/05/StatementOfCashFlow_4Q2023.pdf"
          }
        ]
      },
      {
        "title": "Trust Fund Utilization (PDAF)",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2023",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2023/07/TrustFundUtilization_1Q2023.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2023",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2023/08/TrustFundUtilization_2Q2023.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2023",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2023/10/TrustFundUtilization_3Q2023.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2023",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2024/05/TrustFundUtilization_4Q2023.pdf"
          }
        ]
      },
      {
        "title": "Local Disaster Risk Reduction and Management Fund Utilization (LDRRMF)",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2023",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2023/07/LDRRMFU_1Q2023.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2023",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2023/08/LDRRMFU_2Q2023.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2023",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2023/10/LDRRMFU_3Q2023.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2023",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2024/05/LDRRMFU_4Q2023.pdf"
          }
        ]
      },
      {
        "title": "Unliquidated Cash Advances",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2023",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2023/07/UnliquidatedCashAdvances_1Q2023.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2023",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2023/08/UnliquidatedCashAdvances_2Q2023.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2023",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2023/10/UnliquidatedCashAdvances_3Q2023.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2023",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2024/05/UnliquidatedCashAdvances_4Q2023.pdf"
          }
        ]
      },
      {
        "title": "Special Education Fund Utilization",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2023",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2023/07/SEF-Utilization_1Q2023.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2023",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2023/08/SEF-Utilization_2Q2023.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2023",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2023/10/SEF-Utilization_3Q2023.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2023",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2024/05/SEF-Utilization_4Q2023.pdf"
          }
        ]
      },
      {
        "title": "20% Component of the National Tax Allotment Utilization (NTAU)",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2023",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2023/07/IRA-Utilization_1Q2023.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2023",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2023/08/IRA_Utilization_2Q2023.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2023",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2023/10/NTAU_3Q2023.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2023",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2024/05/NTAU_4Q2023.pdf"
          }
        ]
      },
      {
        "title": "Human Resource Complement",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2023",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2023/07/ManpowerComplement_1Q2023.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2023",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2023/08/ManpowerComplement_2Q2023.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2023",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2023/10/HRComplement_3Q2023.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2023",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2024/05/HRComplement_4Q2023.pdf"
          }
        ]
      },
      {
        "title": "Bid Results on Civil Works and Goods and Services, and Consulting Services",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2023",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2023/07/BidResult_1Q2023.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2023",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2023/08/BidResult_2Q2023.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2023",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2023/10/BidResult_3Q2023.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2023",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2024/05/BidResult_4Q2023.pdf"
          }
        ]
      },
      {
        "title": "Statement of Receipts and Expenditures",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2023",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2023/07/SRE_1Q2023.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2023",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2023/08/SRE_2Q2023.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2023",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2023/10/SRE_3Q2023.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2023",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2024/05/SRE_4Q2023.pdf"
          }
        ]
      },
      {
        "title": "Statement of Indebtedness, Payments and Balances",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2023",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2023/07/SIPB_1Q2023.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2023",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2023/08/SIPB_2Q2023.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2023",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2023/10/SIPB_3Q2023.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2023",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2024/05/SIPB_4Q2023.pdf"
          }
        ]
      }
    ],
    "other": []
  },
  {
    "year": 2022,
    "annual": [
      {
        "label": "Annual Budget Report",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/05/AnnualBudget_2022.pdf"
      },
      {
        "label": "Annual Procurement Plan or Procurement Plan List",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/05/APP_2022.pdf"
      },
      {
        "label": "Supplemental Procurement Plan (Previous Year)",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/05/SupplementalProcurementPlan_2021.pdf"
      },
      {
        "label": "Statement of Indebtedness, Payment and Balances (immediately preceding year)",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/05/SIPB_2021.pdf"
      },
      {
        "label": "Annual GAD Accomplishment Report",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/05/GAD_2021.pdf"
      },
      {
        "label": "Statement of Receipts and Expenditures of the previous year",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/05/SRE_2021.pdf"
      }
    ],
    "quarterly": [
      {
        "title": "Quarterly Statement of Cash Flows",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2022",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/05/StatementOfCashFlow_1Q2022.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2022",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/10/StatementOfCashFlow_2Q2022.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2022",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/10/StatementOfCashFlow_3Q2022.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2022",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2023/02/StatementOfCashFlow_4Q2022.pdf"
          }
        ]
      },
      {
        "title": "Trust Fund (PDAF) Utilization",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2022",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/05/TrustFundUtilization_1Q2022.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2022",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/10/TrustFundUtilization_2Q2022.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2022",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/10/TrustFundUtilization_3Q2022.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2022",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2023/02/TrustFundUtilization_4Q2022.pdf"
          }
        ]
      },
      {
        "title": "Report of Local Disaster Risk Reduction and Management Fund (LDRRMF Utilization)",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2022",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/05/LDRRMFU_1Q2022.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2022",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/10/LDRRMFU_2Q2022.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2022",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/10/LDRRMFU_3Q2022.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2022",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2023/02/LDRRMFU_4Q2022.pdf"
          }
        ]
      },
      {
        "title": "Unliquidated Cash Advances",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2022",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/05/UnliquidatedCashAdvances_1Q2022.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2022",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/10/UnliquidatedCashAdvances_2Q2022.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2022",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/10/UnliquidatedCashAdvances_3Q2022.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2022",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2023/02/UnliquidatedCashAdvances_4Q2022.pdf"
          }
        ]
      },
      {
        "title": "Report of SEF Utilization",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2022",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/05/SEF-Utilization_1Q2022.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2022",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/10/SEF-Utilization_2Q2022.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2022",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/10/SEF-Utilization_3Q2022.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2022",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2023/02/SEF-Utilization_4Q2022.pdf"
          }
        ]
      },
      {
        "title": "20% Component of the IRA Utilization",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2022",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/05/IRA-Utilization_1Q2022.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2022",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/10/IRA-Utilization_2Q2022.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2022",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/10/IRA-Utilization_3Q2022.pdf"
          }
        ]
      },
      {
        "title": "Manpower Complement",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2022",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/05/ManpowerComplement_1Q2022.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2022",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/10/ManpowerComplement_2Q2022.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2022",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/10/ManpowerComplement_3Q2022.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2022",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2023/02/ManpowerComplement_4Q2022.pdf"
          }
        ]
      },
      {
        "title": "Bid Results on Civil Works and Goods and Services, and Consulting Services",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2022",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/05/BidResult_1Q2022.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2022",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/10/BidResult_2Q2022.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2022",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/10/BidResult_3Q2022.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2022",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2023/02/BidResult_4Q2022.pdf"
          }
        ]
      },
      {
        "title": "Local Government Support Fund",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2022",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2023/02/LGSF_1Q2022.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2022",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2023/02/LGSF_2Q2022.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2022",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2023/02/LGSF_3Q2022.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2022",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2023/02/LGSF_4Q2022.pdf"
          }
        ]
      }
    ],
    "other": []
  },
  {
    "year": 2021,
    "annual": [
      {
        "label": "Annual Budget Report",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2021/11/AnnualBudget_2021.pdf"
      },
      {
        "label": "Annual Procurement Plan or Procurement Plan List",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2021/11/APP_2021.pdf"
      },
      {
        "label": "Supplemental Procurement Plan (Previous Year)",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2021/11/SupplementalProcurementPlan_2020.pdf"
      },
      {
        "label": "Statement of Indebtedness, Payment and Balances (immediately preceding year)",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2021/11/StatementOfDebtService_2020.pdf"
      },
      {
        "label": "Annual GAD Accomplishment Report",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2021/11/GAD_2021.pdf"
      },
      {
        "label": "Statement of Receipts and Expenditures of the previous year",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2021/11/StatementOfReceiptsAndExpenditures_PreviousYear.pdf"
      }
    ],
    "quarterly": [
      {
        "title": "Quarterly Statement of Cash Flows",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2021",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2021/11/StatementOfCashFlow_1Q2021.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2021",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2021/11/StatementOfCashFlow_2Q2021.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2021",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2021/11/StatementOfCashFlow_3Q2021.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2021",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/02/StatementOfCashFlow_4Q2021.pdf"
          }
        ]
      },
      {
        "title": "Trust Fund (PDAF) Utilization",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2021",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2021/11/TrustFundUtilization_1Q2021.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2021",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2021/11/TrustFundUtilization_2Q2021.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2021",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2021/11/TrustFundUtilization_3Q2021.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2021",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/02/TrustFundUtilization_4Q2021.pdf"
          }
        ]
      },
      {
        "title": "Report of Local Disaster Risk Reduction and Management Fund (LDRRMF Utilization)",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2021",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2021/11/LDRRMFU_1Q2021.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2021",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2021/11/LDRRMFU_2Q2021.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2021",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2021/11/LDRRMFU_3Q2021.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2021",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/02/LDRRMFU_4Q2021.pdf"
          }
        ]
      },
      {
        "title": "Unliquidated Cash Advances",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2021",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2021/11/UnliquidatedCashAdvances_1Q2021.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2021",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2021/11/UnliquidatedCashAdvances_2Q2021.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2021",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2021/11/UnliquidatedCashAdvances_3Q2021.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2021",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/02/UnliquidatedCashAdvances_4Q2021.pdf"
          }
        ]
      },
      {
        "title": "Report of SEF Utilization",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2021",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2021/11/SEF-Utilization_1Q2021.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2021",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2021/11/SEF-Utilization_2Q2021.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2021",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2021/11/SEF-Utilization_3Q2021.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2021",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/02/SEF-Utilization_4Q2021.pdf"
          }
        ]
      },
      {
        "title": "20% Component of the IRA Utilization",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2021",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2021/11/IRA-Utilization_1Q2021.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2021",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2021/11/IRA-Utilization_2Q2021.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2021",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2021/11/IRA-Utilization_3Q2021.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2021",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/02/IRA-Utilization_4Q2021.pdf"
          }
        ]
      },
      {
        "title": "Manpower Complement",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2021",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2021/11/ManpowerComplement_1Q2021.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2021",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2021/11/ManpowerComplement_2Q2021.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2021",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2021/11/ManpowerComplement_3Q2021.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2021",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/02/ManpowerComplement_4Q2021.pdf"
          }
        ]
      },
      {
        "title": "Bid Results on Civil Works and Goods and Services, and Consulting Services",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2021",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2021/11/BidResult_1Q2021.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2021",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2021/11/BidResult_2Q2021.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2021",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2021/11/BidResult_3Q2021.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2021",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/02/BidResult_4Q2021.pdf"
          }
        ]
      }
    ],
    "other": []
  },
  {
    "year": 2020,
    "annual": [
      {
        "label": "Annual Budget Report",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/03/AnnualBudget_2020.pdf"
      },
      {
        "label": "Annual Procurement Plan or Procurement Plan List",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/03/APP_2020.pdf"
      },
      {
        "label": "Supplemental Procurement Plan (Previous Year)",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/03/SupplementalProcurementPlan_2019.pdf"
      },
      {
        "label": "Statement of Indebtedness, Payment and Balances (immediately preceding year)",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/03/StatementOfDebtService_2019.pdf"
      },
      {
        "label": "Annual GAD Accomplishment Report",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/03/GAD_2020.pdf"
      },
      {
        "label": "Statement of Receipts and Expenditures of the previous year",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/SRE_2019.pdf"
      }
    ],
    "quarterly": [
      {
        "title": "Quarterly Statement of Cash Flows",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2020",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/03/StatementOfCashFlow_1Q2020.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2020",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/03/StatementOfCashFlow_2Q2020.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2020",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/03/StatementOfCashFlow_3Q2020.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2020",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/03/StatementOfCashFlow_4Q2020.pdf"
          }
        ]
      },
      {
        "title": "Trust Fund (PDAF) Utilization",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2020",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/03/TrustFundUtilization_1Q2020.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2020",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/03/TrustFundUtilization_2Q2020.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2020",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/03/TrustFundUtilization_3Q2020.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2020",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/03/TrustFundUtilization_4Q2020.pdf"
          }
        ]
      },
      {
        "title": "Report of Local Disaster Risk Reduction and Management Fund (LDRRMF Utilization)",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2020",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/03/LDRRMFU_1Q2020.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2020",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/03/LDRRMFU_2Q2020.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2020",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/03/LDRRMFU_3Q2020.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2020",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/03/LDRRMFU_4Q2020.pdf"
          }
        ]
      },
      {
        "title": "Unliquidated Cash Advances",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2020",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/03/UnliquidatedCashAdvances_1Q2020.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2020",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/03/UnliquidatedCashAdvances_2Q2020.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2020",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/03/UnliquidatedCashAdvances_3Q2020.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2020",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/03/UnliquidatedCashAdvances_4Q2020.pdf"
          }
        ]
      },
      {
        "title": "Report of SEF Utilization",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2020",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/03/SEF-Utilization_1Q2020.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2020",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/03/SEF-Utilization_2Q2020.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2020",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/03/SEF-Utilization_3Q2020.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2020",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/03/SEF-Utilization_4Q2020.pdf"
          }
        ]
      },
      {
        "title": "20% Component of the IRA Utilization",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2020",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/03/IRA-Utilization_1Q2020.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2020",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/03/IRA-Utilization_2Q2020.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2020",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/03/IRA-Utilization_3Q2020.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2020",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/03/IRA-Utilization_4Q2020.pdf"
          }
        ]
      },
      {
        "title": "Manpower Complement",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2020",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/03/IRA-Utilization_1Q2020.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2020",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/03/IRA-Utilization_2Q2020.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2020",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/03/IRA-Utilization_3Q2020.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2020",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/03/IRA-Utilization_4Q2020.pdf"
          }
        ]
      },
      {
        "title": "Bid Results on Civil Works and Goods and Services, and Consulting Services",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2020",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/03/BidResult_1Q2020.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2020",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/03/BidResult_2Q2020.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2020",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/03/BidResult_3Q2020.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2020",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/03/BidResult_4Q2020.pdf"
          }
        ]
      }
    ],
    "other": []
  },
  {
    "year": 2019,
    "annual": [
      {
        "label": "Annual Budget Report",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/03/AnnualBudget_2019.pdf"
      },
      {
        "label": "Annual Procurement Plan or Procurement Plan List",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/03/APP_2019.pdf"
      },
      {
        "label": "Statement of Debt Service",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/03/StatementOfDebtService_2019-1.pdf"
      },
      {
        "label": "Annual GAD Accomplishment Report",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/03/GAD_2019.pdf"
      },
      {
        "label": "Statement of Receipts and Expenditures of the previous year",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/SRE_2018.pdf"
      }
    ],
    "quarterly": [
      {
        "title": "Quarterly Statement of Cash Flows",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2019",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/StatementOfCashFlow_1Q2019.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2019",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/StatementOfCashFlow_2Q2019.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2019",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/StatementOfCashFlow_3Q2019.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2019",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/StatementOfCashFlow_4Q2019.pdf"
          }
        ]
      },
      {
        "title": "Trust Fund (PDAF) Utilization",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2019",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/TrustFundUtilization_1Q2019.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2019",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/TrustFundUtilization_2Q2019.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2019",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/TrustFundUtilization_3Q2019.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2019",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/TrustFundUtilization_4Q2019.pdf"
          }
        ]
      },
      {
        "title": "Report of Local Disaster Risk Reduction and Management Fund (LDRRMF Utilization)",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2019",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/LDRRMFU_1Q2019.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2019",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/LDRRMFU_2Q2019.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2019",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/LDRRMFU_3Q2019.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2019",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/LDRRMFU_4Q2019.pdf"
          }
        ]
      },
      {
        "title": "Unliquidated Cash Advances",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2019",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/UnliquidatedCashAdvances_1Q2019.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2019",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/UnliquidatedCashAdvances_2Q2019.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2019",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/UnliquidatedCashAdvances_3Q2019.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2019",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/UnliquidatedCashAdvances_4Q2019.pdf"
          }
        ]
      },
      {
        "title": "Report of SEF Utilization",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2019",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/SEF-Utilization_1Q2019.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2019",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/SEF-Utilization_2Q2019.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2019",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/SEF-Utilization_3Q2019.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2019",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/SEF-Utilization_4Q2019.pdf"
          }
        ]
      },
      {
        "title": "20% Component of the IRA Utilization",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2019",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/IRA-Utilization_1Q2019.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2019",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/IRA-Utilization_2Q2019.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2019",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/IRA-Utilization_3Q2019.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2019",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/IRA-Utilization_4Q2019.pdf"
          }
        ]
      },
      {
        "title": "Manpower Complement",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2019",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/ManpowerComplement_1Q2019.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2019",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/ManpowerComplement_2Q2019.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2019",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/ManpowerComplement_3Q2019.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2019",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/ManpowerComplement_4Q2019.pdf"
          }
        ]
      },
      {
        "title": "Bid Results on Civil Works and Goods and Services, and Consulting Services",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2019",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/BidResult_1Q2019.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2019",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/BidResult_2Q2019.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2019",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/BidResult_3Q2019.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2019",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/BidResult_4Q2019.pdf"
          }
        ]
      },
      {
        "title": "Supplemental Procurement Plan",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2019",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/SupplementalProcurementPlan_1Q2019.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2019",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/SupplementalProcurementPlan_2Q2019.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2019",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/SupplementalProcurementPlan_3Q2019.pdf"
          }
        ]
      }
    ],
    "other": []
  },
  {
    "year": 2018,
    "annual": [
      {
        "label": "Annual Budget Report",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/03/AnnualBudget_2018.pdf"
      },
      {
        "label": "Annual Procurement Plan or Procurement Plan List",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/03/APP_2018.pdf"
      },
      {
        "label": "Statement of Debt Service",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/03/StatementOfDebtService_2018.pdf"
      },
      {
        "label": "Annual GAD Accomplishment Report",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/03/GAD_2018.pdf"
      },
      {
        "label": "Statement of Receipts and Expenditures of the previous year",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/SRE_2017.pdf"
      }
    ],
    "quarterly": [
      {
        "title": "Quarterly Statement of Cash Flows",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2018",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/StatementOfCashFlow_1Q2018.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2018",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/StatementOfCashFlow_2Q2018.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2018",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/StatementOfCashFlow_3Q2018.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2018",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/StatementOfCashFlow_4Q2018.pdf"
          }
        ]
      },
      {
        "title": "Trust Fund (PDAF) Utilization",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2018",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/TrustFundUtilization_1Q2018.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2018",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/TrustFundUtilization_2Q2018.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2018",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/TrustFundUtilization_3Q2018.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2018",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/TrustFundUtilization_4Q2018.pdf"
          }
        ]
      },
      {
        "title": "Report of Local Disaster Risk Reduction and Management Fund (LDRRMF Utilization)",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2018",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/LDRRMFU_1Q2018.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2018",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/LDRRMFU_2Q2018.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2018",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/LDRRMFU_3Q2018.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2018",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/LDRRMFU_4Q2018.pdf"
          }
        ]
      },
      {
        "title": "Unliquidated Cash Advances",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2018",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/UnliquidatedCashAdvances_1Q2018.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2018",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/UnliquidatedCashAdvances_2Q2018.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2018",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/UnliquidatedCashAdvances_3Q2018.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2018",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/UnliquidatedCashAdvances_4Q2018.pdf"
          }
        ]
      },
      {
        "title": "Report of SEF Utilization",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2018",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/SEF-Utilization_1Q2018.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2018",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/SEF-Utilization_2Q2018.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2018",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/SEF-Utilization_3Q2018.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2018",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/SEF-Utilization_4Q2018.pdf"
          }
        ]
      },
      {
        "title": "20% Component of the IRA Utilization",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2018",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/IRA-Utilization_1Q2018.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2018",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/IRA-Utilization_2Q2018.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2018",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/IRA-Utilization_3Q2018.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2018",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/IRA-Utilization_4Q2018.pdf"
          }
        ]
      },
      {
        "title": "Manpower Complement",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2018",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/ManpowerComplement_1Q2018.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2018",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/ManpowerComplement_2Q2018.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2018",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/ManpowerComplement_3Q2018.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2018",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/ManpowerComplement_4Q2018.pdf"
          }
        ]
      },
      {
        "title": "Bid Results on Civil Works and Goods and Services, and Consulting Services",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2018",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/BidResult_1Q2018.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2018",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/BidResult_2Q2018.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2018",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/BidResult_3Q2018.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2018",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/06/BidResult_4Q2018.pdf"
          }
        ]
      }
    ],
    "other": []
  },
  {
    "year": 2017,
    "annual": [
      {
        "label": "Annual Budget Report",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/AnnualBudget_2017.pdf"
      },
      {
        "label": "Annual Procurement Plan or Procurement Plan List",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/APP_2017.pdf"
      },
      {
        "label": "Statement of Indebtedness, Payment and Balances (immediately preceding year)",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/StatementOfDebtService_2017.pdf"
      },
      {
        "label": "Annual GAD Accomplishment Report",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/GAD_2016.pdf"
      },
      {
        "label": "Statement of Receipts and Expenditures of the previous year",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/StatementOfReceiptsAndExpenditures_PreviousYear.pdf"
      }
    ],
    "quarterly": [
      {
        "title": "Quarterly Statement of Cash Flows",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2017",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/StatementOfCashFlow_1Q2017.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2017",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/StatementOfCashFlow_2Q2017.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2017",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/StatementOfCashFlow_3Q2017.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2017",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/StatementOfCashFlow_4Q2017.pdf"
          }
        ]
      },
      {
        "title": "Trust Fund (PDAF) Utilization",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2017",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/TrustFundUtilization_1Q2017.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2017",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/TrustFundUtilization_2Q2017.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2017",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/TrustFundUtilization_3Q2017.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2017",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/TrustFundUtilization_4Q2017.pdf"
          }
        ]
      },
      {
        "title": "Report of Local Disaster Risk Reduction and Management Fund (LDRRMF Utilization)",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2017",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/LDRRMFU_1Q2017.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2017",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/LDRRMFU_2Q2017.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2017",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/LDRRMFU_3Q2017.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2017",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/LDRRMFU_4Q2017.pdf"
          }
        ]
      },
      {
        "title": "Unliquidated Cash Advances",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2017",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/UnliquidatedCashAdvances_1Q2017.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2017",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/UnliquidatedCashAdvances_2Q2017.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2017",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/UnliquidatedCashAdvances_3Q2017.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2017",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/UnliquidatedCashAdvances_4Q2017.pdf"
          }
        ]
      },
      {
        "title": "Report of SEF Utilization",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2017",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/SEF-Utilization_1Q2017.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2017",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/SEF-Utilization_2Q2017.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2017",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/SEF-Utilization_3Q2017.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2017",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/SEF-Utilization_4Q2017.pdf"
          }
        ]
      },
      {
        "title": "20% Component of the IRA Utilization",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2017",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/IRA-Utilization_1Q2017.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2017",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/IRA-Utilization_2Q2017.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2017",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/IRA-Utilization_3Q2017.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2017",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/IRA-Utilization_4Q2017.pdf"
          }
        ]
      },
      {
        "title": "Manpower Complement",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2017",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/ManpowerComplement_1Q2017.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2017",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/ManpowerComplement_2Q2017.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2017",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/ManpowerComplement_3Q2017.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2017",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/ManpowerComplement_4Q2017.pdf"
          }
        ]
      },
      {
        "title": "Bid Results on Civil Works and Goods and Services, and Consulting Services",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2017",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/BidResult_1Q2017.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2017",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/BidResult_2Q2017.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2017",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/BidResult_3Q2017.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2017",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/BidResult_4Q2017.pdf"
          }
        ]
      }
    ],
    "other": []
  },
  {
    "year": 2016,
    "annual": [
      {
        "label": "Annual Budget Report",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/AnnualBudget_2016.pdf"
      },
      {
        "label": "Annual Procurement Plan or Procurement Plan List",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/APP_2016.pdf"
      },
      {
        "label": "Statement of Indebtedness, Payment and Balances (immediately preceding year)",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/StatementOfDebtService_2016.pdf"
      },
      {
        "label": "Annual GAD Accomplishment Report",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/GAD_2015.pdf"
      },
      {
        "label": "Statement of Receipts and Expenditures of the previous year",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/StatementOfReceiptsAndExpenditures_PreviousYear-1.pdf"
      }
    ],
    "quarterly": [
      {
        "title": "Quarterly Statement of Cash Flows",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2016",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/StatementOfCashFlow_1Q2016.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2016",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/StatementOfCashFlow_2Q2016.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2016",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/StatementOfCashFlow_3Q2016.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2016",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/StatementOfCashFlow_4Q2016.pdf"
          }
        ]
      },
      {
        "title": "Trust Fund (PDAF) Utilization",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2016",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/TrustFundUtilization_1Q2016.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2016",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/TrustFundUtilization_2Q2016.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2016",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/TrustFundUtilization_3Q2016.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2016",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/TrustFundUtilization_4Q2016.pdf"
          }
        ]
      },
      {
        "title": "Report of Local Disaster Risk Reduction and Management Fund (LDRRMF Utilization)",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2016",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/LDRRMFU_1Q2016.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2016",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/LDRRMFU_2Q2016.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2016",
            "href": "https://bulacan.gov.ph/government/disclosure/fdr/2016/LDRRMF_utilization/LDRRMFU_3Q2016.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2016",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/LDRRMFU_4Q2016.pdf"
          }
        ]
      },
      {
        "title": "Unliquidated Cash Advances",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2016",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/UnliquidatedCashAdvances_1Q2016.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2016",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/UnliquidatedCashAdvances_2Q2016.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2016",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/UnliquidatedCashAdvances_3Q2016.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2016",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/UnliquidatedCashAdvances_4Q2016.pdf"
          }
        ]
      },
      {
        "title": "Report of SEF Utilization",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2016",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/SEF-Utilization_1Q2016.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2016",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/SEF-Utilization_2Q2016.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2016",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/SEF-Utilization_3Q2016.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2016",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/SEF-Utilization_4Q2016.pdf"
          }
        ]
      },
      {
        "title": "20% Component of the IRA Utilization",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2016",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/IRA-Utilization_1Q2016.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2016",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/IRA-Utilization_2Q2016.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2016",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/IRA-Utilization_3Q2016.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2016",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/IRA-Utilization_4Q2016.pdf"
          }
        ]
      },
      {
        "title": "Manpower Complement",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2016",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/ManpowerComplement_1Q2016.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2016",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/ManpowerComplement_2Q2016.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2016",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/ManpowerComplement_3Q2016.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2016",
            "href": "https://bulacan.gov.ph/government/disclosure/fdr/2016/manpowercomplement/ManpowerComplement_4Q2016.pdf"
          }
        ]
      },
      {
        "title": "Bid Results on Civil Works and Goods and Services, and Consulting Services",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2016",
            "href": "https://bulacan.gov.ph/government/disclosure/fdr/2016/bidresult/BidResult_1Q2016.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2016",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/BidResult_2Q2016.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2016",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/BidResult_3Q2016.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2016",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/BidResult_4Q2016.pdf"
          }
        ]
      }
    ],
    "other": []
  },
  {
    "year": 2015,
    "annual": [
      {
        "label": "Annual Budget Report",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/AnnualBudget_2015.pdf"
      },
      {
        "label": "Annual Procurement Plan or Procurement Plan List",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/APP_2015.pdf"
      },
      {
        "label": "Statement of Indebtedness, Payment and Balances (immediately preceding year)",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/StatementOfDebtService_2015.pdf"
      },
      {
        "label": "Annual GAD Accomplishment Report",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/GAD_2014.pdf"
      },
      {
        "label": "Statement of Receipts and Expenditures of the previous year",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/SRE_2014.pdf"
      }
    ],
    "quarterly": [
      {
        "title": "Quarterly Statement of Cash Flows",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2015",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/StatementOfCashFlow_1Q2015.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2015",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/StatementOfCashFlow_2Q2015.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2015",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/StatementOfCashFlow_3Q2015.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2015",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/StatementOfCashFlow_4Q2015.pdf"
          }
        ]
      },
      {
        "title": "Trust Fund (PDAF) Utilization",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2015",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/TrustFundUtilization_1Q2015.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2015",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/TrustFundUtilization_2Q2015.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2015",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/TrustFundUtilization_3Q2015.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2015",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/TrustFundUtilization_4Q2015.pdf"
          }
        ]
      },
      {
        "title": "Report of Local Disaster Risk Reduction and Management Fund (LDRRMF Utilization)",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2015",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/LDRRMFU_1Q2015.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2015",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/LDRRMFU_2Q2015.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2015",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/LDRRMFU_3Q2015.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2015",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/LDRRMFU_4Q2015.pdf"
          }
        ]
      },
      {
        "title": "Unliquidated Cash Advances",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2015",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/UnliquidatedCashAdvances_1Q2015.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2015",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/UnliquidatedCashAdvances_2Q2015.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2015",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/UnliquidatedCashAdvances_3Q2015.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2015",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/UnliquidatedCashAdvances_4Q2015.pdf"
          }
        ]
      },
      {
        "title": "Report of SEF Utilization",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2015",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/SEF-Uilization_1Q2015.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2015",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/SEF-Uilization_2Q2015.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2015",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/SEF-Uilization_3Q2015.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2015",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/SEF-Uilization_4Q2015.pdf"
          }
        ]
      },
      {
        "title": "20% Component of the IRA Utilization",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2015",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/IRA-Utilization_1Q2015.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2015",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/IRA-Utilization_2Q2015.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2015",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/IRA-Utilization_3Q2015.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2015",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/IRA-Utilization_4Q2015.pdf"
          }
        ]
      },
      {
        "title": "Manpower Complement",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2015",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/ManpowerComplement_1Q2015.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2015",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/ManpowerComplement_2Q2015.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2015",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/ManpowerComplement_3Q2015.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2015",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/ManpowerComplement_4Q2015.pdf"
          }
        ]
      },
      {
        "title": "Bid Results on Civil Works and Goods and Services, and Consulting Services",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2015",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/BidResult_1Q2015.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2015",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/BidResult_2Q2015.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2015",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/BidResult_3Q2015.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2015",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/BidResult_4Q2015.pdf"
          }
        ]
      }
    ],
    "other": []
  },
  {
    "year": 2014,
    "annual": [
      {
        "label": "Annual Budget Report",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/AnnualBuget_2014.pdf"
      },
      {
        "label": "Annual Procurement Plan or Procurement Plan List",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/APP_2014.pdf"
      },
      {
        "label": "Statement of Indebtedness, Payment and Balances (immediately preceding year)",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/StatementOfDebtService2014.pdf"
      },
      {
        "label": "Annual GAD Accomplishment Report",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/GAD_2013.pdf"
      },
      {
        "label": "Statement of Receipts and Expenditures of the previous year",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/SRE_2013.pdf"
      }
    ],
    "quarterly": [
      {
        "title": "Quarterly Statement of Cash Flows",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2014",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/StatementOfCashFlow_1Q2014.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2014",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/StatementOfCashFlow_2Q2014.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2014",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/StatementOfCashFlow_3Q2014.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2014",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/StatementOfCashFlow_4Q2014.pdf"
          }
        ]
      },
      {
        "title": "Trust Fund (PDAF) Utilization",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2014",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/TrustFundUtilization_1Q2014.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2014",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/TrustFundUtilization_2Q2014.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2014",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/TrustFundUtilization_3Q2014.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2014",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/TrustFundUtilization_4Q2014.pdf"
          }
        ]
      },
      {
        "title": "Report of Local Disaster Risk Reduction and Management Fund (LDRRMF Utilization)",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2014",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/LDRRMFU_1Q2014.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2014",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/LDRRMFU_2Q2014.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2014",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/LDRRMFU_3Q2014.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2014",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/LDRRMFU_4Q2014.pdf"
          }
        ]
      },
      {
        "title": "Unliquidated Cash Advances",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2014",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/UnliquidatedCashAdvances_1Q2014.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2014",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/UnliquidatedCashAdvances_2Q2014.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2014",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/UnliquidatedCashAdvances_3Q2014.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2014",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/UnliquidatedCashAdvances_4Q2014.pdf"
          }
        ]
      },
      {
        "title": "Report of SEF Utilization",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2014",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/SEF-Uilization_1Q2014.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2014",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/SEF-Uilization_2Q2014.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2014",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/SEF-Uilization_3Q2014.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2014",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/SEF-Uilization_4Q2014.pdf"
          }
        ]
      },
      {
        "title": "20% Component of the IRA Utilization",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2014",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/IRA-Utilization_1Q2014.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2014",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/IRA-Utilization_2Q2014.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2014",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/IRA-Utilization_3Q2014.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2014",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/IRA-Utilization_4Q2014.pdf"
          }
        ]
      },
      {
        "title": "Manpower Complement",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2014",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/ManpowerComplement_1Q2014.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2014",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/ManpowerComplement_2Q2014.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2014",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/ManpowerComplement_3Q2014.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2014",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/ManpowerComplement_4Q2014.pdf"
          }
        ]
      },
      {
        "title": "Bid Results on Civil Works and Goods and Services, and Consulting Services",
        "docs": [
          {
            "q": 1,
            "label": "First Quarter of 2014",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/BidResult_1Q2014.pdf"
          },
          {
            "q": 2,
            "label": "Second Quarter of 2014",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/BidResult_2Q2014.pdf"
          },
          {
            "q": 3,
            "label": "Third Quarter of 2014",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/BidResult_3Q2014.pdf"
          },
          {
            "q": 4,
            "label": "Fourth Quarter of 2014",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/BidResult_4Q2014.pdf"
          }
        ]
      }
    ],
    "other": []
  },
  {
    "year": 2013,
    "annual": [
      {
        "label": "Annual Budget Report",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/AnnualBudget_2013.pdf"
      },
      {
        "label": "SEF Income and Expenditure Estimates",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/SEF_2013.pdf"
      },
      {
        "label": "Annual Procurement Plan or Procurement Plan List",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/APP_2013.pdf"
      },
      {
        "label": "Statement of Debt Services",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/StatementOfDebtService2013.pdf"
      },
      {
        "label": "Annual GAD Accomplishment Report",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/GAD_2012.pdf"
      },
      {
        "label": "Statement of Receipts and Expenditures of the previous year",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/SRE_2012.pdf"
      }
    ],
    "quarterly": [
      {
        "title": "Statement of Cash Flows",
        "docs": [
          {
            "q": 1,
            "label": "First quarter of 2013",
            "href": "https://bulacan.gov.ph/disclosure/fdr/2013/1st%20qtr%202013/1st%20qtr%20cash%20flows.pdf"
          },
          {
            "q": 2,
            "label": "Second quarter of 2013",
            "href": "https://bulacan.gov.ph/disclosure/fdr/2013/2nd%20qtr%202013/2nd%20qtr%20cash%20flows.pdf"
          },
          {
            "q": 3,
            "label": "Third quarter of 2013",
            "href": "https://bulacan.gov.ph/disclosure/fdr/2013/3rd%20qtr%202013/qrtrly%20statement%20of%20cashf%20lows%203rd%20qtr.pdf.pdf"
          },
          {
            "q": 4,
            "label": "Fourth quarter of 2013",
            "href": "https://bulacan.gov.ph/disclosure/fdr/2013/4th%20qtr%202013/cash%20flows%204th%20qtr%202013.pdf"
          }
        ]
      },
      {
        "title": "Trust Fund (PDAF) Utilization",
        "docs": [
          {
            "q": 1,
            "label": "First quarter of 2013",
            "href": "https://bulacan.gov.ph/disclosure/fdr/2013/1st%20qtr%202013/PDAF%201st%20qtr%202013.pdf"
          },
          {
            "q": 2,
            "label": "Second quarter of 2013",
            "href": "https://bulacan.gov.ph/disclosure/fdr/2013/2nd%20qtr%202013/PDAF%202nd%20qtr%202013.pdf"
          },
          {
            "q": 3,
            "label": "Third quarter of 2013",
            "href": "https://bulacan.gov.ph/disclosure/fdr/2013/3rd%20qtr%202013/pdaf%20utilization%20report%203rd%20qtr.pdf"
          },
          {
            "q": 4,
            "label": "Fourth quarter of 2013",
            "href": "https://bulacan.gov.ph/disclosure/fdr/2013/4th%20qtr%202013/pdaf%20utilization%204th%20qtr%202013.pdf"
          }
        ]
      },
      {
        "title": "Report of Local Disaster Risk Reduction and Management Fund (LDRRMF) Utilization",
        "docs": [
          {
            "q": 1,
            "label": "First quarter of 2013",
            "href": "https://bulacan.gov.ph/disclosure/fdr/2013/1st%20qtr%202013/PDRRM%20Fund%201st%20qtr%202013.pdf"
          },
          {
            "q": 2,
            "label": "Second quarter of 2013",
            "href": "https://bulacan.gov.ph/disclosure/fdr/2013/2nd%20qtr%202013/PDRRM%20Fund%20Utilization%20Report_2nd%20qtr%202013.pdf"
          },
          {
            "q": 3,
            "label": "Third quarter of 2013",
            "href": "https://bulacan.gov.ph/disclosure/fdr/2013/3rd%20qtr%202013/PDRRM%20fund%20utilization%203rd%20qtr.pdf"
          },
          {
            "q": 4,
            "label": "Fourth quarter of 2013",
            "href": "https://bulacan.gov.ph/disclosure/fdr/2013/4th%20qtr%202013/pdrrm%20fund%20utilization%204th%20qtr%202013.pdf"
          }
        ]
      },
      {
        "title": "Unliquidated Cash Advances",
        "docs": [
          {
            "q": 1,
            "label": "First quarter of 2013",
            "href": null
          },
          {
            "q": 2,
            "label": "Second quarter of 2013",
            "href": null
          },
          {
            "q": 3,
            "label": "Third quarter of 2013",
            "href": null
          },
          {
            "q": 4,
            "label": "Fourth quarter of 2013",
            "href": "https://bulacan.gov.ph/disclosure/fdr/2013/4th%20qtr%202013/unliquidated%20cash%20advances_4th%20qtr.pdf"
          }
        ]
      },
      {
        "title": "Report of SEF Utilization",
        "docs": [
          {
            "q": 1,
            "label": "First quarter of 2013",
            "href": "https://bulacan.gov.ph/disclosure/fdr/2013/1st%20qtr%202013/1st%20qtr%20SEF%20utilization.pdf"
          },
          {
            "q": 2,
            "label": "Second quarter of 2013",
            "href": "https://bulacan.gov.ph/disclosure/fdr/2013/2nd%20qtr%202013/sef%20utilization_2nd%20qtr%202013.pdf"
          },
          {
            "q": 3,
            "label": "Third quarter of 2013",
            "href": "https://bulacan.gov.ph/disclosure/fdr/2013/3rd%20qtr%202013/SEF%20as%20of%20September%202013.pdf"
          },
          {
            "q": 4,
            "label": "Fourth quarter of 2013",
            "href": "https://bulacan.gov.ph/disclosure/fdr/2013/4th%20qtr%202013/SEF%20utilization_4th%20qtr%202013.pdf"
          }
        ]
      },
      {
        "title": "20% Component of the IRA Utilization",
        "docs": [
          {
            "q": 1,
            "label": "First quarter of 2013",
            "href": "https://bulacan.gov.ph/disclosure/fdr/2013/1st%20qtr%202013/1st%20qtr%2020%%20IRA%20utilization.pdf"
          },
          {
            "q": 2,
            "label": "Second quarter of 2013",
            "href": "https://bulacan.gov.ph/disclosure/fdr/2013/2nd%20qtr%202013/20%%20IRA%20utilization%20report_2nd%20qtr%202013.pdf"
          },
          {
            "q": 3,
            "label": "Third quarter of 2013",
            "href": "https://bulacan.gov.ph/disclosure/fdr/2013/3rd%20qtr%202013/20%%20iRA%20utilization%20as%20of%20Sep%202013.pdf"
          },
          {
            "q": 4,
            "label": "Fourth quarter of 2013",
            "href": "https://bulacan.gov.ph/disclosure/fdr/2013/4th%20qtr%202013/20%%20IRA%20utilization_4th%20qtr%202013.pdf"
          }
        ]
      },
      {
        "title": "Manpower Complement",
        "docs": [
          {
            "q": 1,
            "label": "First quarter of 2013",
            "href": null
          },
          {
            "q": 2,
            "label": "Second quarter of 2013",
            "href": null
          },
          {
            "q": 3,
            "label": "Third quarter of 2013",
            "href": null
          },
          {
            "q": 4,
            "label": "Fourth quarter of 2013",
            "href": "https://bulacan.gov.ph/disclosure/fdr/2013/4th%20qtr%202013/manpower%20complement_4th%20qtr%202013.pdf"
          }
        ]
      },
      {
        "title": "Bid Results on Civil Works and Goods and Services, and Consulting Services",
        "docs": [
          {
            "q": 1,
            "label": "First quarter of 2013",
            "href": "https://bulacan.gov.ph/disclosure/fdr/2013/1st%20qtr%202013/bid%20results%202013%201st%20qtr_f.pdf"
          },
          {
            "q": 2,
            "label": "Second quarter of 2013",
            "href": "https://bulacan.gov.ph/disclosure/fdr/2013/2nd%20qtr%202013/Bid%20result_BAC%20docs%20certification_no%20bidding%202nd%20qtr%202013.pdf"
          },
          {
            "q": 3,
            "label": "Third quarter of 2013",
            "href": "https://bulacan.gov.ph/disclosure/fdr/2013/3rd%20qtr%202013/bid%20result%203rd%20qtr.pdf.pdf"
          },
          {
            "q": 4,
            "label": "Fourth quarter of 2013",
            "href": "https://bulacan.gov.ph/disclosure/fdr/2013/4th%20qtr%202013/bid%20result%204th%20qtr_.pdf"
          }
        ]
      },
      {
        "title": "Items to Bid",
        "docs": [
          {
            "q": 1,
            "label": "First quarter of 2013",
            "href": "https://bulacan.gov.ph/disclosure/fdr/2013/1st%20qtr%202013/items%20to%20bid%201st%20qtr%202013_f.pdf"
          },
          {
            "q": 2,
            "label": "Second quarter of 2013",
            "href": "https://bulacan.gov.ph/disclosure/fdr/2013/2nd%20qtr%202013/Items%20to%20bid_BAC%20docs%20certification_no%20bidding%202nd%20qtr%202013.pdf"
          },
          {
            "q": 3,
            "label": "Third quarter of 2013 (* no documents for items to bid it was advised by BAC secretariat to upload the same document as the abstract of bids)",
            "href": "https://bulacan.gov.ph/disclosure/fdr/2013/3rd%20qtr%202013/abstract%20of%20bids%20AND%20items%20to%20bid_3rd%20qtr..pdf"
          },
          {
            "q": 4,
            "label": "Fourth quarter of 2013 (* Items to Bid and Abstract of Bids as Calculated - the document was available but the portal removed this type of document in the (required) documents to be uploaded)",
            "href": "https://bulacan.gov.ph/disclosure/fdr/2013/4th%20qtr%202013/items%20to%20bid%204th%20qtr_.pdf"
          }
        ]
      },
      {
        "title": "Abstract of Bids as Calculated",
        "docs": [
          {
            "q": 1,
            "label": "First quarter of 2013",
            "href": "https://bulacan.gov.ph/disclosure/fdr/2013/1st%20qtr%202013/abstract%20of%20bids%202013%201st%20qtr_f.pdf"
          },
          {
            "q": 2,
            "label": "Second quarter of 2013",
            "href": "https://bulacan.gov.ph/disclosure/fdr/2013/2nd%20qtr%202013/Abstract%20of%20bids_BAC%20docs%20certification_no%20bidding%202nd%20qtr%202013.pdf"
          },
          {
            "q": 3,
            "label": "Third quarter of 2013",
            "href": "https://bulacan.gov.ph/disclosure/fdr/2013/3rd%20qtr%202013/abstract%20of%20bids%20AND%20items%20to%20bid_3rd%20qtr..pdf"
          },
          {
            "q": 4,
            "label": "Fourth quarter of 2013 (* Items to Bid and Abstract of Bids as Calculated - the document was available but the portal removed this type of document in the (required) documents to be uploaded)",
            "href": "https://bulacan.gov.ph/disclosure/fdr/2013/4th%20qtr%202013/abstract%20of%20bids%204th%20qtr_.pdf"
          }
        ]
      }
    ],
    "other": [
      {
        "label": "Supplemental Procurement Plan (MONTHLY report)",
        "href": "https://bulacan.gov.ph/disclosure/fdr/2013/monthly%20supplemental%202013%20certification.pdf"
      }
    ]
  },
  {
    "year": 2012,
    "annual": [
      {
        "label": "Annual Budget Report",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/AnnualBudget_2012.pdf"
      },
      {
        "label": "SEF Income and Expenditure Estimates",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/SEF_2012.pdf"
      },
      {
        "label": "Annual Procurement Plan or Procurement Plan List",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/APP_2012.pdf"
      },
      {
        "label": "Statement of Debt Services",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/StatementOfDebtService2012.pdf"
      },
      {
        "label": "Annual GAD Accomplishment Report",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/GAD_2011.pdf"
      },
      {
        "label": "Income Statement",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/IncomeStatement_2012.pdf"
      }
    ],
    "quarterly": [
      {
        "title": "Statement of Cash Flows",
        "docs": [
          {
            "q": 1,
            "label": "First quarter of 2012",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/StatementOfCashFlow_1Q2012.pdf"
          },
          {
            "q": 2,
            "label": "Second quarter of 2012",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/StatementOfCashFlow_2Q2012.pdf"
          },
          {
            "q": 3,
            "label": "Third quarter of 2012",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/StatementOfCashFlow_3Q2012.pdf"
          },
          {
            "q": 4,
            "label": "Fourth quarter of 2012",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/StatementOfCashFlow_4Q2012.pdf"
          }
        ]
      },
      {
        "title": "Trust Fund (PDAF) Utilization",
        "docs": [
          {
            "q": 1,
            "label": "First quarter of 2012",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/TrustFundUtilization_1Q2012.pdf"
          },
          {
            "q": 2,
            "label": "Second quarter of 2012",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/TrustFundUtilization_2Q2012.pdf"
          },
          {
            "q": 3,
            "label": "Third quarter of 2012",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/TrustFundUtilization_3Q2012.pdf"
          },
          {
            "q": 4,
            "label": "Fourth quarter of 2012",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/TrustFundUtilization_4Q2012.pdf"
          }
        ]
      },
      {
        "title": "Report of Local Disaster Risk Reduction and Management Fund (LDRRMF) Utilization",
        "docs": [
          {
            "q": 1,
            "label": "First quarter of 2012",
            "href": null
          },
          {
            "q": 2,
            "label": "Second quarter of 2012",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/LDRRMFU_2Q2012.pdf"
          },
          {
            "q": 3,
            "label": "Third quarter of 2012",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/LDRRMFU_3Q2012.pdf"
          },
          {
            "q": 4,
            "label": "Fourth quarter of 2012",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/LDRRMFU_4Q2012.pdf"
          }
        ]
      },
      {
        "title": "Report of SEF Utilization",
        "docs": [
          {
            "q": 1,
            "label": "First quarter of 2012",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/SEF-Uilization_1Q2012.pdf"
          },
          {
            "q": 2,
            "label": "Second quarter of 2012",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/SEF-Uilization_2Q2012.pdf"
          },
          {
            "q": 3,
            "label": "Third quarter of 2012",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/SEF-Uilization_3Q2012.pdf"
          },
          {
            "q": 4,
            "label": "Fourth quarter of 2012",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/SEF-Uilization_4Q2012.pdf"
          }
        ]
      },
      {
        "title": "20% Component of the IRA Utilization",
        "docs": [
          {
            "q": 1,
            "label": "First quarter of 2012",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/IRA-Utilization_1Q2012.pdf"
          },
          {
            "q": 2,
            "label": "Second quarter of 2012",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/IRA-Utilization_2Q2012.pdf"
          },
          {
            "q": 3,
            "label": "Third quarter of 2012",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/IRA-Utilization_3Q2012.pdf"
          },
          {
            "q": 4,
            "label": "Fourth quarter of 2012",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/IRA-Utilization_4Q2012.pdf"
          }
        ]
      },
      {
        "title": "Bid Results on Civil Works and Goods and Services, and Consulting Services",
        "docs": [
          {
            "q": 1,
            "label": "First quarter of 2012",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/BidResult_1Q2012.pdf"
          },
          {
            "q": 2,
            "label": "Second quarter of 2012",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/BidResult_2Q2012.pdf"
          },
          {
            "q": 3,
            "label": "Third quarter of 2012",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/BidResult_3Q2012.pdf"
          },
          {
            "q": 4,
            "label": "Fourth quarter of 2012",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/BidResult_4Q2012.pdf"
          }
        ]
      },
      {
        "title": "Items to Bid",
        "docs": [
          {
            "q": 1,
            "label": "First quarter of 2012",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/ItemsToBid_1Q2012.pdf"
          },
          {
            "q": 2,
            "label": "Second quarter of 2012",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/ItemsToBid_2Q2012.pdf"
          },
          {
            "q": 3,
            "label": "Third quarter of 2012",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/ItemsToBid_3Q2012.pdf"
          },
          {
            "q": 4,
            "label": "Fourth quarter of 2012",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/ItemsToBid_4Q2012.pdf"
          }
        ]
      },
      {
        "title": "Abstract of Bids as Calculated",
        "docs": [
          {
            "q": 1,
            "label": "First quarter of 2012",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/AbstractOfBids_1Q2012.pdf"
          },
          {
            "q": 2,
            "label": "Second quarter of 2012",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/AbstractOfBids_2Q2012.pdf"
          },
          {
            "q": 3,
            "label": "Third quarter of 2012",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/AbstractOfBids_3Q2012.pdf"
          },
          {
            "q": 4,
            "label": "Fourth quarter of 2012",
            "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/AbstractOfBids_4Q2012.pdf"
          }
        ]
      }
    ],
    "other": [
      {
        "label": "Supplemental Procurement Plan (MONTHLY report)",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2022/07/SPP_2012.pdf"
      }
    ]
  }
];
