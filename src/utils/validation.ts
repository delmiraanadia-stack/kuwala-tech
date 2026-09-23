import { Translations } from "@/i18n/pt";

/**
 * Mapeamento de retrocompatibilidade para strings em português legadas.
 * Caso algum endpoint, teste ou resposta retorne uma mensagem de erro em texto corrido,
 * mapeia para a chave canónica correspondente para que possa ser traduzida para EN ou PT.
 */
export const LEGACY_PT_TO_KEY: Record<string, string> = {
  "Selecione o tipo de pedido: Pessoal ou Empresa.": "requestTypeInvalid",
  "O nome completo é obrigatório.": "fullNameRequired",
  "O nome completo deve conter pelo menos 3 caracteres.": "fullNameMin",
  "O nome completo deve conter pelo menos 2 caracteres.": "fullNameMin",
  "O nome não pode exceder 120 caracteres.": "fullNameMax",
  "O nome da empresa é obrigatório para pedidos do tipo Empresa.": "companyNameRequired",
  "O nome da empresa não pode exceder 120 caracteres.": "companyNameMax",
  "Este campo é obrigatório.": "required",
  "Introduza um endereço de email válido (exemplo: seu.nome@empresa.co.mz).": "emailInvalid",
  "Introduza um número de telefone válido.": "phoneRequired",
  "Introduza um contacto telefónico válido (mínimo 8 dígitos).": "phoneMin",
  "Número de telefone demasiado longo.": "phoneMax",
  "Formato de telefone inválido.": "phoneInvalid",
  "Selecione um dos 9 serviços técnicos disponíveis.": "serviceRequired",
  "Selecione um dos 8 serviços técnicos disponíveis.": "serviceRequired",
  "Selecione um bairro válido da cidade de Pemba.": "neighborhoodRequired",
  "Indique a zona ou ponto de referência (ex: Próximo à Escola Secundária / Rotunda).": "referencePointRequired",
  "O ponto de referência deve conter pelo menos 3 caracteres.": "referencePointMin",
  "Ponto de referência demasiado longo.": "referencePointMax",
  "Descreva com detalhe a localização física das instalações.": "locationDescriptionRequired",
  "A descrição da localização deve conter pelo menos 5 caracteres.": "locationDescriptionMin",
  "Descrição de localização demasiado longa.": "locationDescriptionMax",
  "Descreva o projecto ou problema técnico.": "projectDescriptionRequired",
  "Descreva o seu projecto ou problema técnico com pelo menos 15 caracteres.": "projectDescriptionMin",
  "A descrição do projecto não pode exceder 3000 caracteres.": "projectDescriptionMax",
  "Demasiados pedidos enviados. Por favor aguarde 5 minutos antes de tentar novamente.": "rateLimit",
  "Ocorreu um erro interno ao registar o pedido no servidor. Tente novamente mais tarde.": "serverError",
  "Ocorreu um erro no processamento do pedido. Por favor verifique os campos e tente novamente.": "general",
};

/**
 * Resolve uma chave de validação ou mensagem de erro para o idioma selecionado.
 * 
 * @param keyOrMessage Chave canónica (ex: 'emailInvalid', 'fullNameMin') ou string legada.
 * @param t Dicionário de traduções ativo (fornecido por useLanguage).
 * @returns A mensagem de validação traduzida para o idioma selecionado.
 */
export function resolveValidationError(
  keyOrMessage: string | undefined | null,
  t: Translations | any
): string {
  if (!keyOrMessage) return "";

  // 1. Tentar encontrar diretamente pelo código canónico no catálogo de validação
  const validationDict = t?.atendimento?.validation;
  if (validationDict && typeof validationDict[keyOrMessage] === "string") {
    return validationDict[keyOrMessage];
  }

  // 2. Tentar verificar se é um código de erro do servidor em atendimento.errors
  const errorsDict = t?.atendimento?.errors;
  if (errorsDict && typeof errorsDict[keyOrMessage] === "string") {
    return errorsDict[keyOrMessage];
  }

  // 3. Verificar se é uma string legada em português que precisa de ser mapeada
  const canonicalKey = LEGACY_PT_TO_KEY[keyOrMessage.trim()];
  if (canonicalKey) {
    if (validationDict && typeof validationDict[canonicalKey] === "string") {
      return validationDict[canonicalKey];
    }
    if (errorsDict && typeof errorsDict[canonicalKey] === "string") {
      return errorsDict[canonicalKey];
    }
  }

  // 4. Retornar a própria mensagem como fallback seguro
  return keyOrMessage;
}
