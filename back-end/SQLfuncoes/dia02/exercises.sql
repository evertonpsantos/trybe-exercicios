-- Exercício 1
SELECT 
	p.title, 
    BO.domestic_sales AS 'domestic_sales',
	BO.international_sales AS 'international sales'
FROM 
	pixar.movies AS p
		INNER JOIN 
	pixar.box_office AS BO ON p.id = BO.movie_id;