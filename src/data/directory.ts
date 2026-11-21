/**
 * Provincial offices and emergency numbers, copied from bulacan.gov.ph/government/offices/ (fetched 2026-11-21).
 * Office pages stay on the official site, so every `href` here is an absolute official URL.
 */
export type Office = { name: string; href: string };
export type MunicipalEmergency = { place: string; fire: string; police: string; disaster: string };
export type OtherEmergency = { label: string; number: string };

export const offices: Office[] = [
  {
    "name": "Office of the Governor (GO)",
    "href": "https://bulacan.gov.ph/government/offices/go/"
  },
  {
    "name": "Office of the Governor - Personal Staff",
    "href": "https://bulacan.gov.ph/government/offices/go-ps/"
  },
  {
    "name": "Office of the Vice Governor (VGO)",
    "href": "https://bulacan.gov.ph/government/offices/vgo/"
  },
  {
    "name": "Office of the Vice Governor - Personal Staff",
    "href": "https://bulacan.gov.ph/government/offices/vgo-ps/"
  },
  {
    "name": "Office of the Secretary to the Sangguniang Panlalawigan (OSSP)",
    "href": "https://bulacan.gov.ph/government/offices/ossp/"
  },
  {
    "name": "Bulacan Environment and Natural Resources Office (BENRO)",
    "href": "https://bulacan.gov.ph/government/offices/benro/"
  },
  {
    "name": "Bulacan Polytechnic College (BPC)",
    "href": "https://bulacan.gov.ph/government/offices/bpc/"
  },
  {
    "name": "Provincial Accounting Office",
    "href": "https://bulacan.gov.ph/government/offices/acctg/"
  },
  {
    "name": "Provincial Administrator's Office (PA's Office)",
    "href": "https://bulacan.gov.ph/government/offices/pa/"
  },
  {
    "name": "Provincial Agriculture Office (PAO)",
    "href": "https://bulacan.gov.ph/government/offices/pao/"
  },
  {
    "name": "Provincial Assessor's Office",
    "href": "https://bulacan.gov.ph/government/offices/assessor/"
  },
  {
    "name": "Provincial Budget Office (PBO)",
    "href": "https://bulacan.gov.ph/government/offices/pbo/"
  },
  {
    "name": "Provincial Civil Security and Jail Management Office (PCSJMO)",
    "href": "https://bulacan.gov.ph/government/offices/pcsjmo/"
  },
  {
    "name": "Provincial Cooperative and Enterprise Development Office (PCEDO)",
    "href": "https://bulacan.gov.ph/government/offices/pcedo/"
  },
  {
    "name": "Provincial Disaster Risk Reduction and Management Office (PDRRMO)",
    "href": "https://bulacan.gov.ph/government/offices/pdrrmo/"
  },
  {
    "name": "Provincial Engineer's Office (PEO)",
    "href": "https://bulacan.gov.ph/government/offices/peo/"
  },
  {
    "name": "Provincial General Services Office (PGSO)",
    "href": "https://bulacan.gov.ph/government/offices/pgso/"
  },
  {
    "name": "Provincial History, Arts, Culture, and Tourism Office (PHACTO)",
    "href": "https://bulacan.gov.ph/government/offices/phacto/"
  },
  {
    "name": "Provincial Human Resource Management Office (PHRMO)",
    "href": "https://bulacan.gov.ph/government/offices/phrmo/"
  },
  {
    "name": "Provincial Information Technology Office (PITO)",
    "href": "https://bulacan.gov.ph/government/offices/pito/"
  },
  {
    "name": "Provincial Legal Office (PLO)",
    "href": "https://bulacan.gov.ph/government/offices/plo/"
  },
  {
    "name": "Provincial Planning and Development Office (PPDO)",
    "href": "https://bulacan.gov.ph/government/offices/ppdo/"
  },
  {
    "name": "Provincial Public Affairs Office (PPAO)",
    "href": "https://bulacan.gov.ph/government/offices/ppao/"
  },
  {
    "name": "Provincial Public Employment Service Office (PPESO)",
    "href": "https://bulacan.gov.ph/government/offices/ppeso/"
  },
  {
    "name": "Provincial Public Health Office (PPHO)",
    "href": "https://bulacan.gov.ph/government/offices/ppho/"
  },
  {
    "name": "Provincial Social Welfare and Development Office (PSWDO)",
    "href": "https://bulacan.gov.ph/government/offices/pswdo/"
  },
  {
    "name": "Provincial Treasurer's Office (PTO)",
    "href": "https://bulacan.gov.ph/government/offices/pto/"
  },
  {
    "name": "Provincial Veterinary Office (PVO)",
    "href": "https://bulacan.gov.ph/government/offices/pvo/"
  },
  {
    "name": "Provincial Youth and Sports Development Office (PYSDO)",
    "href": "https://bulacan.gov.ph/government/offices/pysdo/"
  }
];

export const municipalEmergency: MunicipalEmergency[] = [
  {
    "place": "Angat",
    "fire": "671-7996",
    "police": "671-7998",
    "disaster": "671-7950"
  },
  {
    "place": "Balagtas",
    "fire": "663-7996",
    "police": "693-7998",
    "disaster": "693-2243"
  },
  {
    "place": "Baliwag City",
    "fire": "766-3250",
    "police": "766-2328",
    "disaster": "766-6055"
  },
  {
    "place": "Bocaue",
    "fire": "692-7996",
    "police": "692-7998",
    "disaster": "692-1234"
  },
  {
    "place": "Bulakan",
    "fire": "668-2831",
    "police": "792-0300",
    "disaster": "792-0767"
  },
  {
    "place": "Bustos",
    "fire": "617-7996",
    "police": "617-7998",
    "disaster": "617-1417"
  },
  {
    "place": "Calumpit",
    "fire": "675-2760",
    "police": "675-7998",
    "disaster": "675-1892"
  },
  {
    "place": "DRT",
    "fire": "",
    "police": "",
    "disaster": "0918-9081527"
  },
  {
    "place": "Guiguinto",
    "fire": "690-7957",
    "police": "794-0033",
    "disaster": "794-1664"
  },
  {
    "place": "Hagonoy",
    "fire": "793-2018",
    "police": "793-0018",
    "disaster": "793-5378 / / 793-5811"
  },
  {
    "place": "Malolos City",
    "fire": "662-3472",
    "police": "791-0257",
    "disaster": "791-7332 / / 790-6785"
  },
  {
    "place": "Marilao",
    "fire": "711-4838",
    "police": "711-0806",
    "disaster": "933-0206"
  },
  {
    "place": "Meycauayan",
    "fire": "840-7996 / / 840-4554",
    "police": "840-7998",
    "disaster": "840-4554"
  },
  {
    "place": "Norzagaray",
    "fire": "694-7996",
    "police": "694-0578",
    "disaster": "694-1715"
  },
  {
    "place": "Obando",
    "fire": "02-299-7996",
    "police": "02-292-2043",
    "disaster": "02-292-2043"
  },
  {
    "place": "Pandi",
    "fire": "661-7996",
    "police": "661-2190",
    "disaster": "914-0066"
  },
  {
    "place": "Paombong",
    "fire": "665-7996",
    "police": "665-7998",
    "disaster": "665-1522"
  },
  {
    "place": "Plaridel",
    "fire": "670-7996",
    "police": "795-0057",
    "disaster": "670-2673"
  },
  {
    "place": "Pulilan",
    "fire": "676-7996",
    "police": "769-1204",
    "disaster": "676-1126"
  },
  {
    "place": "San Ildefonso",
    "fire": "677-1790",
    "police": "677-1928",
    "disaster": "677-0548"
  },
  {
    "place": "San Miguel",
    "fire": "678-7996",
    "police": "678-7998",
    "disaster": "678-2452"
  },
  {
    "place": "San Rafael",
    "fire": "761-5562",
    "police": "902-0185",
    "disaster": "902-0075"
  },
  {
    "place": "SJDM",
    "fire": "691-7996 / / 691-6017",
    "police": "691-7977 / / 691-2970",
    "disaster": "691-6562"
  },
  {
    "place": "Santa Maria",
    "fire": "641-7996",
    "police": "641-7998",
    "disaster": "641-4783 / / 641-5186"
  }
];

export const otherEmergency: OtherEmergency[] = [
  {
    "label": "Bureau of Fire Protection (Bulacan)",
    "number": "796-2900"
  },
  {
    "label": "Philippine National Police (Bulacan)",
    "number": "662-0273"
  },
  {
    "label": "Red Cross (Bulacan)",
    "number": "896-0568 / 662-5922"
  },
  {
    "label": "DSWD (Bulacan)",
    "number": "662-1828"
  },
  {
    "label": "Camp Alejo",
    "number": "796-2087 / 662-0273"
  },
  {
    "label": "Bulacan Medical Center Emergency",
    "number": "794-1526"
  },
  {
    "label": "PDRRMO Emergency",
    "number": "791-0566"
  },
  {
    "label": "Rescue 117",
    "number": "760-7049"
  }
];
