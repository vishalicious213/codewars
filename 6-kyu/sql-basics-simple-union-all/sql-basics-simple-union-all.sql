SELECT * FROM (
SELECT 'US' AS location, id, name, price, card_name, card_number, transaction_date from ussales
WHERE price >= 50
​
UNION ALL
​
SELECT 'EU' AS location, id, name, price, card_name, card_number, transaction_date from eusales
WHERE price >= 50
) combined_sales
​
ORDER BY 
CASE location
  WHEN 'US' THEN 1
  WHEN 'EU' THEN 2
END, id;