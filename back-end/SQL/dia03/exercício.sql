--Antes de rodas as querys
USE PecasFornecedores;


--Exercício 1
SELECT * FROM Pecas
WHERE `name` LIKE 'GR%';

--Exercício 2
SELECT * FROM Fornecimentos
WHERE peca = 2
ORDER BY Fornecedor;

--Exercício 3
SELECT peca, Preco, Fornecedor FROM Fornecimentos
WHERE Fornecedor LIKE '%N%';

--Exercício 4
SELECT * FROM Fornecedores
WHERE `name` LIKE '%LTDA'
ORDER BY name DESC;

--Exercício 5
SELECT COUNT(*) FROM Fornecedores
WHERE code LIKE '%F%';

--Exercício 6
SELECT * FROM Fornecimentos
WHERE Preco BETWEEN 15 AND 40
ORDER BY Preco;

--Exercício 7
SELECT COUNT(*) FROM Vendas
WHERE order_date BETWEEN '2018-04-15' AND '2019-07-30';