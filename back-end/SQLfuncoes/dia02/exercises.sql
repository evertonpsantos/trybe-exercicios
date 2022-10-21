-- Exercício 1
SELECT 
	p.title, 
    BO.domestic_sales AS 'domestic_sales',
	BO.international_sales AS 'international sales'
FROM 
	pixar.movies AS p
		INNER JOIN 
	pixar.box_office AS BO ON p.id = BO.movie_id;

-- Exercício 2
SELECT 
    p.title,
    (BO.domestic_sales + BO.international_sales) AS total_sales
FROM
    pixar.movies AS p
        INNER JOIN
    pixar.box_office AS BO ON p.id = BO.movie_id
WHERE
    BO.international_sales > BO.domestic_sales
ORDER BY total_sales DESC;

-- Exercício 3
SELECT 
    p.title, BO.rating
FROM
    pixar.movies AS p
        INNER JOIN
    pixar.box_office AS BO ON p.id = BO.movie_id
ORDER BY BO.rating DESC;