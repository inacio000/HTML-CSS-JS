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

-- Agrupamento de dados (GROUP BY)
SELECT COUNT(city_id) AS "Qtd de cidades", 
c.country AS "qtd de cidades" FROM city
JOIN country c
USING(country_id)
GROUP BY(country);

-- EXERCICIO2: Agrupar os filmes por categoria
SELECT COUNT(film_id) AS "qtd de filmes", c.name FROM film
JOIN film_category fc
USING(film_id)
JOIN category c
USING(category_id)
GROUP BY(c.name);

-- subquery(uma query dentro de outra)
-- Selecionar filmes com maior duração 
SELECT title, length FROM film
WHERE
	length = (SELECT MAX(length) FROM film);
    
-- EXERCICIO3: Selecionar filmes com tempo de duração acima da media AVG
SELECT title, length, rental_duration FROM film
WHERE
	rental_duration > (SELECT AVG(rental_duration) FROM film);
    
    
-- Stored procedure sem arg e com arg
-- escolhendo um delimitador (diz onde termina a "procedure") 
-- e criando procedure sem arg
DELIMITER // 
CREATE PROCEDURE select_all_active_users ()
BEGIN
	SELECT * FROM customer
    WHERE active = 1;
END//
DELIMITER ;

-- chamando a função
CALL select_all_active_users()

-- Criando procedure com arg
DELIMITER //
CREATE PROCEDURE get_movies_from_category (category_name VARCHAR(100))
BEGIN
	SELECT f.title, c.name FROM film f
    JOIN film_category fc
    USING(film_id)
    JOIN category c
    USING(category_id)
    WHERE c.name = category_name;
END//
DELIMITER ;

-- executando
CALL get_movies_from_category("Horror")


-- EXERCICIO4: Crie uma procedure que entrega filmes maior ou igual 
-- a um rental_duration que vem de um argumento
DELIMITER //
CREATE PROCEDURE get_movies_by_rd (rd INT)
BEGIN
	SELECT title, rental_duration FROM film
    WHERE rental_duration >= rd;
END//
DELIMITER ;

CALL get_movies_by_rd(6)