USE sakila;

SELECT title, description FROM film;
SELECT * FROM film WHERE film_id = 10;

-- EXERCICIO1 filmes com duracao igual a 126 min 
SELECT * FROM film WHERE length = 126;

-- Ordenação de registros
SELECT * FROM category ORDER BY name DESC;

-- Ordenação aritmetricas
SELECT rental_duration, rental_duration + 5 FROM film;

-- Renomeando coluna
SELECT rental_duration, rental_duration + 5 AS tempo_aluguel_projecao FROM film;

-- EXERCICIO2: title e description = Titulo e Descricao
SELECT title AS "Titulo do Filme", description AS "Descricao do Filme" FROM film;

-- DISTINCT
SELECT DISTINCT country_id FROM city ORDER BY country_id;

-- COMPARAÇÕES (resulta em bool)
SELECT * FROM film WHERE rental_duration > 5;
SELECT * FROM film WHERE length < 60;

-- EXERCICIO3: usuarios desativados
SELECT * FROM customer WHERE active != 1;


-- AND, OR, NOT
-- TRUE TRUE
-- TRUE FALSE
-- NOT INVERTE
SELECT * FROM film 
WHERE rental_duration = 5 AND length  > 90;

SELECT * FROM film 
WHERE title = "APOLLO TEEN" OR title = "ATTACKS HATE";

SELECT * FROM film 
WHERE NOT rental_duration = 7;

-- EXERCICIO4: selecionar aluguel de um usuario com id 239
-- que não é o aluguel com id 2346
-- rental, customer_id, inventory_id
SELECT * FROM rental
WHERE customer_id = 239 
AND NOT inventory_id = 2346;

-- IN (para selecionar dados precisos)
SELECT * FROM film
WHERE length = 60
OR length = 90
OR length = 120;
-- para
SELECT * FROM film
WHERE length IN(60, 90, 120);

-- BETWEEN
SELECT * FROM film
WHERE length BETWEEN 50 AND 55;

-- EXERCICIO5
SELECT * FROM film WHERE replacement_cost BETWEEN 20 AND 25
ORDER BY replacement_cost DESC;

-- Procurando por algum trecho de texto
SELECT * FROM film
WHERE title LIKE("%PHOBIA%");

-- Começa com...
SELECT * FROM customer
WHERE first_name LIKE("ERI%");

-- Termina com...
SELECT * FROM customer
WHERE last_name LIKE("%TS");

-- EXERCICIO6: Filmes com drama na descrição
SELECT * FROM film
WHERE description LIKE("%DRAMA%");

-- Expressões regulares (pesquisa avançada, sem percentagem)
SELECT * FROM film
WHERE description REGEXP("DRAMA");

-- Começa com...
SELECT * FROM film
WHERE title REGEXP("^DA");

-- Termina com...
SELECT * FROM film
WHERE title REGEXP("RA$");

-- EXERCICIO7: last_name com nome que terminam com son
SELECT * FROM customer
WHERE last_name REGEXP("son$");



-- COUNT: função de agregação (baseada em condições)
SELECT COUNT(*) AS "7 day rental movies" FROM film WHERE rental_duration = 7;

-- LIMIT: limitando o número de resultados recebidos
SELECT * FROM film
ORDER BY length DESC LIMIT 5;

-- EXERCICIO8: selecionar 3 filmes com menor duração de aluguel
SELECT * FROM film
ORDER BY rental_duration 
LIMIT 3;