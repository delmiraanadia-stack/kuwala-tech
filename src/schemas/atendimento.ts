import { z } from "zod";

export const SERVICE_KEYS = [
  "automacao-industrial",
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

export const atendimentoBaseSchema = z.object({
  requestType: z.enum(["personal", "company"], {
    errorMap: () => ({ message: "Selecione o tipo de pedido: Pessoal ou Empresa." }),
  }),
  fullName: z
    .string()
    .trim()
    .min(3, "O nome completo deve conter pelo menos 3 caracteres.")
    .max(120, "O nome não pode exceder 120 caracteres."),
  companyName: z
    .string()
    .trim()
    .max(120, "O nome da empresa não pode exceder 120 caracteres.")
    .optional()
    .or(z.literal("")),
  email: z
    .string()
    .trim()
    .email("Introduza um endereço de email válido (exemplo: seu.nome@empresa.co.mz)."),
  phone: z
    .string()
    .trim()
    .min(8, "Introduza um contacto telefónico válido (mínimo 8 dígitos).")
    .max(25, "Número de telefone demasiado longo.")
    .regex(/^[+0-9\s-()]+$/, "Formato de telefone inválido."),
  service: z.enum(SERVICE_KEYS, {
    errorMap: () => ({ message: "Selecione um dos 8 serviços técnicos disponíveis." }),
  }),
  neighborhood: z.enum(PEMBA_NEIGHBORHOODS, {
    errorMap: () => ({ message: "Selecione um bairro válido da cidade de Pemba." }),
  }),
  referencePoint: z
    .string()
    .trim()
    .min(3, "Indique a zona ou ponto de referência (ex: Próximo à Escola Secundária / Rotunda).")
    .max(200, "Ponto de referência demasiado longo."),
  locationDescription: z
    .string()
    .trim()
    .min(5, "Descreva com detalhe a localização física das instalações.")
    .max(500, "Descrição de localização demasiado longa."),
  projectDescription: z
    .string()
    .trim()
    .min(15, "Descreva o seu projecto ou problema técnico com pelo menos 15 caracteres.")
    .max(3000, "A descrição do projecto não pode exceder 3000 caracteres."),
});

// Refinement for dynamic company field validation
export const atendimentoSchema = atendimentoBaseSchema.superRefine((data, ctx) => {
  if (data.requestType === "company") {
    if (!data.companyName || data.companyName.trim().length < 2) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "O nome da empresa é obrigatório para pedidos do tipo Empresa.",
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
