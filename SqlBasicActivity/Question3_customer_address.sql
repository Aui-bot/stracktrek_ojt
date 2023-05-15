SELECT first_name,
last_name, 
CONCAT_WS(', ', district, postal_code)
AS district_postal_code
FROM customer 
JOIN address ON
customer.address_id = address.address_id
WHERE
address.district <>''
AND address.postal_code <>'';

