import type { ImageMetadata } from 'astro';
import emilio_g_perez_memorial_district_hospital from '../assets/pages/health/emilio-g-perez-memorial-district-hospital.jpg';
import rogaciano_m_mercado_memorial_hospital from '../assets/pages/health/rogaciano-m-mercado-memorial-hospital.jpg';
import san_miguel_district_hospital from '../assets/pages/health/san-miguel-district-hospital.jpg';
import calumpit_district_hospital from '../assets/pages/health/calumpit-district-hospital.jpg';
import felix_t_reyes_extension_hospital from '../assets/pages/health/felix-t-reyes-extension-hospital.jpg';
import gregorio_del_pilar_district_hospital from '../assets/pages/health/gregorio-del-pilar-district-hospital.jpg';
import plaridel_infirmary_bmc_annex from '../assets/pages/health/plaridel-infirmary-bmc-annex.jpg';
import baliuag_district_hospital from '../assets/pages/health/baliuag-district-hospital.jpg';

/**
 * Health page content from bulacan.gov.ph/health/ (fetched 2026-11-21): Bulacan Medical Center services, out-patient
 * schedule and the district hospitals. Hospital pages stay on the official site.
 */
export type OpdRow = { cases: string; location: string; schedule: string };
export type ServiceBlock = { title: string; paragraphs: string[] };
export type Hospital = { name: string; href: string; image: ImageMetadata };

export const inPatient: string[] = [
  "The IN-PATIENT SERVICES of Bulacan Medical Center consists of 4 major Clinical Departments, namely: Pediatric, Surgery, Obstetrics and Gynecology and Medicine. Each Department has clinical ward minimum of 50 beds each, to address the need of their respective patients.",
  "There are also special areas: Operating Room, Recovery Room, Medical and Neurological Intensive Care Units (ICU), Neonatal ICU (NICU), Pediatric ICU (PICU), Labor Room (LR) and Delivery Room (DR), available wherein patients can be provided of the necessary medical treatment, equipment and facilities."
];
export const outPatient: string[] = [
  "The Out-Patient Department provides health care services to ambulatory patients that do not require hospitalization but with injuries, illnesses to be seen by professionals.",
  "It provides services and facilities for medical diagnosis and treatment. Out-Patient services are offered in different areas."
];
export const opd: OpdRow[] = [
  {
    "cases": "Surgical and Medical",
    "location": "OPD Complex",
    "schedule": "Monday - Friday 8:00 a.m. - 5:00 p.m."
  },
  {
    "cases": "Pediatrics",
    "location": "BMC- JICA Building Fronting Barasoain Elementary School",
    "schedule": "Monday - Friday 8:00 a.m. - 5:00 p.m."
  },
  {
    "cases": "Obstetrics",
    "location": "BMC- JICA Building Fronting Barasoain Elementary School",
    "schedule": "Monday - Friday 8:00 a.m. - 5:00 p.m."
  },
  {
    "cases": "Gynecology",
    "location": "BMC- JICA Building Fronting Barasoain Elementary School",
    "schedule": "Every Friday 8:00 a.m. - 5:00 p.m."
  },
  {
    "cases": "Pediatric",
    "location": "BMC- JICA Building Fronting Barasoain Elementary School",
    "schedule": "Every Friday 8:00 a.m. - 5:00 p.m."
  },
  {
    "cases": "EENT",
    "location": "OPD Complex",
    "schedule": "Wednesday and Friday 8:00 a.m. - 12:00 noon"
  },
  {
    "cases": "Psychiatric",
    "location": "OPD Complex",
    "schedule": "Thursday 8:00 a.m. - 12:00 noon"
  },
  {
    "cases": "Ophthalmology",
    "location": "2nd floor, Main Building",
    "schedule": "Monday to Friday 8:00 a.m. - 5:00 p.m."
  }
];
export const services: ServiceBlock[] = [
  {
    "title": "Emergency Room",
    "paragraphs": [
      "Emergency Room is ready to provide 24 hour service to patients requiring urgent medical treatment. Emergency Room is located at the entrance of the OPD Complex. It is equipped with 6 beds, ready oxygen, ECG machine, aerosol unit, cardiac defibrillator and oral rehydration corner.",
      "Beside are the laboratory unit and pharmacy unit for easy access to clinical medicines."
    ]
  },
  {
    "title": "Laboratory",
    "paragraphs": [
      "The Department of Laboratory is an ancillary department of the Bulacan Medical Center located at the right wing of the OPD Complex. It is composed of different sections, namely the Blood bank, Hematology, Clinical Microscopy, Clinical Chemistry, Surgical Pathology, Microbiology, and the Drug Testing Section."
    ]
  },
  {
    "title": "Pharmacy",
    "paragraphs": [
      "The Hospital Pharmacy serves the need of the patients whether treated in the hospital or walk-in customers. It provides the adequate supply of safe, effective, good quality and affordable drugs and medicines 24 hours a day and 7 days a week."
    ]
  },
  {
    "title": "Radiology",
    "paragraphs": [
      "The Department of Radiology is an ancillary department of BMC, equipped with state of the art equipments and facilities to efficiently perform the diagnostic needs of patients. These include: basic x-ray services, Spiral computed tomography (CAT-SCAN)as well as special procedures such as Intra-venous Pyelogram (IVP), Barium and Fluoroscopy-guided X-ray imaging high resolutions unit."
    ]
  },
  {
    "title": "Private Rooms",
    "paragraphs": [
      "Pay Patients Services:",
      "The pay patients services has three (3) wards to cater to those patients who wants to avail of quality care at an affordable price. It is manned by highly trained nursing staffs and medical personnel. Only medical specialists who are Diplomates or Fellows of their respective specialty societies are allowed to bring their patients at the payward.",
      "These consists of:",
      "Executive suites",
      "Suite rooms",
      "Private rooms",
      "Small private rooms",
      "4-beds wards",
      "Infirmary rooms",
      "PhilHealth rooms"
    ]
  },
  {
    "title": "Dialysis Unit",
    "paragraphs": [
      "The Bulacan Medical Center Dialysis Unit is located at the Third Floor of the Bulacan Medical Center Building, Mojon, Malolos City. It was established last January 2012 through the efforts of the Provincial Government of Bulacan under the leadership of former Governor Wilhelmino M. Sy-Alvarado, which aims to provide quality renal care for patients of the Province of Bulacan.",
      "It is composed of nine (9) units of Hemodialysis Machines, regularly maintained by Fresenius Health Care Inc. and B.Braun/Baxter. It is maintained by well trained health professionals with adequate training in renal care."
    ]
  }
];

export const hospitals: Hospital[] = [
  { name: "Emilio G. Perez Memorial District Hospital", href: "https://bulacan.gov.ph/health/public-health-office/emilio-g-perez-memorial-district-hospital/", image: emilio_g_perez_memorial_district_hospital },
  { name: "Rogaciano M. Mercado Memorial Hospital", href: "https://bulacan.gov.ph/health/public-health-office/rogaciano-m-mercado-memorial-hospital/", image: rogaciano_m_mercado_memorial_hospital },
  { name: "San Miguel District Hospital", href: "https://bulacan.gov.ph/health/public-health-office/san-miguel-district-hospital/", image: san_miguel_district_hospital },
  { name: "Calumpit District Hospital", href: "https://bulacan.gov.ph/health/public-health-office/calumpit-district-hospital/", image: calumpit_district_hospital },
  { name: "Felix T. Reyes Extension Hospital", href: "https://bulacan.gov.ph/health/public-health-office/felix-t-reyes-extension-hospital/", image: felix_t_reyes_extension_hospital },
  { name: "Gregorio Del Pilar District Hospital", href: "https://bulacan.gov.ph/health/public-health-office/gregorio-del-pilar-district-hospital/", image: gregorio_del_pilar_district_hospital },
  { name: "Plaridel Infirmary (BMC Annex)", href: "https://bulacan.gov.ph/health/public-health-office/plaridel-infirmary/", image: plaridel_infirmary_bmc_annex },
  { name: "Baliuag District Hospital", href: "https://bulacan.gov.ph/health/public-health-office/baliuag-district-hospital/", image: baliuag_district_hospital }
];
