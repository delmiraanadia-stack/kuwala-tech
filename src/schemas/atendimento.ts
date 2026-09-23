import { z } from "zod";

export const SERVICE_KEYS = [
  "automacao-industrial",
  "instrumentacao-industrial",
  "automacao-residencial",
  "energia-solar",
  "instalacoes-electricas",
  "redes-informaticas",
  "seguranca-electronica",
  "desenvolvimento-tecnologico",
  "manutencao-tecnica",
] as const;

export const PEMBA_NEIGHBORHOODS = [
  "Alto Gingone",
  "Cariacó",
  "Cimento",
  "Chuíba",
  "Eduardo Mondlane",
  "Ingonane",
  "Josina Machel",
  "Koba",
  "Mahate",
  "Maringanha",
  "Metula",
  "Muaria",
  "Muxára",
  "Napica",
  "Natite",
  "Paquitequete",
  "Wimbe",
  "Outro bairro de Pemba",
] as const;

export type ServiceType = (typeof SERVICE_KEYS)[number];
export type NeighborhoodType = (typeof PEMBA_NEIGHBORHOODS)[number];
export type RequestKind = "personal" | "company";

export const VALIDATION_CODES = {
  required: "required",
  invalid: "invalid",
  requestTypeInvalid: "requestTypeInvalid",
  fullNameRequired: "fullNameRequired",
  fullNameMin: "fullNameMin",
  fullNameMax: "fullNameMax",
  companyNameRequired: "companyNameRequired",
  companyNameMax: "companyNameMax",
  emailRequired: "emailRequired",
  emailInvalid: "emailInvalid",
  phoneRequired: "phoneRequired",
  phoneMin: "phoneMin",
  phoneMax: "phoneMax",
  phoneInvalid: "phoneInvalid",
  serviceRequired: "serviceRequired",
  neighborhoodRequired: "neighborhoodRequired",
  referencePointRequired: "referencePointRequired",
  referencePointMin: "referencePointMin",
  referencePointMax: "referencePointMax",
  locationDescriptionRequired: "locationDescriptionRequired",
  locationDescriptionMin: "locationDescriptionMin",
  locationDescriptionMax: "locationDescriptionMax",
  projectDescriptionRequired: "projectDescriptionRequired",
  projectDescriptionMin: "projectDescriptionMin",
  projectDescriptionMax: "projectDescriptionMax",
} as const;

export type ValidationCode = keyof typeof VALIDATION_CODES;

export const atendimentoBaseSchema = z.object({
  requestType: z.enum(["personal", "company"], {
    errorMap: () => ({ message: "requestTypeInvalid" }),
  }),
  fullName: z
    .string()
    .trim()
    .min(1, "fullNameRequired")
    .max(120, "fullNameMax")
    .refine((val) => val.length === 0 || val.length >= 2, {
      message: "fullNameMin",
    }),
  companyName: z
    .string()
    .trim()
    .max(120, "companyNameMax")
    .optional()
    .or(z.literal("")),
  email: z
    .string()
    .trim()
    .min(1, "emailRequired")
    .refine((val) => val.length === 0 || z.string().email().safeParse(val).success, {
      message: "emailInvalid",
    }),
  phone: z
    .string()
    .trim()
    .min(1, "phoneRequired")
    .max(25, "phoneMax")
    .refine((val) => val.length === 0 || /^[+0-9\s-()]+$/.test(val), {
      message: "phoneInvalid",
    })
    .refine(
      (val) =>
        val.length === 0 || !/^[+0-9\s-()]+$/.test(val) || val.length >= 8,
      {
        message: "phoneMin",
      }
    ),
  service: z.enum(SERVICE_KEYS, {
    errorMap: () => ({ message: "serviceRequired" }),
  }),
  neighborhood: z.enum(PEMBA_NEIGHBORHOODS, {
    errorMap: () => ({ message: "neighborhoodRequired" }),
  }),
  referencePoint: z
    .string()
    .trim()
    .min(1, "referencePointRequired")
    .max(200, "referencePointMax")
    .refine((val) => val.length === 0 || val.length >= 3, {
      message: "referencePointMin",
    }),
  locationDescription: z
    .string()
    .trim()
    .min(1, "locationDescriptionRequired")
    .max(500, "locationDescriptionMax")
    .refine((val) => val.length === 0 || val.length >= 5, {
      message: "locationDescriptionMin",
    }),
  projectDescription: z
    .string()
    .trim()
    .min(1, "projectDescriptionRequired")
    .max(3000, "projectDescriptionMax")
    .refine((val) => val.length === 0 || val.length >= 15, {
      message: "projectDescriptionMin",
    }),
});

// Refinement for dynamic company field validation
export const atendimentoSchema = atendimentoBaseSchema.superRefine((data, ctx) => {
  if (data.requestType === "company") {
    if (!data.companyName || data.companyName.trim().length < 2) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "companyNameRequired",
        path: ["companyName"],
      });
    }
  }
});

export type AtendimentoFormData = z.infer<typeof atendimentoSchema>;

export type RequestStatus =
  | "NEW"
  | "REVIEWING"
  | "CONTACTED"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "CANCELLED";

export interface ServiceRequestRecord {
  id: string;
  request_type: "personal" | "company";
  full_name: string;
  company_name: string | null;
  email: string;
  phone: string;
  service: ServiceType;
  neighborhood: NeighborhoodType;
  reference_point: string;
  location_description: string;
  project_description: string;
  status: RequestStatus;
  created_at: string;
  updated_at: string;
}
