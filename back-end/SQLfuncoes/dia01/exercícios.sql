-- 1. Escreva uma query que exiba o maior salário da tabela.
SELECT MAX(salary) FROM hr.employees;

-- 2. Escreva uma query que exiba a diferença entre o maior e o menor salário
SELECT MAX(salary) - MIN(salary) FROM hr.employees;

-- 3. Escreva uma query que exiba a média salarial de cada JOB_ID, ordenando pela média salarial em ordem decrescente.
SELECT job_id, ROUND(AVG(salary)) AS media_salarial
FROM hr.employees 
GROUP BY job_id
ORDER BY media_salarial DESC;

-- 4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.
SELECT SUM(salary) FROM hr.employees;

-- 5. Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.
SELECT 
	ROUND(MAX(salary), 2) AS biggest_salary,
	ROUND(MIN(salary), 2) AS smallest_salary,
    	ROUND(SUM(salary), 2) AS salary_sum,
	ROUND(AVG(salary), 2) AS salary_average
FROM hr.employees;

-- 6. Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras (IT_PROG).
SELECT job_id, COUNT(*) as total
FROM hr.employees
WHERE job_id = 'IT_PROG';