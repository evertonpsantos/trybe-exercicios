--Antes de rodas as querys
USE PecasFornecedores;


--Exercício 1
SELECT * FROM Pecas
WHERE `name` LIKE 'GR%';

--Exercício 2
SELECT * FROM Fornecimentos
WHERE peca = 2
ORDER BY Fornecedor;