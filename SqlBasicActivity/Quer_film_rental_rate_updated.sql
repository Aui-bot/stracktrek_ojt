UPDATE film
SET rental_rate = 3.99
WHERE rental_rate <= 3
RETURNING rental_rate;

SELECT film_id, title, rental_rate FROM film
WHERE rental_rate = 3.99
ORDER BY film_id ASC;
