USE sakila;

-- Funções(Min e Max)
SELECT MIN(length) FROM film;
SELECT MAX(length) FROM film;

-- Função AVG (average)
SELECT AVG(length) FROM film; -- valor medio de duração

-- Função SUM (soma)
SELECT SUM(length) FROM film;

-- EXERCICIO1: Somar toda quantia de pagament,
-- mostrar quantos pagamentos foram realizados
-- e pegar a media do pagamento 

SELECT * FROM payment;
SELECT SUM(amount) FROM payment;
SELECT MAX(payment_id) FROM payment;
-- OU
SELECT COUNT(amount) AS "How much amount", 
SUM(amount) AS "sum of payment amount",
AVG(amount) AS "average payment"
FROM payment;