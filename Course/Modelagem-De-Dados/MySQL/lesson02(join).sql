SELECT * FROM customer
JOIN address
ON customer.address_id = address.address_id; -- id tabela_id

-- OU
SELECT c.first_name, c.last_name, a.address 
FROM customer AS c JOIN address AS a
ON c.address_id = a.address_id;

-- JOIN em múltiplas tabelas
SELECT f.film_id, f.title, c.category_id, c.name
FROM film f JOIN film_category fc
ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id;

-- EXERCICIO8: Nome do filme (titulo) e o nome e sobrenome do ator
SELECT f.title, a.first_name, a.last_name
FROM film f
JOIN film_actor fa
USING(film_id) -- -> ON f.film_id = fa.film_id
JOIN actor a
USING(actor_id); -- -> ON a.actor_id = fa.actor_id;

SELECT * FROM film;
SELECT * FROM film_actor;
SELECT * FROM actor;
SELECT * FROM category;