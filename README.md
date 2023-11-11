# Projeto de Testes E2E com Cypress Manipulae

Este projeto é configurado com testes end-to-end (E2E) usando Cypress para a plataforma Manipulaê. Os testes automatizados cobrem várias regras de negócio associadas ao processo de cotação de receitas.

## Dependências

Para executar os testes, você precisa ter o Node.js e o npm instalados. Os testes foram construídos usando as seguintes dependências principais:

- `cypress` para rodar os testes E2E.
- `cypress-file-upload` para anexar arquivos nos testes.

## Instalação

Para instalar as dependências, siga os seguintes passos:

1. Clone o repositório para sua máquina local.
2. Navegue até a pasta do projeto no seu terminal.
3. Execute `npm install` para instalar as dependências listadas no arquivo `package.json`.

## Executando os Testes

Para abrir o Cypress e executar os testes interativamente:

```bash
npm run cypress:open
```

Esse script abrirá a interface do Cypress, onde você pode visualizar e executar os testes individualmente

Estrutura do Projeto
O projeto segue a estrutura padrão do Cypress:

# Regras de Negócio Testadas

Cada teste E2E dentro da pasta `e2e/` verifica uma regra de negócio específica:

| Regra | Descrição                              | Arquivo de Teste                            |
| ----- | -------------------------------------- | ------------------------------------------- |
| RN1   | Campos obrigatórios                    | `rn1_quote_required_fields_spec.cy.js`      |
| RN2   | Validação do campo Nome                | `rn2_quote_name_validation_spec.cy.js`      |
| RN3   | Validação do campo Email               | `rn3_quote_email_validation_spec.cy.js`     |
| RN4   | Validação do campo CEP                 | `rn4_quote_cep_validation_spec.cy.js`       |
| RN5   | CEP deve ser válido                    | `rn5_quote_cep_integration_spec.cy.js`      |
| RN6   | Validação do campo Celular             | `rn6_quote_phone_validation_spec.cy.js`     |
| RN7   | Evitar duplicidade no envio da receita | `rn7_quote_duplicate_submission_spec.cy.js` |

Os arquivos de teste estão nomeados de acordo com a regra de negócio que validam, facilitando a identificação e execução dos casos de teste relacionados.
