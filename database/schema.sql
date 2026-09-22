-- Schema de Persistência PostgreSQL para Neon / Vercel
-- Tabela de Pedidos de Atendimento Técnico - KUWALA TECH

CREATE TABLE IF NOT EXISTS service_requests (
  id VARCHAR(64) PRIMARY KEY,
  request_type VARCHAR(20) NOT NULL,
  full_name VARCHAR(120) NOT NULL,
  company_name VARCHAR(120),
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  service VARCHAR(80) NOT NULL,
  neighborhood VARCHAR(80) NOT NULL,
  reference_point VARCHAR(200) NOT NULL,
  location_description TEXT NOT NULL,
  project_description TEXT NOT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'NEW',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Índices para performance e consultas por data e status
CREATE INDEX IF NOT EXISTS idx_service_requests_created_at
ON service_requests (created_at DESC);

CREATE INDEX IF NOT EXISTS idx_service_requests_status
ON service_requests (status);
