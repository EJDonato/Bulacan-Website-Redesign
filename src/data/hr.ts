/**
 * HR Corner content from bulacan.gov.ph/hr-corner/ (fetched 2026-11-21): the EEO policy statement, policy documents,
 * vacant plantilla positions and the Personal Data Sheet forms. Files stay on the official site.
 */
export type HrLink = { label: string; href: string };
export type HrGroup = { title: string | null; links: HrLink[] };
export type Vacancy = { date: string; title: string; href: string | null };

export const eeoPolicy = {
  "title": "Policy statement on Equal Employment Opportunity principle",
  "en": [
    "The Provincial Government of Bulacan (PGB) stands firm on the platform of equality and fairness. The PGB recognizes the diversity of all its personnel and ensures that each employee is given equal opportunity in all aspects of human resource management and development.",
    "The PGB commits itself to the strict implementation of all existing laws, policies, and issuances on fairness and equality. It shall continue to promote a harmonious and conducive working environment that respects the individual differences of its employees and integrates into its organizational practices the principles of justice and impartiality.",
    "Being one of the most progressive provinces in the country, the PGB guarantees that all aspects of human resource management and development shall be implemented without any discrimination on account of age, sex, gender, sexual orientation, gender identity, gender expression, civil status, disability, religion, race, ethnicity, social status, income class, political affiliation or other similar factors or personal circumstances.",
    "The PGB recognizes and upholds the value of equity to development; thus, it ensures that discrimination in any form has no place in all its offices. It commits to establish and implement consistent human resource systems and practices namely: 1. Recruitment, Selection and Placement (RSP); 2. Learning and Development (L&D); 3. Performance Management (PM); 4. Rewards and Recognition (R&R); and 5. Employee Welfare and Benefits that is expected to promote Equal Employment Opportunity."
  ],
  "tl": [
    "Ang Pamahalaang Panlalawigan ng Bulacan (PGB) ay matatag ang paninindigan sa adhikain ng pagkakapantay-pantay at pagka-makatarungan. Ang pamahalaang panlalawigan ay kinikilala ang pagkakaiba-iba ng lahat ng kanyang mga kawani at tinitiyak na ang bawat kawani ay binibigyan ng pantay na pagkakataon (equal opportunity) sa lahat ng aspeto ng pamamahala at pagpapaunlad ng kakayahang pantao.",
    "Ang PGB ay nangangako sa mahigpit na pagpapatupad ng mga umiiral na batas, alituntunin at kalatas hinggil sa pagkakapantay-pantay at pagka-makatarungan. Patuloy ang pagsusulong at pagpapatupad ng isang kaaya-ayang lugar-paggawa na gumagalang sa mga pagkakaiba-iba ng mga kawani habang ipinapatupad at sinasaklaw bilang isang kasanayan ang panuntunan ng katarugan at walang kinikilingan.",
    "Bilang isa sa mga pinakamaunlad na lalawigan sa bansa, ang PGB ay nangangako na ang kabuuang aspeto ng pamamahala at pagpapaunlad ng kakayahang pantao ay ipapatupad ng walang pagtatangi batay sa edad, kasarian, gender, sexual orientation, gender identity, gender expression, kalagayang sibil, kapansanan, relihiyon at paniniwala, lahi, kalagayang panlipunan, income class, kaugnayang politikal at iba pang kahalintulad na salik o pansarili na kalagayan.",
    "Ang PGB ay kinikilala at ipinapatupad ang kahalagahan ng pagkakapantay-pantay sa kaunlaran kaya’t tinitiyak namin na ang diskriminasyon o pagtatangi sa anumang anyo o uri nito ay walang lugar sa alinmang tanggapan o pagamutan. Kami ay nangangako sa pagpapatupad ng naaalinsunod na pamamaraan at kasanayan sa kakayahang pantao sa mga sumusunod: 1. Recruitment, Selection and Placement (RSP); 2. Learning and Development (L&D); 3. Performance Management (PM); 4. Rewards and Recognition (R&R); at 5. Employee Welfare and Benefits na inaasahang magsusulong ng Equal Employment Opportunity."
  ]
};

export const hrGroups: HrGroup[] = [
  {
    "title": "PRIME-HRM Form",
    "links": [
      {
        "label": "Character Investigation Form",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2025/03/PRIME-HRM-04-Character-Investigation.docx"
      }
    ]
  },
  {
    "title": "Recruitment, Selection and Placement",
    "links": [
      {
        "label": "CSC-approved PGB Merit Selection Plan (Revised 2025)",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2026/10/CSC-Approved-PGB-Merit-Selection-Plan-Revised-2025.pdf"
      },
      {
        "label": "Executive Order No. 04, s. 2026",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2026/10/Executive-Order-No.-04-s.-2026-HRMPSB.pdf"
      },
      {
        "label": "SP Resolution No. 360-S2026",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2026/10/SP-Resolution-No.-360-S2026-Confirming-EO-No.-04-s.-2026-on-the-Reconstitution-of-the-PGB-HRMPSB.pdf"
      },
      {
        "label": "Executive Order No. 27, s. 2024 – Enjoining the Promulgation of the Guidelines in the Implementation of EEOP to HRM Systems in PGB",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2024/10/Executive-Order-No.-27-s.-2024-Enjoining-the-Promulgation-of-the-Guidelines-in-the-Implementation-of-EEOP-to-HRM-Systems-in-PGB.pdf"
      }
    ]
  },
  {
    "title": "Performance Management",
    "links": [
      {
        "label": "PGB SPMS General Guidelines",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2024/10/SPMS-GENERAL-GUIDELINES-UPDATED-2020.pdf"
      },
      {
        "label": "Updated SPMS Internal Guidelines as of July 30, 2020",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2024/10/Updated-SPMS-Internal-Guidelines-as-of-July-30-2020.pdf"
      }
    ]
  }
];

export const pdsForms: HrGroup[] = [
  {
    "title": null,
    "links": [
      {
        "label": "ANNEX H-1 - CS Form No. 212 Revised 2025 - Personal Data Sheet",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2025/11/ANNEX-H-1-CS-Form-No.-212-Revised-2025-Personal-Data-Sheet.xlsx"
      },
      {
        "label": "ANNEX H-2 - CS Form No. 212 Attachment - Work Experience Sheet",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2025/11/ANNEX-H-2-CS-Form-No.-212-Attachment-Work-Experience-Sheet.docx"
      },
      {
        "label": "ANNEX H-3 - CS Form No. 212 Revised 2025 - Attachment - Guide to Filling Up the Personal Data Sheet new",
        "href": "https://bulacan.gov.ph/wp-content/uploads/2025/11/ANNEX-H-3-CS-Form-No.-212-Revised-2025-Attachment-Guide-to-Filling-Up-the-Personal-Data-Sheet-new.pdf"
      }
    ]
  }
];

export const vacancies: Vacancy[] = [
  {
    "date": "October 30, 2026",
    "title": "Supervising Administrative Officer - Rogaciano M. Mercado Memorial Hospital (PHO - RMMMH)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2026/11/ao-roga.pdf"
  },
  {
    "date": "October 30, 2026",
    "title": "Administrative Officer V - San Miguel District Hospital (PHO-SMDH)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2026/11/ao-smdh.pdf"
  },
  {
    "date": "October 16, 2026",
    "title": "Supervising Public Utilities Regulation Officer - Provincial General Services Offices (PGSO)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2026/10/Supervising-Public-Utilities-Regulation-Officer-PGSO.pdf"
  },
  {
    "date": "October 14, 2026",
    "title": "(2) Nursing Attendant I - Pandi District Hospital (PHO-PDH)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2026/10/Nursing-Attendant-PDH.pdf"
  },
  {
    "date": "October 14, 2026",
    "title": "(2) Nurse II, (2) Nurse I - Pandi District Hospital (PHO-PDH)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2026/10/Nurse-PDH.pdf"
  },
  {
    "date": "October 14, 2026",
    "title": "Medical Officer IV, (3) Medical Officer III - Pandi District Hospital (PHO-PDH)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2026/10/Medical-Officer-PDH.pdf"
  },
  {
    "date": "October 14, 2026",
    "title": "Admin Assistant I (Computer Operator I), Administrative Aide VI (Clerk III), Administrative IV (Clerk II) - Pandi District Hospital (PHO-PDH)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2026/10/Admin-Aide-PDH.pdf"
  },
  {
    "date": "October 14, 2026",
    "title": "Prison Guard III, Prison Guard II - Provincial Civil Security & Jail Management Office (PCSJMO)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2026/10/Prison-Guard-PCSJMO.pdf"
  },
  {
    "date": "October 7, 2026",
    "title": "(10) Musician - Provincial History, Arts, Culture and Tourism Office (PHACTO)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2026/10/musician-PHACTO.pdf"
  },
  {
    "date": "October 7, 2026",
    "title": "Radiologic Technologist IV - Bulacan Medical Center (PHO-BMC)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2026/10/radtech-IV-BMC.pdf"
  },
  {
    "date": "October 7, 2026",
    "title": "(2) Nursing I - Rogaciano M. Mercado Memorial Hospital (PHO-RMMMH)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2026/10/nurse-I-RMMMH.pdf"
  },
  {
    "date": "October 1, 2026",
    "title": "Administrative Officer V (Cashier III) - Bulacan Medical Center (PHO -BMC)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2026/10/AO-V-Cashier-III-BMC.pdf"
  },
  {
    "date": "September 16, 2026",
    "title": "Supervising Administrative Officer (Management and Audit Analyst IV)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2026/09/Supervising-Administrative-Officer-PA-Office.pdf"
  },
  {
    "date": "September 16, 2026",
    "title": "Administrative Assistant II (Administrative Assistant) - Provincial Cooperative Enterprise Development Office",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2026/09/Administrative-Assistant-II-PCEDO.pdf"
  },
  {
    "date": "September 16, 2026",
    "title": "Supervising Administrative Officer (Supply Officer IV) - Provincial General Services Office",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2026/09/Supply-Officer-IV-PGSO.pdf"
  },
  {
    "date": "August 25, 2026",
    "title": "(5) Nurse I - Bulacan Medical Center (PHO-BMC)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2026/08/Nurse-I-PHO-BMC.pdf"
  },
  {
    "date": "August 25, 2026",
    "title": "(3) Engineer II - Provincial Engineer's Office (PEO)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2026/08/Engineer-II-PEO.pdf"
  },
  {
    "date": "August 7, 2026",
    "title": "Supervising Administrative Officer (Accountant IV) - Provincial Accounting Office (PAccO)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2026/08/Accountant-IV-PAccO.pdf"
  },
  {
    "date": "August 4, 2026",
    "title": "Administrative Aide IV (Driver II) - Provincial Youth and Sports Development Office (PYSDO)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2026/08/Admin-AIde-IV-Driver-II-PYSDO.pdf"
  },
  {
    "date": "July 29, 2026",
    "title": "(10) Nursing Attendant II - Bulacan Medical Center (PHO)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2026/08/Nursing-Attendant-II-PHO-BMC.pdf"
  },
  {
    "date": "July 29, 2026",
    "title": "(2) Administrative Officer IV (Human Resource Management Officer II) – Provincial Human Resource Management Office",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2026/08/Admin-Officer-IV-PHRMO.pdf"
  },
  {
    "date": "July 1, 2026",
    "title": "Administrative Officer I (Records Officer I), Nurse II, (2) Cook I - Baliuag District Hospital (PHO-BDH)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2026/07/Recods-Officer-I-BDH.pdf"
  },
  {
    "date": "July 1, 2026",
    "title": "Project Development Officer II - Provincial History, Arts, Culture and Tourism Office (PHACTO)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2026/07/PDO-II-PHACTO.pdf"
  },
  {
    "date": "April 29, 2026",
    "title": "Health Program Officer II, Administrative Assistant III (Computer Operator II ) - Public Health (PHO)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2026/05/Health-Program-Officer-II.pdf"
  },
  {
    "date": "April 28, 2026",
    "title": "Supervising Health Program Officer, Administrative Aide IV(Driver II), Planning Officer III, Planning Officer II, Health Program Officer II - Public Health (PHO)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2026/05/Supervising-Health-Program-Officer.pdf"
  },
  {
    "date": "April 28, 2026",
    "title": "(3) Senior Health Program Officer, Medical Technologist III - Public Health (PHO)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2026/05/Senior-Health-Program-Officer.pdf"
  },
  {
    "date": "April 28, 2026",
    "title": "Information Systems Analyst III, Information Systems Analyst II, (2) Information Systems Analyst I - Public Health (PHO)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2026/05/Information-Systems-Analyst-III.pdf"
  },
  {
    "date": "April 28, 2026",
    "title": "Health Program Officer I, Planning Officer I, Administrative Assistant III (Computer Operator II) - Public Health (PHO)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2026/05/Health-Program-Officer-I.pdf"
  },
  {
    "date": "April 28, 2026",
    "title": "Supervising Health Program Officer, Health Education & Promotion Officer III, Health Education & Promotion Officer II, Senior Health Program Officer - Public Health (PHO)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2026/05/Health-Education-Promotion-Officer-III.pdf"
  },
  {
    "date": "March 24, 2026",
    "title": "Administrative Officer IV, Local Disaster Risk Reduction and Management Officer IV, (2) Local Disaster Risk Reduction and Management Officer II - Provincial Disaster Risk Reduction and Management Office (PDRRMO)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2026/03/pdrrmo.pdf"
  },
  {
    "date": "March 19, 2026",
    "title": "Medical Officer IV - Public Health (PHO)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2026/03/Medical-Officer-IV-PHO.pdf"
  },
  {
    "date": "March 11, 2026",
    "title": "(2) Administrative Assistant II (Bookkeeper I) - Provincial Accounting Office",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2026/03/accounting-bookkeeperI.pdf"
  },
  {
    "date": "March 6, 2026",
    "title": "Administrative Aide I (Records Officer I) - Gregorio Del Pilar District Hospital (PHO-GDPDH)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2026/03/GDPDH.pdf"
  },
  {
    "date": "March 6, 2026",
    "title": "Administrative Aide IV (Driver II) - Provincial Planning and Development Office (PPDO)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2026/03/PPDO.pdf"
  },
  {
    "date": "March 6, 2026",
    "title": "(4) Security Guard III - Provincial Civil Security & Jail Management (PCSJMO)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2026/03/PCSJMO_2.pdf"
  },
  {
    "date": "March 6, 2026",
    "title": "Special Investigator I, (2) Prison Guard III - Provincial Civil Security & Jail Management (PCSJMO))",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2026/03/PCSJMO_1.pdf"
  },
  {
    "date": "March 6, 2026",
    "title": "Administrative Aide IV (Driver II) - Provincial Budget Office",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2026/03/PBO.pdf"
  },
  {
    "date": "March 6, 2026",
    "title": "(2) Administrative Aide VI (Fiscal Clerk II), (2) Administrative Assistant III (Senior Bookkeeper) - Provincial Accounting Office",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2026/03/Accounting.pdf"
  },
  {
    "date": "February 27, 2026",
    "title": "Project Development Officer IV - Provincial Cooperative and Enterprise Development Office (PCEDO)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2026/03/Project-Deveolpment-IV-PCEDO.pdf"
  },
  {
    "date": "February 9, 2026",
    "title": "Medical Specialist II - Baliuag District Hospital (PHO)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2026/02/Medical-Specialist-II-BDH.pdf"
  },
  {
    "date": "February 6, 2026",
    "title": "Administrative Aide V (Painter II) - Provincial General Services Office (PGSO)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2026/02/Admin-Aide-V-PGSO.pdf"
  },
  {
    "date": "February 4, 2026",
    "title": "Provincial Government Assistant Department Head - Provincial Social Welfare and Development Office (PSWDO)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2026/02/PGB-Assistant-Department-Head-PSWDO.pdf"
  },
  {
    "date": "January 28, 2026",
    "title": "Medical Officer IV - San Miguel District Hospital (PHO)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2026/01/Medical-Officer-IV-SMDH.pdf"
  },
  {
    "date": "January 27, 2026",
    "title": "Dentist II - Bulacan Medical Center (PHO)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2026/01/Dentist-II-BMC.pdf"
  },
  {
    "date": "January 9, 2026",
    "title": "Provincial Government Department Head - Provincial Youth and Sports Development Office (PYSDO)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2026/01/PYSDO-Department-Head.pdf"
  },
  {
    "date": "December 9, 2025",
    "title": "Medical Officer III - Calumpit District Hospital (PHO)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2025/12/medical-officer-III-CDH.pdf"
  },
  {
    "date": "November 27, 2025",
    "title": "Nursing Attendant I, Nurse II, Pharmacist II, Administrative Officer II, Administrative Officer I (Records Officer I))- Felix T. Reyes Memorial Hospital (PHO)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2025/12/Nurse-II-PHO-felix-t-reyes.pdf"
  },
  {
    "date": "November 27, 2025",
    "title": "(6) Nurse I - Felix T. Reyes Memorial Hospital (PHO)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2025/12/Nurse-I-PHO-felix-t-reyes.pdf"
  },
  {
    "date": "November 4, 2025",
    "title": "Project Development Officer II - Provincial Cooperative Enterprise Development Office",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2025/11/Project-Development-Officer.pdf"
  },
  {
    "date": "November 4, 2025",
    "title": "(2) Environmental Management Specialist II - Bulacan Environment and Natural Resources Office (BENRO)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2025/11/Environment-management-specialist.pdf"
  },
  {
    "date": "November 4, 2025",
    "title": "Tax mapper II, Local Assessment Operation Officer - Provincial Assessor's Office",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2025/11/tax-mapper.pdf"
  },
  {
    "date": "October 23, 2025",
    "title": "Local Legislative Staff Officer III, Local Legislative Staff Employee II, Local Legislative Staff Officer V, (2) Local Legislative Staff Assistant II - Office of the Secretary to the Sangguniang Panlalawigan",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2025/10/career-10232025.pdf"
  },
  {
    "date": "September 23, 2025",
    "title": "(2) Nurse I - PHO Pandi District Hospital",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2025/09/PDH-Nurse-I.pdf"
  },
  {
    "date": "September 23, 2025",
    "title": "Administrative Aide VI (Storekeeper II) - PEO",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2025/09/PEO-STOREKEEPER-II.pdf"
  },
  {
    "date": "September 23, 2025",
    "title": "Provincial Government Department Head - PHRMO",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2025/09/PHRMO-Department-head.pdf"
  },
  {
    "date": "August 22, 2025",
    "title": "Provincial Government Assistant Department Head",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2025/09/PGB-Assistant-dept-head-jail.pdf"
  },
  {
    "date": "June 3, 2025",
    "title": "Provincial Government Department Head",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2025/06/Department-head-PCSJMO.pdf"
  },
  {
    "date": "January 10, 2025",
    "title": "Nurse I, Nurse II",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2025/03/Nurse-I-II.pdf"
  },
  {
    "date": "January 10, 2025",
    "title": "(3) Local Treasury Operations Officer II",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2025/03/LTOO-II.pdf"
  },
  {
    "date": "January 6, 2025",
    "title": "Administrative Officer IV (Fiscal Examiner II)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2025/01/kay-1.6.25.pdf"
  },
  {
    "date": "December 4, 2024",
    "title": "Provincial Government Department Head",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2024/12/December-4-2024-Publication-HR-Head.pdf"
  },
  {
    "date": "October 28, 2024",
    "title": "Supervising Administrative Officer (Management and Audit Analyst IV), Administrative Officer IV (Management and Audit Analyst II))",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2024/10/PUBLICATION-10.28.24.pdf"
  },
  {
    "date": "September 10, 2024",
    "title": "Nurse I",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2024/10/BRN000EC695C7E2_10092024_100521_007887.pdf"
  },
  {
    "date": "August 27, 2024",
    "title": "Medical Specialist II (PT)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2024/10/BRN000EC695C7E2_10092024_100535_007888.pdf"
  },
  {
    "date": "August 27, 2024",
    "title": "Administrative Aide VI (Storekeeper II)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2024/10/BRN000EC695C7E2_10092024_100549_007889.pdf"
  },
  {
    "date": "August 14, 2024",
    "title": "Medical Officer IV",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2024/10/BRN000EC695C7E2_10092024_100606_007890.pdf"
  },
  {
    "date": "August 14, 2024",
    "title": "Supervising Environmental Management Specialist, Watchman III",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2024/10/BRN000EC695C7E2_10092024_100624_007891.pdf"
  },
  {
    "date": "August 8, 2024",
    "title": "Nurse II",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2024/10/BRN000EC695C7E2_10092024_100635_007892.pdf"
  },
  {
    "date": "August 8, 2024",
    "title": "Project Development Officer IV",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2024/10/BRN000EC695C7E2_10092024_100649_007893.pdf"
  },
  {
    "date": "August 8, 2024",
    "title": "Supervising Administrative Officer",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2024/10/BRN000EC695C7E2_10092024_100702_007894.pdf"
  },
  {
    "date": "June 20, 2024",
    "title": "Social Welfare Officer IV",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2024/10/BRN000EC695C7E2_10092024_100719_007895.pdf"
  },
  {
    "date": "June 7, 2024",
    "title": "Agriculturist II, Supervising Agriculturist",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2024/10/BRN000EC695C7E2_10092024_100735_007896.pdf"
  },
  {
    "date": "June 7, 2024",
    "title": "(2) Nurse I",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2024/10/BRN000EC695C7E2_10092024_100755_007897.pdf"
  },
  {
    "date": "June 7, 2024",
    "title": "(3) Administrative Aide III (Utility Worker II)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2024/10/BRN000EC695C7E2_10092024_100808_007898.pdf"
  },
  {
    "date": "June 7, 2024",
    "title": "(5) Nursing Attendant I",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2024/10/BRN000EC695C7E2_10092024_100820_007899.pdf"
  },
  {
    "date": "June 7, 2024",
    "title": "Planning Officer II, Statistician II",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2024/10/BRN000EC695C7E2_10092024_100838_007900.pdf"
  },
  {
    "date": "May 15, 2024",
    "title": "Nurse VI",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2024/10/BRN000EC695C7E2_10092024_100856_007901.pdf"
  },
  {
    "date": "May 2, 2024",
    "title": "Nurse III",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2024/10/BRN000EC695C7E2_10092024_100907_007902.pdf"
  },
  {
    "date": "April 18, 2024",
    "title": "Administrative Officer I (Cashier I)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2024/10/BRN000EC695C7E2_10092024_100924_007903.pdf"
  },
  {
    "date": "March 26, 2024",
    "title": "Nurse III",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2024/10/BRN000EC695C7E2_10092024_100940_007904.pdf"
  },
  {
    "date": "February 13, 2024",
    "title": "Project Development Officer III, Project Development Officer II, Social Welfare Officer II, (3) Community Affairs Officers II",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2024/10/BRN000EC695C7E2_10092024_100953_007906.pdf"
  },
  {
    "date": "February 13, 2024",
    "title": "Administrative Officer I (Cashier I), Administrative Assistant I (Computer Operator I), Administrative Aide IV (Clerk III), Administrative Officer I (Records Officer I), Administrative Aide IV (Clerk II)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2024/10/BRN000EC695C7E2_10092024_101004_007907.pdf"
  },
  {
    "date": "February 13, 2024",
    "title": "Tax Mapper II, Loacal Assessment Operations Officer II",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2024/10/BRN000EC695C7E2_10092024_101020_007908.pdf"
  },
  {
    "date": "February 13, 2024",
    "title": "Administrative Officer IV (Budget Officer II)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2024/10/BRN000EC695C7E2_10092024_101034_007909.pdf"
  },
  {
    "date": "February 13, 2024",
    "title": "Environment Management Specialist II",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2024/10/BRN000EC695C7E2_10092024_101045_007910.pdf"
  },
  {
    "date": "February 13, 2024",
    "title": "Administrative Assistant III (Senior Bookkeeper)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2024/10/BRN000EC695C7E2_10092024_101058_007911.pdf"
  },
  {
    "date": "February 14, 2024",
    "title": "Administrative Officer III (Cashier II)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2024/10/BRN000EC695C7E2_10092024_101112_007912.pdf"
  },
  {
    "date": "February 13, 2024",
    "title": "Administrative Assistant II (Electronics & Communication Equipment Technician II)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2024/10/BRN000EC695C7E2_10092024_101124_007913.pdf"
  },
  {
    "date": "February 13, 2024",
    "title": "Nurse II",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2024/10/BRN000EC695C7E2_10092024_101136_007914.pdf"
  },
  {
    "date": "February 13, 2024",
    "title": "(6) Community Affairs Officer II",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2024/10/BRN000EC695C7E2_10092024_101150_007915.pdf"
  },
  {
    "date": "February 13, 2024",
    "title": "Revenue Collection Clerk III, Local Treasury Operations Officer II, Local Treasury Operations Officer II",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2024/10/BRN000EC695C7E2_10092024_101205_007916.pdf"
  },
  {
    "date": "February 13, 2024",
    "title": "Radiologic Technologist IV, Medical Specialist II",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2024/10/BRN000EC695C7E2_10092024_101217_007918.pdf"
  },
  {
    "date": "February 13, 2024",
    "title": "Administrative Officer I (Cashier I)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2024/10/BRN000EC695C7E2_10092024_101230_007919.pdf"
  },
  {
    "date": "January 11, 2024",
    "title": "Medical Technologist II, Radiologic Technologist II",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2024/10/BRN000EC695C7E2_10092024_101245_007920.pdf"
  },
  {
    "date": "January 5, 2024",
    "title": "Medical Specialist II",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2024/10/BRN000EC695C7E2_10092024_101257_007921.pdf"
  },
  {
    "date": "January 5, 2024",
    "title": "(3) Administrative Aide IV (Driver II)",
    "href": "https://bulacan.gov.ph/wp-content/uploads/2024/10/BRN000EC695C7E2_10092024_101316_007922.pdf"
  }
];
